// import { ConfigService } from "./config";
// import { DatabaseService } from "./database";

export default class {
  protected className = this.constructor.name
    .toLowerCase()
    .replace("service", "");
}