import { Component, h, State } from '@stencil/core';
import { ConfigService } from "../../services/config";
import { APIService } from "../../services/api";
import { AuthService } from "../../services/auth";
import { DatabaseService} from '../../services/database';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  @State()
    defaultProps:{
      auth: AuthService;
      db?: any;
      session?: any;
    } = {
      auth: new AuthService({
        firebase: {
          apiKey: "AIzaSyC96LTwG8KVKETQIebGN_eMjNcdY2x0Y3Q",
    authDomain: "madness-labs.firebaseapp.com",
    databaseURL: "https://madness-labs.firebaseio.com",
    projectId: "madness-labs",
    storageBucket: "madness-labs.appspot.com",
    messagingSenderId: "406636537314",
    //appId: "1:406636537314:web:d9e14b91316ec220"
        }
      })
    };
  
    componentDidLoad() {
      console.log(this.defaultProps);
      this.defaultProps.db = new DatabaseService();
      this.defaultProps.auth.onAuthChanged(session => {
        console.log(session);
        this.defaultProps.session = session;
        this.defaultProps = {...this.defaultProps};
      });
      this.defaultProps = {...this.defaultProps};
    }


  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" componentProps={this.defaultProps}component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
