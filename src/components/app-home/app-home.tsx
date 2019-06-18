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
    }
  ];

  // const docRef = this.user.update(result.user.uid, {
  //  email: result.user.email,
  //  oldUser: true
  // });
  // console.log(docRef);

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
    return [
      <ion-content class="ion-padding">
<aside>
  
</aside>
        <div class="hp-main-content">
          <div class="hp-row1">
            <h1>Madness Labs</h1>
          </div>
          <div class="hp-row2">
            <h2>
              Creativity with <span>love</span>
            </h2>
            <img src="" alt="" />
          </div>
        </div>

        <div class="video-container">
          <video autoplay loop width="960" height="540">
            <source src="/assets/videos/starry-ocean.mov" />
            <source src="/assets/videos/starry-ocean.mp4" />
          </video>
        </div>
        <div class="bottom-nav">
          <ion-list>
            <ion-item>
              Home
              <ion-icon
                onClick={event => this.login(event, "github")}
                name="logo-github"
                class="login-logo"
              />              

 
            </ion-item>
            <ion-item>
              About
              <ion-icon
                onClick={event => this.login(event, "twitter")}
                name="logo-twitter"
                class="login-logo"
              />
            </ion-item>
            <ion-item>
              Community
              <ion-icon
                onClick={event => this.login(event, "google")}
                name="logo-google"
              />
            </ion-item>
            <ion-item />
          </ion-list>
          <ml-floating-button buttonList={this.buttonList} />
        </div>
      </ion-content>
    ];
  }
}
