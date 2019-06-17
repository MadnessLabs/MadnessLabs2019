import { Component, h, Prop, State } from "@stencil/core";
import { AuthService } from "../../services/auth";
import { DatabaseService } from "../../services/database";

import firebase from "firebase/app";
import "firebase/firestore";

@Component({
  tag: "ml-home",
  styleUrl: "ml-home.scss"
})
export class AppHome {
  firebase;

  @Prop() auth: AuthService;
  @Prop() db: DatabaseService;

  //Github Login Button
  async loginWithGithub(_event) {
    console.log(firebase);

      // const docRef = this.user.update(result.user.uid, {
      //  email: result.user.email,
      //  oldUser: true
      // });
      // console.log(docRef);

    try {
      const result = await this.auth.withSocial("github");

      await this.db.add(
        "users",
        { name: result.user.displayName },
        result.user.uid
      );

      console.log(result);
    } catch (error) {
      alert("There was an error logging in...");
      console.log(error);
    }
  }

  async loginWithGoogle(_event) {

    try {
      const result = await this.auth.withSocial("google");
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

  //Login with Facebook
  async loginWithFacebook(_event) {
    console.log(firebase);
    try {
      const result = await this.auth.withSocial("facebook");

      await this.db.add(
        "users",
        { name: result.user.displayName },
        result.user.uid
      );
      // const docRef = this.user.update(result.user.uid, {
      //  email: result.user.email,
      //  oldUser: true
      // });
      // console.log(docRef);
      console.log(result);
    } catch (error) {
      alert("There was an error logging in...");
      console.log(error);
    }
  }

  //Login with Twitter
  // async loginWithTwitter(_event) {
  //   console.log(firebase);
  //   try {
  //     const result = await this.auth.withSocial("twitter");

  //     await this.db.add(
  //       "users",
  //       { name: result.user.displayName },
  //       result.user.uid
  //     );
  //     // const docRef = this.user.update(result.user.uid, {
  //     //  email: result.user.email,
  //     //  oldUser: true
  //     // });
  //     // console.log(docRef);
  //     console.log(result);
  //   } catch (error) {
  //     alert("There was an error logging in...");
  //     console.log(error);
  //   }
  // }

  async login(event, type){
    console.log(event);
    console.log(type);
    
    
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-list>
          <ion-item>
            <ion-icon
              onClick={event => this.loginWithGithub(event)}
              name="logo-github"
            />
          </ion-item>
          <ion-item>
            <ion-icon
              onClick={event => this.login(event, 'twitter')}
              name="logo-twitter"
            />
          </ion-item>
          <ion-item>
            <ion-icon
              onClick={event => this.loginWithGoogle(event)}
              name="logo-google"
            />
          </ion-item>
          <ion-item>
            <ion-icon
              onClick={event => this.loginWithFacebook(event)}
              name="logo-facebook"
            />
          </ion-item>
        </ion-list>

        <ml-contact/>
      </ion-content>

      //Form Componenet
      
    ];
  }
}
