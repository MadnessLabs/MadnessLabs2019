import { Component, h, Prop } from '@stencil/core';
import { AuthService } from "../../services/auth";
import { DatabaseService} from '../../services/database';
// import firebase from 'firebase/app';
import 'firebase/firestore';
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  auth: AuthService;
  @Prop() auth: AuthService;
  @Prop() db: DatabaseService;
  @Prop() session: any;

  async loginWithGithub(_event) {
    try {
      const result = await this.auth.withSocial('github');
    
      await this.db.add("users", { name: result.user.displayName }, result.user.uid);
      // const docRef = this.user.update(result.user.uid, {
      //  email: result.user.email,
      //  oldUser: true
      // });
      // console.log(docRef);
      console.log(result);
    } catch (error) {
      alert('There was an error logging in...');
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
        {/* <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p> */}

        

<ion-button onClick={(event) => this.loginWithGithub(event)} expand="block">Login with Github</ion-button>
      </ion-content>
    ];
  }
}
