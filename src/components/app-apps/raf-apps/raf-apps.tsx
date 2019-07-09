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
  tempInfo = [
    {
      name: "view1",
      image: "/assets/images/raf/views/referAFloodIcon@2x.png";
    }
  ];

  componentDidLoad() {
    this.slider = this.appsEl.querySelector("ion-slides");
    console.log(this.apps, "in here doing");
    console.log(this.tempInfo, 'temp info?');
    
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
                  <h2>{this.tempInfo}</h2>
                  {console.log(this, 'this ShOULD be what I Think it is')}
                  {this.tempInfo.map(view => {
                        <h2>{view.name}</h2>
                    })}
                  <ion-slides options={this.sliderOptions} pager={true}>

                    {/* {app.views.map(view => {
                      <div class="extra-class">
                          {view.image}
                        <ion-slide>
                          <img src={view.image} />
                        </ion-slide>
                      </div>
                    })} */}
                  </ion-slides>
                  <div class="pag-wrapper">
                    {/* {app.views.map(view => {
                      <span>
                        <img src={view.image} />
                      </span>;
                    })} */}
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
