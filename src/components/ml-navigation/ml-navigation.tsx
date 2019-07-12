import { Component, Listen, Prop, State, h } from "@stencil/core";

@Component({
  tag: "ml-navigation",
  styleUrl: "ml-navigation.css"
})
export class MlNavigation {
  /**
   * Is the navigation expanded?
   */
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
  @Listen("body:ionRouteDidChange")
  onRouteChange() {
    this.currentUrl = window.location.pathname;
  }

  componentWillLoad() {
    this.currentUrl = window.location.pathname;
  }

  render() {
    return (
      <div class="nav-wrapper">
        <video autoplay loop width="960" height="540">
          <source src="/assets/videos/starry-ocean.mov" />
          <source src="/assets/videos/starry-ocean.mp4" />
        </video>
        <ml-latest-post />
        <h1>Madness Labs</h1>
        <h2>Creativity with</h2>
        <img src="/assets/icon/ml-logo-bold-1.png" />
        <ion-grid>
          <ion-row>
            {this.links.map(link => (
              <ion-col
                class={{
                  active: this.currentUrl === link.url
                }}
              >
                <ion-item href={link.url}>
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
