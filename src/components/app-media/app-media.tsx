import { Component, h } from "@stencil/core";

@Component({
  tag: "app-media",
  styleUrl: "app-media.css"
})
export class AppMedia {
  render() {
    return (
      <ion-content class="ion-padding">
        <p>Hello AppMedia!</p>
      </ion-content>
    );
  }
}
