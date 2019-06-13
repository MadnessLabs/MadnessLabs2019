import { Component, h, State } from '@stencil/core';
import { ConfigService } from "../../services/config";
import { APIService } from "../../services/api";
import { AuthService } from "../../services/auth";

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  api: APIService;
  config: ConfigService;

  @State()
  defaultProps: {
    auth: AuthService;
    api: APIService;
  };

  async componentWillLoad() {
    const app = this.config.get("app");
    this.api = new APIService({
      // host: app.apiUrl,
      // token: await this.auth.getToken()
    });

    // this.defaulProps = {
    //   auth: this.auth,
    //   api: this.api
    // }

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
