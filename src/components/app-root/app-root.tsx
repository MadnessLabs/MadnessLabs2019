import { Component, State, h } from "@stencil/core";

import { APIService } from "../../services/api";
import { AuthService } from "../../services/auth";
import { ConfigService } from "../../services/config";
import { DatabaseService } from "../../services/database";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  api: APIService;
  auth: AuthService;
  config: ConfigService;
  db: DatabaseService;
  router: HTMLIonRouterElement;

  @State()
  defaultProps: {
    auth: AuthService;
    api: APIService;
    db: DatabaseService;
    config?: ConfigService;
  };

  async componentWillLoad() {
    this.config = new ConfigService();
    // pass in the config options in order to initialize a new app
    this.auth = new AuthService({
      ...this.config.get()
    });

    this.db = new DatabaseService();

    this.defaultProps = {
      auth: this.auth,
      api: this.api,
      db: this.db
    };
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route
            url="/"
            componentProps={this.defaultProps}
            component="app-home"
          />
          <ion-route
            url="/about"
            componentProps={this.defaultProps}
            component="app-about"
          />
          <ion-route
            url="/community"
            componentProps={this.defaultProps}
            component="app-community"
          />
          <ion-route
            url="/apps"
            componentProps={this.defaultProps}
            component="app-apps"
          />
          <ion-route
            url="/media"
            componentProps={this.defaultProps}
            component="app-media"
          />
        </ion-router>
        <ion-nav />
        <ml-navigation />
      </ion-app>
    );
  }
}
