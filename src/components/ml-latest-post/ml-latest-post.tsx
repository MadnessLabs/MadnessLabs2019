import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "ml-latest-post",
  styleUrl: "ml-latest-post.css"
})
export class MlLatestPost {
  @Prop() title = "Latest Post";
  @Prop() description = "Loading...";
  @Prop() image = "./assets/icon/icon192.png";

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
