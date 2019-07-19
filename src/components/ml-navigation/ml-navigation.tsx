import { Component, Element, Listen, Prop, State, h } from "@stencil/core";
import ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TimelineMax, Linear } from "gsap/all";
// import { TweenLite, TimelineMax, Linear, Back, Sine } from 'gsap/all';
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

@Component({
  tag: "ml-navigation",
  styleUrl: "ml-navigation.css",
  scoped: true
})
export class MlNavigation {
  // tweenMax = new TweenMax;
  timelineMax = new TimelineMax();
  // tweenMax = TweenMax();

  controller = new ScrollMagic.Controller();

  @Element()
  MlNavigationElement: HTMLMlNavigationElement;

  @State()
  parallaxEl: any;

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
    const navWrapper = this.MlNavigationElement.querySelector(".nav-wrapper");

    const scene = new ScrollMagic.Scene({
      triggerElement: navWrapper,
      triggerHook: "onEnter"
    })
      .duration("100%")
      .setTween(navWrapper, {
        height: "200px",
        ease: Linear.easeNone
      })
      .addIndicators();

    const scene2 = new ScrollMagic.Scene({
      triggerElement: navWrapper,
      triggerHook: "onEnter"
    })
      .duration("100%")
      .setTween(navWrapper, {
        width: "400px",
        ease: Linear.easeNone
      })
      .addIndicators();

    scene.addTo(this.controller);
    scene2.addTo(this.controller);

    this.controller = new ScrollMagic.Controller();
  }

  render() {
    return (
      <div
        ref={el => (this.parallaxEl = el as any)}
        class={{
          "nav-wrapper": true
        }}
      >
        <video autoplay muted loop width="960" height="540">
          <source src="/assets/videos/starry-ocean.mov" />
          <source src="/assets/videos/starry-ocean.mp4" />
        </video>
        <ml-latest-post />
        <h1 class="name">Madness Labs</h1>
        <h2 class="tagline">
          Creativity with
          <img class="logo" src="/assets/images/ml-logo.png" />
        </h2>

        <ion-grid>
          <ion-row>
            {this.links.map(link => (
              <ion-col
                class={{
                  active: this.currentUrl === link.url
                }}
              >
                <ion-item href={link.url} class="nav-link">
                  <ion-icon name={link.icon} />
                  <ion-label>{link.label}</ion-label>
                </ion-item>
              </ion-col>
            ))}
          </ion-row>
        </ion-grid>
      </div>
    );
  }
}
