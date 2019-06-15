import { Component, h, Prop, State } from "@stencil/core";
import { AuthService } from "../../services/auth";
import { DatabaseService } from "../../services/database";

import firebase from "firebase/app";
import "firebase/firestore";
//import { MlContact } from "../ml-contact/ml-contact";

@Component({
  tag: "ml-home",
  styleUrl: "ml-home.scss"
})
export class AppHome {
  firebase;

  @State() contact: any = ({
    id: "",
    name: "string",
    type: "string",
    label: "string",
    placeholder: "string"
  })

  @Prop() auth: AuthService;
  @Prop() db: DatabaseService;
  @Prop() session: any;

  //Github Login Button
  async loginWithGithub(_event) {
    console.log(firebase);
    try {
      const result = await this.auth.withSocial("github");

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
    //const provider = new firebase.auth.GithubAuthProvider();
    //const result = await firebase.auth().signInWithPopup(provider);
    //console.log(result);
  }

  //Google Login Button
  async loginWithGoogle(_event) {
    console.log(firebase);
    try {
      const result = await this.auth.withSocial("google");

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
    //const provider = new firebase.auth.GithubAuthProvider();
    //const result = await firebase.auth().signInWithPopup(provider);
    //console.log(result);
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
    //const provider = new firebase.auth.GithubAuthProvider();
    //const result = await firebase.auth().signInWithPopup(provider);
    //console.log(result);
  }

  //Login with Twitter
  async loginWithTwitter(_event) {
    console.log(firebase);
    try {
      const result = await this.auth.withSocial("twitter");

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
    //const provider = new firebase.auth.GithubAuthProvider();
    //const result = await firebase.auth().signInWithPopup(provider);
    //console.log(result);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        {/* <ion-button onClick={(event) => this.loginWithGithub(event)} expand="block">Login with Github</ion-button>

<ion-button onClick={(event) => this.loginWithGoogle(event)} expand="block">Login with Google</ion-button>

<ion-button onClick={(event) => this.loginWithFacebook(event)} expand="block">Login with Facebook</ion-button>

<ion-button onClick={(event) => this.loginWithTwitter(event)} expand="block">Login with Twitter</ion-button> */}
        <ion-list>
          <ion-item>
            <ion-icon
              onClick={event => this.loginWithGithub(event)}
              name="logo-github"
            />
          </ion-item>
          <ion-item>
            <ion-icon
              onClick={event => this.loginWithTwitter(event)}
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
