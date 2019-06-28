import firebase from "firebase/app";
import "firebase/auth";

interface IFireEnjinAuthConfig {
  authLocalStorageKey?: string;
  tokenLocalStorageKey?: string;
  firebase?: {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
  };
  facebook?: {
    permissions: string[];
  };
  googlePlus?: {
    options: {
      webClientId: string;
      offline: boolean;
    };
  };
}

export class AuthService {
  private config: IFireEnjinAuthConfig = {
    authLocalStorageKey: "enjin:session",
    tokenLocalStorageKey: "enjin:token",
  };
  session: any;

  constructor(config?: IFireEnjinAuthConfig) {

    this.config = { ...this.config, ...config };

    if (firebase.apps.length === 0) {
      firebase.initializeApp(config.firebase);
    }
  }

  getFromStorage() {
    return localStorage.getItem(this.config.authLocalStorageKey)
      ? JSON.parse(localStorage.getItem(this.config.authLocalStorageKey))
      : null;
  }  

  // isLoggedIn(): TMG.user.ISession {
  //   return firebase.auth().currentUser
  //     ? firebase.auth().currentUser
  //     : this.getFromStorage();
  // }

  

  emitLoggedOutEvent() {
    document.body.dispatchEvent(
      new CustomEvent("authLoggedOut", { detail: {} })
    );
  }  

  logout() {
    this.emitLoggedOutEvent();
    firebase.auth().signOut().then(() => {
      return 'signed out just fine'
    }).catch(() => {
      return 'there was an issue'
    })
  }

  isLoggedIn() {
    return firebase.auth().currentUser
      ? firebase.auth().currentUser
      : this.getFromStorage();
  }  

  onAuthChanged(callback) {
    firebase.auth().onAuthStateChanged(async session => {
      if (
        !session ||
        (!session.emailVerified &&
          session.providerData &&
          session.providerData[0].providerId === "password")
      ) {
        return false;
      }
      if (session) {
        localStorage.setItem(
          this.config.authLocalStorageKey,
          JSON.stringify(session)
        );
        localStorage.setItem(
          this.config.tokenLocalStorageKey,
          await firebase.auth().currentUser.getIdToken(true)
        );
      }
      if (callback && typeof callback === "function") {
        callback(session);
      }
    });

    if (!localStorage.getItem(this.config.authLocalStorageKey)) {
      callback(null);
    }
  }

  withSocial(network: string, redirect = false): Promise<any> {
    let provider;
    let shouldRedirect = redirect;
    if (window.matchMedia("(display-mode: standalone)").matches) {
      console.log("Running in PWA mode...");
      shouldRedirect = true;
    }

    return new Promise((resolve, reject) => {
      if ((window as any).cordova) {

      } else {
        if (network === "facebook") {
          provider = new firebase.auth.FacebookAuthProvider();
        } else if (network === "google") {
          provider = new firebase.auth.GoogleAuthProvider();
        } else if (network === "twitter") {
          provider = new firebase.auth.TwitterAuthProvider();
        }  else if (network === "github") {
          provider = new firebase.auth.GithubAuthProvider();
        } else {
          reject({
            message:
              "A social network is required or the one provided is not yet supported."
          });
        }
        const authService: any = firebase.auth();
        authService[shouldRedirect ? "signInWithRedirect" : "signInWithPopup"](
          provider
        )
          .then(data => {
            // this.emitLoggedInEvent(data);
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      }
    });
  }
}