import { Component, Listen, Prop, State, h } from "@stencil/core";

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

  @Prop({ connect: "ion-toast-controller" })
  toastCtrl: HTMLIonToastControllerElement;

  @State()
  defaultProps: {
    auth: AuthService;
    api: APIService;
    db: DatabaseService;
    config?: ConfigService;
  };

  @Listen("swUpdate", { target: "window" })
  async onSWUpdate() {
    console.log("Application update available...");
    try {
      if (localStorage.getItem("madnesslabs:lastVisit")) {
        const registration = await navigator.serviceWorker.getRegistration();

        if (!registration || !registration.waiting) {
          // If there is no registration, this is the first service
          // worker to be installed. registration.waiting is the one
          // waiting to be activiated.
          return;
        }

        const toast = await this.toastCtrl.create({
          message: "New version available",
          showCloseButton: true,
          closeButtonText: "Reload"
        });

        await toast.present();
        await toast.onWillDismiss();

        registration.waiting.postMessage("skipWaiting");
        window.location.reload(true);
      } else {
        localStorage.setItem("madnesslabs:lastVisit", new Date().toISOString());
      }
    } catch (error) {
      console.log(error);
    }
  }

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
            component="app-home"
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
        <ml-navigation />
        <ion-nav />
      </ion-app>
    );
  }
}
