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
        asdf
      </ion-content>
    ];
  }
}
