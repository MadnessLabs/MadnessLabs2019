import { Component, Element, h } from "@stencil/core";
// insue importing waypoints
// import Waypoints from "waypoints";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {

  @Element()
  homeEl: any;
  Waypionts: any;
  
  componentDidLoad(){
    // const waypoint = new Waypoints
    const ionContent = this.homeEl.querySelector('ion-content');

    // ionContent.addEventListener('ionScrollStart', () => console.log('scroll start'));

    ionContent.addEventListener('ionScroll', () => console.log('scroll start'));

    console.log('wow this is scrolling!');
    

    window.onscroll = () => {
      console.log('this is detecting a scroll');
      
    }

  }

  render() {
    return [
      <ion-content>
        <div class="nav-main-wrapper">
          <div class="nav-main-content">
            <aside>
              <ml-latest-post />
            </aside>
            <main>
              <div class="hp-row1">
                <h1>Madness Labs</h1>
              </div>
              <div class="hp-row2">
                <h2>
                  <span class="sub-line-text">
                  Creativity with
                  </span>
                  <span class="logo">
                    <img src="/assets/icon/ml-logo-bold-1.png" />
                  </span>
                </h2>
                <img src="" alt="" />
              </div>
            </main>
          </div>

          <div>
            <p>test content.</p>
          </div>

          <div class="video-container">
            <video autoplay loop width="960" height="540">
              <source src="/assets/videos/starry-ocean.mov" />
              <source src="/assets/videos/starry-ocean.mp4" />
            </video>
          </div>
        </div>
      </ion-content>
    ];
  }
}
