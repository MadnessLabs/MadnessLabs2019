import { APIService } from "./api";
import { AuthService } from "./auth";
import { ConfigService } from "./config";
import { DatabaseService } from "./database";
import Service from "./service";

export class UserService extends Service {
  endpoint = "user";
  collectionName = "users";
	// profile: ML.user.IDocumentWithId;
	// what's up with the typing
  permissions: any = {};
  protected api: APIService;
  protected auth: AuthService;
  protected config: ConfigService;
  protected db: DatabaseService;
}