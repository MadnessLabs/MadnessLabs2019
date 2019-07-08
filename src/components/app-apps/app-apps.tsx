import { Component, Element, h } from "@stencil/core";

@Component({
  tag: "app-apps",
  styleUrl: "app-apps.css"
})
export class MlApps {

  @Element()
  homeEl: any;

  apps = [
    {
      name: 'asdf',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat semper dolor, non porta justo sollicitudin nec. Sed sodales nec lectus quis vestibulum. Nullam malesuada nibh erat, quis laoreet magna gravida vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum mollis lorem et nulla tristique fringilla. Nulla rutrum sapien eu lorem viverra tincidunt',
      background: '/assets/images/raf/1E5B1781@2x.png',
      views: [
        {
          name: 'view1',
          image: '/assets/images/raf/views/referAFloodIcon@2x.png'
        }
      ]
    }
  ]

  componentDidLoad(){
    // // const waypoint = new Waypoints
    // const ionContent = this.homeEl.querySelector('ion-content');

    // // ionContent.addEventListener('ionScrollStart', () => console.log('scroll start'));

    // ionContent.addEventListener('ionScroll', () => console.log('scroll start'));

    // console.log('wow this is scrolling!');
    

    // window.onscroll = () => {
    //   console.log('this is detecting a scroll');
      
    // }

  }

  render() {

    console.log(this.apps, 'thisDotApps in app.apps.tsx');
    
    return (
      <ion-content class="ion-padding">

        <raf-apps apps={this.apps}></raf-apps>

      </ion-content>
    );
  }
}
