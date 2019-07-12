import { Component, Element, Prop, State, h } from "@stencil/core";

@Component({
  tag: "ml-apps",
  styleUrl: "ml-apps.css",
  scoped: true
})
export class MlApps {
  @Element() appsEl: any;
  slider: any;
  slider2: any;

  sliderTopOptions: any = {
    initialSlide: 0,
    allowTouchMove: true,
    simulateTouch: true,
    slidesPerView: 1,
    autoplay: false,
    pager: false
  };

  sliderBottomOptions: any = {
    initialSlide: 0,
    allowTouchMove: true,
    simulateTouch: true,
    slidesPerView: 4,
    autoplay: false,
    pager: false
  };

  @Prop() apps: any;
  @State() currentApp: any = { views: [] };
  @State() slideIndex: number;
  @State() slideIndex2: number;

  handleSlide(_event, index) {
    this.slideIndex = index;
    this.slider.slideTo(this.slideIndex);
  }

  handleSlideNext(_event, direction) {
    if (direction === "forward") {
      this.slideIndex2 =
        this.slideIndex2 === this.currentApp.views.length - 1
          ? 0
          : this.slideIndex2 + 1;
    } else if (direction === "back") {
      this.slideIndex2 =
        this.slideIndex2 === 0
          ? this.currentApp.views.length - 1
          : this.slideIndex2 - 1;
    }
    this.slider2.slideTo(this.slideIndex2);
  }
  handleApps(_events, index) {
    this.currentApp = this.apps[index];
  }

  componentDidLoad() {
    this.slideIndex = 0;
    this.slideIndex2 = 0;
    this.currentApp = this.apps[0];

    this.slider = this.appsEl.querySelector(".top-slider");
    this.slider2 = this.appsEl.querySelector(".custom-pager");
  }

  render() {
    return (
      <div class="apps-wrapper">
        <div class="apps">
          <div class="col1 col">
            <h2>{this.currentApp.name}</h2>
            <p>{this.currentApp.text}</p>
            <div class="apps-pager">
              <h3>choose from our apps: </h3>
              {this.apps.map((app, index) => (
                <span
                  class="apps-custom-pager"
                  onClick={event => this.handleApps(event, index)}
                >
                  <img src={app.imageThumb} />
                </span>
              ))}
            </div>
          </div>
          <div class="col2 col">
            <h2>{this.currentApp.name}</h2>
            <img class="phone" src="/assets/images/ios-phone-portrait.svg" />
            <ion-slides
              class="top-slider"
              options={this.sliderTopOptions}
              pager={false}
            >
              {this.currentApp.views.map(view => (
                <ion-slide>
                  <img class="view-image" src={view.imageMain} />
                </ion-slide>
              ))}
            </ion-slides>
            <div class="custom-pager-wrapper">
              <div
                class="move-slider back"
                onClick={event => this.handleSlideNext(event, "back")}
              >
                <ion-icon name="arrow-round-back" />
              </div>
              <ion-slides
                options={this.sliderBottomOptions}
                class="custom-pager"
              >
                {this.currentApp.views.map((view, index) => (
                  <ion-slide
                    class="custom-pager-icon"
                    onClick={event => this.handleSlide(event, index)}
                  >
                    <img src={view.imageThumb} />
                  </ion-slide>
                ))}
              </ion-slides>
              <div
                class="move-slider forward"
                onClick={event => this.handleSlideNext(event, "forward")}
              >
                <ion-icon name="arrow-round-forward" />
              </div>
            </div>
          </div>
          <div class="background-div">
            <img class="background-image" src={this.currentApp.background} />
            <div class="background-overlay" />
          </div>
        </div>
      </div>
    );
  }
}
