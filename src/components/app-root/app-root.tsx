import { Component, h, State } from '@stencil/core';
import { ConfigService } from "../../services/config";
import { APIService } from "../../services/api";
import { AuthService } from "../../services/auth";
import { DatabaseService } from '../../services/database';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  api: APIService;
  auth: AuthService;
  db: DatabaseService;
  router: HTMLIonRouterElement;
  config: ConfigService;
  @State()
  defaultProps: {
    auth: AuthService;
    api: APIService;
    db: DatabaseService;
    config?: ConfigService;
  };

  async componentWillLoad() {
    this.config = new ConfigService();
    // const app = this.config.get("app");
    this.auth = new AuthService({
      ...this.config.get(),
      // tokenLocalStorageKey: "tmg:token",
      // authLocalStorageKey: "tmg:session"
    });
    this.db = new DatabaseService();

    this.defaultProps = {
      config: this.config,
      auth: this.auth,
      // session: this.auth.isLoggedIn(),
      api: this.api,
      db: this.db,
    };
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" componentProps={this.defaultProps}component="ml-home" />
          <ion-route url="/profile/:name" component="app-profile" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
