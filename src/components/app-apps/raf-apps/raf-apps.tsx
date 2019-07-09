import { Component, Element, h, Prop, State } from "@stencil/core";

@Component({
  tag: "raf-apps",
  styleUrl: "raf-apps.css"
})
export class RafApps {
  @Element() appsEl: any;
  slider: any;
  sliderOptions: any = {
    initialSlide: 0,
    allowTouchMove: true,
    simulateTouch: true,
    slidesPerView: 1,
    autoplay: false
  };

  @Prop() apps: any;
  @State() currentApp: any = { views: [] };
  @State() slideIndex: number;

  handleSlide(_event, index) {
    this.slideIndex = index;

    this.slider.slideTo(this.slideIndex);
  }

  handleSlideNext(_event, direction) {

    if (direction === "forward") {
        console.log("widthin forward");
        
      this.slideIndex =
        this.slideIndex === this.currentApp.views.length - 1
          ? 0
          : this.slideIndex + 1;
    } else if (direction === "back") {
        console.log("within back");
        
      this.slideIndex =
        this.slideIndex === 0
          ? this.currentApp.views.length - 1
          : this.slideIndex - 1;
    }
    this.slider.slideTo(this.slideIndex);
  }

  componentDidLoad() {
    this.slideIndex = 0;
    this.currentApp = this.apps[0];
    console.log(this.currentApp, "thisDOTcurrentApp");

    this.slider = this.appsEl.querySelector("ion-slides");
  }

  render() {
    return (
      <div class="apps-wrapper">
        <div class="apps">
          <div class="col1 col">
            <h2>{this.currentApp.name}</h2>
            <p>{this.currentApp.text}</p>
          </div>
          <div class="col2 col">
            <ion-slides options={this.sliderOptions} pager={true}>
              {this.currentApp.views.map(view => (
                <ion-slide>
                  <img
                    class="phone"
                    src="/assets/images/ios-phone-portrait.svg"
                  />
                  <img class="view-image" src={view.image} />
                </ion-slide>
              ))}
            </ion-slides>
            <div class="custom-pager-wrapper">
              <span
                class="move-slider back"
                onClick={event => this.handleSlideNext(event, "back")}
              >
                <ion-icon name="arrow-round-back" />
              </span>
              {this.currentApp.views.map((view, index) => (
                <span
                  class="custom-pager"
                  onClick={event => this.handleSlide(event, index)}
                >
                  <img src={view.image} />
                </span>
              ))}
              <span
                class="move-slider forward"
                onClick={event => this.handleSlideNext(event, "forward")}
              >
                <ion-icon name="arrow-round-back" />
              </span>
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
