export class APIService {
  host: string;
  token: string;
  shouldBeAsync = true;
  apiKey: string;

  constructor(
    options: {
      host?: string;
      token?: string;
    } = {}
  ) {
    this.host = options.host;
    this.token = options.token;
  }

  async setToken(token: string) {
    return (this.token = token);
  }

  async makePromise(method: string, endpoint: string, params?: any) {
    return new Promise(async (resolve, reject) => {
      const request = new XMLHttpRequest();
      request.onload = async () => {
        const responseData: any = JSON.parse(request.responseText);
        if (responseData && responseData.data && responseData.success) {
          resolve(responseData.data);
        } else {
          reject({ message: responseData.data });
        }
      };

      request.onerror = () => {
        reject({
          message:
            "There was an error talking to the API, please try agian later or contact support!"
        });
      };

      request.open(method, `${this.host}/${endpoint}`, this.shouldBeAsync);

      request.setRequestHeader(
        "Content-Type",
        "application/json;charset=UTF-8"
      );
      if (this.token) {
        request.setRequestHeader("Authorization", this.token);
      }

      request.send(params ? JSON.stringify(params) : "{}");
    });
  }

  async cache(endpoint: string, params?: any, callback?: (data: any) => void) {
    const localKey =
      endpoint +
      (params
        ? "_" +
          Object.keys(params)
            .map(key => key + "=" + params[key])
            .join("&")
        : "");
    const localCache = localStorage.getItem(localKey);
    if (localCache) {
      if (callback && typeof callback === "function") {
        callback(JSON.parse(localCache));
      }
    }
    try {
      const response = await this.makePromise("GET", endpoint, params);
      localStorage.setItem(localKey, JSON.stringify(response));
      if (callback && typeof callback === "function") {
        callback(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  get(endpoint: string, params?: any): Promise<any> {
    return this.makePromise("GET", endpoint, params);
  }

  post(endpoint: string, params?: any): Promise<any> {
    return this.makePromise("POST", endpoint, params);
  }

  delete(endpoint: string, params?: any): Promise<any> {
    return this.makePromise("DELETE", endpoint, params);
  }
}
