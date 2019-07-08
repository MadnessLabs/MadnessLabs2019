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
    autoplay: false
  };

  @Prop() apps: any;
  @State() appViews: any;

  componentDidLoad() {
    this.slider = this.appsEl.querySelector("ion-slides");
    console.log(this.apps, "in here doing");
  }

  render() {
    return (
      <div class="apps-wrapper">
        {this.apps
          ? this.apps.map(app => (
              <div class="apps">
                <div class="col1 col">
                  <h2>{app.name}</h2>
                  <p>{app.text}</p>
                </div>
                <div class="col2 col">
                    <h2>{app.views}</h2>
                  <ion-slides options={this.sliderOptions} pager={true}>
                    {app.views.map(view => {
                        <div class="extra-class">
                      <ion-slide>
                        <img src={view.image} />
                      </ion-slide>
                      </div>
                    })}
                  </ion-slides>
                  <div class="pagination-wrapper">
                    {app.views.map(view => {
                      <span>
                        <img src={view.image} />
                      </span>
                    })}
                  </div>
                </div>
                <img class="background-image" src={app.background} />
              </div>
            ))
          : null}
      </div>
    );
  }
}
