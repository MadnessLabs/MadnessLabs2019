import { Component, h } from "@stencil/core";

@Component({
  tag: "app-media",
  styleUrl: "app-media.css"
})
export class AppMedia {
  render() {
    return (
      <ion-content>
        <ml-navigation />
        <div class="page-wrapper">
          <p>Hello AppMedia!</p>
        </div>
      </ion-content>
    );
  }
}
