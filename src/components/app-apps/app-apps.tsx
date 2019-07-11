import { Component, Element, h } from "@stencil/core";

@Component({
  tag: "app-apps",
  styleUrl: "app-apps.css",
  scoped: true
})
export class MlApps {

  @Element()
  homeEl: any;

  apps = [
    {
      name: 'Refer a Flood',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat semper dolor, non porta justo sollicitudin nec. Sed sodales nec lectus quis vestibulum. Nullam malesuada nibh erat, quis laoreet magna gravida vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum mollis lorem et nulla tristique fringilla. Nulla rutrum sapien eu lorem viverra tincidunt',
      background: '/assets/images/raf2/1E5B1781@2x.png',
      imageThumb: '/assets/images/raf.jpg',
      views: [
        {
          name: 'view1',
          imageMain: '/assets/images/raf2/views/1a.jpg',
          imageThumb: '/assets/images/raf2/views/1.jpg'
        },
        {
          name: 'view2',
          imageMain: '/assets/images/raf2/views/2a.jpg',
          imageThumb: '/assets/images/raf2/views/2.jpg'
        },        
        {
          name: 'view3',
          imageMain: '/assets/images/raf2/views/3a.jpg',
          imageThumb: '/assets/images/raf2/views/3.jpg'
        },    
        {
          name: 'view4',
          imageMain: '/assets/images/raf2/views/4a.jpg',
          imageThumb: '/assets/images/raf2/views/4.jpg'
        },    
        {
          name: 'view5',
          imageMain: '/assets/images/raf2/views/5a.jpg',
          imageThumb: '/assets/images/raf2/views/5.jpg'
        },                       
      ]
    },
    {
      name: 'Track My Giving',
      text: 'a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. Its also called placeholdertext. a convenient tool for mock-ups. It helps to outline the visual elements',
      background: '/assets/images/raf2/1E5B1781@2x.png',
      imageThumb: '/assets/images/tmg.jpg',
      views: [
        {
          name: 'view1',
          imageMain: '/assets/images/raf2/views/1a.jpg',
          imageThumb: '/assets/images/raf2/views/1.jpg'
        },
        {
          name: 'view2',
          imageMain: '/assets/images/raf2/views/2a.jpg',
          imageThumb: '/assets/images/raf2/views/2.jpg'
        },        
        {
          name: 'view3',
          imageMain: '/assets/images/raf2/views/3a.jpg',
          imageThumb: '/assets/images/raf2/views/3.jpg'
        }               
      ]
    },
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

        <ml-apps apps={this.apps}></ml-apps>

      </ion-content>
    );
  }
}
