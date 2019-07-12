import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "ml-navigation",
  styleUrl: "ml-navigation.css",
  scoped: true
})
export class MlNavigation {
  /**
   * Is the navigation expanded
   */
  @Prop() expanded = false;

  render() {
    return (
      <div class="nav-wrapper">
        <video autoplay loop width="960" height="540">
          <source src="/assets/videos/starry-ocean.mov" />
          <source src="/assets/videos/starry-ocean.mp4" />
        </video>
        <ml-latest-post />
        <h1>Madness Labs</h1>
        <h2>Creativity with</h2>
        <img src="/assets/icon/ml-logo-bold-1.png" />
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-item href="/">
                <ion-icon name="home" />
                <ion-label>Home</ion-label>
              </ion-item>
            </ion-col>
            <ion-col>
              <ion-item href="/about">
                <ion-icon name="information-circle" />
                <ion-label>About</ion-label>
              </ion-item>
            </ion-col>
            <ion-col>
              <ion-item href="https://blog.madnesslabs.net">
                <ion-icon name="share" />
                <ion-label>Blog</ion-label>
              </ion-item>
            </ion-col>
            <ion-col>
              <ion-item href="/apps">
                <ion-icon name="phone-portrait" />
                <ion-label>Apps</ion-label>
              </ion-item>
            </ion-col>
            <ion-col>
              <ion-item href="/media">
                <ion-icon name="headset" />
                <ion-label>Media</ion-label>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    );
  }
}
