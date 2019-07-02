import { Component, Prop, State, h } from "@stencil/core";

import { AuthService } from "../../services/auth";
import { DatabaseService } from "../../services/database";

@Component({
  tag: "ml-navigation",
  styleUrl: "ml-navigation.css"
})
export class MlNavigation {
  @Prop() auth: AuthService;
  @Prop() db: DatabaseService;

  @State()
  buttonList: any[] = [
    {
      title: "Git Hub",
      icon: "logo-github",
      color: "",
      onClick: event => {
        this.login(event, "github");
      }
    },
    {
      title: "Twitter",
      icon: "logo-twitter",
      color: "",
      onClick: event => {
        this.login(event, "twitter");
      }
    },
    {
      title: "Google",
      icon: "logo-google",
      color: "",
      onClick: event => {
        this.login(event, "google");
      }
    },
    {
      title: "Google",
      icon: "logo-facebook",
      color: "",
      onClick: event => {
        this.login(event, "facebook");
      }
    }
  ];

  isLoggedOut() {
    if (this.auth.isLoggedIn()) {
      console.log("is logged in");
    } else {
      console.log("is not logged in");
    }
  }

  logOut() {
    this.auth.logout();
  }

  async login(event, type) {
    console.log(event, "event here");
    console.log(type, "type here");
    try {
      const result = await this.auth.withSocial(type);
      console.log(result);
      await this.db.add(
        "users",
        { name: result.user.displayName },
        result.user.uid
      );
    } catch (error) {
      alert("There was an error logging in...");
      console.log(error);
    }
  }

  render() {
    return (
      <div class="bottom-nav">
        <ion-list>
          <ion-item href="/">
            <ion-icon name="home" />
            <h3>Home</h3>
          </ion-item>
          <ion-item href="/about">
            <ion-icon name="information-circle" />
            <h3>About</h3>
          </ion-item>
          <ion-item href="/community">
            <ion-icon name="share" />
            <h3>Community</h3>
          </ion-item>
          <ion-item href="/apps">
            <ion-icon name="phone-portrait" />
            <h3>Apps</h3>
          </ion-item>
          <ion-item href="/media">
            <ion-icon name="headset" />
            <h3>Media</h3>
          </ion-item>
        </ion-list>
        <ml-floating-button buttonList={this.buttonList} />
      </div>
    );
  }
}
