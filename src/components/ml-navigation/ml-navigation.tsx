import { Component, Element, Listen, Prop, State, h } from "@stencil/core";
import ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
// import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';


@Component({
  tag: "ml-navigation",
  styleUrl: "ml-navigation.css"
})
export class MlNavigation {
  /**
   * Is the navigation expanded?
   */

  // Parallax background

  controller = new ScrollMagic.Controller();

  @Element()
  MlNavigationElement: HTMLMlNavigationElement;

  @Prop() expanded = false;
  /**
   * A list of links to put in the navigation
   */
  @Prop() links = [
    {
      label: "Home",
      url: "/",
      icon: "home"
    },
    {
      label: "About",
      url: "/about",
      icon: "information-circle"
    },
    {
      label: "Blog",
      url: "https://blog.madnesslabs.net",
      icon: "share"
    },
    {
      label: "Apps",
      url: "/apps",
      icon: "phone-portrait"
    },
    {
      label: "Media",
      url: "/media",
      icon: "headset"
    }
  ];

  /**
   * The url of the current page
   */
  @State() currentUrl: string;

  /**
   * Update the current url when location changes
   */
  @Listen("ionRouteDidChange", { target: "body" })
  onRouteChange() {
    this.currentUrl = window.location.pathname;
  }

  componentWillLoad() {
    this.currentUrl = window.location.pathname;
  }
  componentDidLoad() {
    // Parallax background
    new ScrollMagic.Scene({
      triggerElement: "#parallax",
      triggerHook: "onEnter"
    })
      .duration("200%")
      .setTween("#parallax", {
        backgroundPosition: "50% 100%",
        // ease: Linear.easeNone
      })
      .addIndicators()
      .addTo(this.controller);
  }

  render() {
    return (
      <div>
        <div class="parallax slide" id="parallax">
          <div class="row">
            <h1>Parallax background</h1>
          </div>
        </div>

        <div class="slidein slide" id="slidein">
          <div class="row">
            <h1>Slide and pin</h1>
          </div>
        </div>

        <div class="slidein2 slide" id="slidein2">
          <div class="row">
            <div id="left">
              <h1>From left</h1>
            </div>
            <div id="opacity">
              <h1>Fade in</h1>
            </div>
            <div id="bottom">
              <h1>From bottom</h1>
            </div>
          </div>
        </div>

        <div class="parallax slide" id="parallax">
          <div class="row">
            <h1>Parallax background</h1>
          </div>
        </div>

        <div class="slidein slide" id="slidein">
          <div class="row">
            <h1>Slide and pin</h1>
          </div>
        </div>

        <div class="slidein2 slide" id="slidein2">
          <div class="row">
            <div id="left">
              <h1>From left</h1>
            </div>
            <div id="opacity">
              <h1>Fade in</h1>
            </div>
            <div id="bottom">
              <h1>From bottom</h1>
            </div>
          </div>
        </div>
      </div>

      // <div
      //   class={{
      //     "nav-wrapper": true
      //   }}
      // >
      //   <video autoplay muted loop width="960" height="540">
      //     <source src="/assets/videos/starry-ocean.mov" />
      //     <source src="/assets/videos/starry-ocean.mp4" />
      //   </video>
      //   <ml-latest-post />
      //   <h1 class="name">Madness Labs</h1>
      //   <h2 class="tagline">
      //     Creativity with
      //     <img class="logo" src="/assets/images/ml-logo.png" />
      //   </h2>

      //   <ion-grid>
      //     <ion-row>
      //       {this.links.map(link => (
      //         <ion-col
      //           class={{
      //             active: this.currentUrl === link.url
      //           }}
      //         >
      //           <ion-item href={link.url} class="nav-link">
      //             <ion-icon name={link.icon} />
      //             <ion-label>{link.label}</ion-label>
      //           </ion-item>
      //         </ion-col>
      //       ))}
      //     </ion-row>
      //   </ion-grid>
      // </div>
    );
  }
}
