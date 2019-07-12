import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  render() {
    return [
      <ion-content>
        <ml-navigation expanded={true} />
        <app-about />
      </ion-content>
    ];
  }
}
