import { Component, h, State } from '@stencil/core';
import { ConfigService } from "../../services/Config";
import { APIService } from "../../services/api";
import { AuthService } from "../../services/auth";
import { DatabaseService} from '../../services/database';

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
    db?: any;
    session?: any;
    api: APIService;
    config?: ConfigService;
  };

  async componentWillLoad() {
    this.config = new ConfigService();
    const app = this.config.get("app");
    this.auth = new AuthService({
      ...this.config.get(),
      tokenLocalStorageKey: "tmg:token",
      authLocalStorageKey: "tmg:session"
    });    
    this.api = new APIService({
      host: app.apiUrl,
      token: await this.auth.getToken()
    });
  }
  
    componentDidLoad() {

      this.defaultProps.db = new DatabaseService();
      this.defaultProps.auth.onAuthChanged(session => {
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
