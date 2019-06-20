import { Component, h, Prop, State } from "@stencil/core";
import { AuthService } from "../../services/auth";
import { DatabaseService } from "../../services/database";

// import firebase from "firebase/app";
// import "firebase/firestore";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss"
})
export class AppHome {
  firebase;

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

  isLoggedOut(){
    if (this.auth.isLoggedIn()) {
      console.log('is logged in');
    } else {
      console.log('is not logged in');
    }
  }

  logOut() {
    this.auth.logout();
  }

  componentDidLoad(){
    console.log(location.href, 'is this the current location?');
  }

  render() {
    return [
      // <div>
      //   <ion-button
      //     onClick={() =>
      //       this.logOut()
      //     }        
      //   >
      //     log out
      //   </ion-button>
      //   <ion-button onClick={() =>
      //     this.isLoggedOut()
      //   }>
      //     is Logged out?
      //   </ion-button>
      // </div>,
      <ion-content class="ion-padding">
        <div class="hp-main-content">
          <aside>
            <ml-latest-post />
          </aside>
          <main>
            <div class="hp-row1">
              <h1>Madness Labs</h1>
            </div>
            <div class="hp-row2">
              <h2>
                Creativity with <span>love</span>
              </h2>
              <img src="" alt="" />
            </div>
          </main>
        </div>

        <div class="video-container">
          <video autoplay loop width="960" height="540">
            <source src="/assets/videos/starry-ocean.mov" />
            <source src="/assets/videos/starry-ocean.mp4" />
          </video>
        </div>
        <div class="bottom-nav">
          <ion-list>
            <ion-item href="/">
              <ion-icon name="home" />
              <h3>Home</h3>
            </ion-item>
            <ion-item href="/contact">
              <ion-icon name="alert" />
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
      </ion-content>
    ];
  }
}
