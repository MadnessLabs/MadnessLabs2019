import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  render() {
    return [
      <ion-content>
        <div class="hp-main-content">
          <aside>
            <ml-latest-post />
          </aside>
          <main>
            <div class="hp-row1">
              <h1>Madness Labs</h1>
            </div>
            <div class="hp-row2">
              <h2>
                Creativity with
                <span>
                  <img src="/assets/icon/ml-logo-bold-1.png" />
                </span>
              </h2>
              <img src="" alt="" />
            </div>
          </main>
        </div>

        <div class="video-container">
          <video autoplay loop width="960" height="540">
            <source src="/assets/videos/starry-ocean.mov" />
            <source src="/assets/videos/starry-ocean.mp4" />
          </video>
        </div>
      </ion-content>
    ];
  }
}
