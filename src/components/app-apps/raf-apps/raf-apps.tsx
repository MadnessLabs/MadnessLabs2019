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
  @State() currentApp: any = {views: []};

  componentDidLoad() {
      this.currentApp = this.apps[0];
      console.log(this.currentApp, 'thisDOTcurrentApp');
      
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

                    {
                        
                        this.currentApp.views.map(view => 
                      <div class="extra-class">
                          {view.image}
                        <ion-slide>
                          <img src={view.image} />
                        </ion-slide>
                      </div> 
                    )}
                  </ion-slides>
                  <div class="pag-wrapper">
                    {/* {app.views.map(view => {
                      <span>
                        <img src={view.image} />
                      </span>;
                    })} */}
                  </div>
                </div>
                <img class="background-image" src={this.currentApp.background} />
              </div>
      </div>
    );
  }
}
