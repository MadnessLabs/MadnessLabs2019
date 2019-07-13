import { Component, Listen, Prop, State, h } from "@stencil/core";

@Component({
  tag: "ml-navigation",
  styleUrl: "ml-navigation.css",
  shadow: true
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
  @Listen("ionRouteDidChange", { target: "body" })
  onRouteChange() {
    this.currentUrl = window.location.pathname;
  }

  componentWillLoad() {
    this.currentUrl = window.location.pathname;
  }

  render() {
    return (
      <div
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
