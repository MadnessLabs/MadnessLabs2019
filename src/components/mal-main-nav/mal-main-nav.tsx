import { Component, h } from '@stencil/core';


@Component({
    tag: 'mal-main-nav',
    styleUrl: 'mal-main-nav.css'
})
export class MalMainNav {

    

    render() {
        return (
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
        );
    }
}
