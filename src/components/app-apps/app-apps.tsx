import { Component, Element, h } from "@stencil/core";

@Component({
  tag: "app-apps",
  styleUrl: "app-apps.css"
})
export class MlApps {

  @Element()
  homeEl: any;

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
    return (
      <ion-content class="ion-padding">
        <div class="apps-wrapper">
        <div class="col col1">
        <h2>Refer a flood</h2>
        <p>Mandness legabs is a software company that kicks butt from St. Louis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta diam vel felis pharetra gravida. Vestibulum interdum sapien id enim tincidunt auctor. Ut nec mi posuere, laoreet ligula non, dictum nisl. Suspendisse mattis varius sagittis.</p>
        <p>
        In hac habitasse platea dictumst. Ut vitae turpis semper, lacinia tortor quis, efficitur lorem. Praesent porta vehicula metus quis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque molestie orci id justo ornare suscipit vitae eget leo. Nulla facilisi. Integer sollicitudin gravida suscipit. In tincidunt cursus tortor, a imperdiet metus vestibulum hendrerit. Cras vehicula eleifend quam, sit amet dictum nisi sagittis non. Curabitur eget tortor at nisl vestibulum mattis.
        </p>
        <p>Hello MlApps!</p>
        </div>
        <div class="col col2">
          <img src="/assets/images/ios-phone-portrait.svg" />
          </div>
        </div>


      </ion-content>
    );
  }
}
