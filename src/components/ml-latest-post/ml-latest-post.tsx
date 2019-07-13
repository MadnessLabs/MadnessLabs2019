import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "ml-latest-post",
  styleUrl: "ml-latest-post.css"
})
export class MlLatestPost {
  @Prop() title = "Latest Post";
  @Prop() description = "Loading...";
  @Prop() image = "./assets/icon/icon192.png";

  componentDidMount() {
    this.XMLHttpRequest();
    this.fetchData();
  }

  XMLHttpRequest() {
    function reqListener() {
      var data = JSON.parse(this.responseText);
      console.log(data);
    }

    function reqError(err) {
      console.log("Fetch Error :-S", err);
    }

    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.onerror = reqError;
    oReq.open("get", "https://madnesslabs.net/api/v1/feed", true);
    oReq.send();
  }

  fetchData() {
    fetch("https://madnesslabs.net/api/v1/feed")
      .then(function(response) {
        console.log(response.headers.get("author"));
        console.log(response.headers.get("title"));
        this.setState({ title: response.headers.get("title") });
        console.log(response.headers.get("link"));
        console.log(response.headers.get("post"));
        console.log(response.headers.get("date"));

        console.log(response.status);
        console.log(response.statusText);
        console.log(response.type);
        console.log(response.url);

        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          console.log(response.headers.get("post"));
          console.log(data);
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
  }

  render() {
    return [
      <span class="top-corners" />,
      <div class="post-wrapper">
        <div
          class="post-image"
          style={{
            backgroundImage: `url(${this.image})`
          }}
        />
        <h2>{this.title}</h2>
        <p>{this.description}</p>
        <ion-icon name="play-circle" />
      </div>,
      <span class="bottom-corners" />
    ];
  }
}
