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

         
            <ion-item href="/">
              <ion-icon
              name="home"
              />  
              <h3>Home</h3>   
            </ion-item>
            <ion-item href="/contact">
              <ion-icon
                name="alert"
              />
                <h3>About</h3>
            </ion-item>
            <ion-item href="/community">
                <ion-icon name="share" />
                <h3>Community</h3>
            </ion-item>
            <ion-item href="/apps">
              <ion-icon name="phone-portrait"></ion-icon>
              <h3>Apps</h3>
            </ion-item>
            <ion-item href="/media">
              <ion-icon name="headset"></ion-icon>
              <h3>Media</h3>
            </ion-item>
          </ion-list>
          <ml-floating-button buttonList={this.buttonList} />
        </div>
      </ion-content>
    ];
  }
}
