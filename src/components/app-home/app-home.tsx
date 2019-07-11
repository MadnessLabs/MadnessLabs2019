import { Component, Element, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {

  @Element()
  homeEl: any;
  Waypionts: any;
  navWrapper: any;

  scrollStart(){
    console.log('Hello?');
    
    this.navWrapper.classList.add('header-nav');
  }
  
  componentDidLoad(){
    const ionContent = this.homeEl.querySelector('ion-content');
    this.navWrapper = ionContent.querySelector('.nav-main-wrapper');
    ionContent.scrollEvents = true;

    ionContent.addEventListener('ionScrollStart', () => this.scrollStart());

    ionContent.addEventListener('ionScroll', () => console.log('ion scroll'));

  }

  render() {
    return [
      <ion-content>
        <div class="nav-main-wrapper">
          <div class="video-container">
            <video autoplay loop width="960" height="540">
              <source src="/assets/videos/starry-ocean.mov" />
              <source src="/assets/videos/starry-ocean.mp4" />
            </video>
          </div>          
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
          <ml-navigation />
        </div>
        <div class="nav-placeholder"></div>
        <app-about></app-about>
      </ion-content>
    ];
  }
}
