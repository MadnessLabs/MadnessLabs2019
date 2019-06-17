import { Component, h, Listen, Prop } from "@stencil/core";
import { DatabaseService } from "../../services/database";

@Component({
  tag: "ml-contact",
  styleUrl: "ml-contact.scss"
})
export class MlContact {
  
  @Prop() db: DatabaseService;

  @Listen("mlSubmit")
  contactUs(event) {
    if (!event || !event.detail || !event.detail.data) {
      return false;
    }

    this.db.add('contact', event.detail.data);
  }

  render() {
    return (
      <div>
        <p>Hello MlContact!</p>
        <ml-form>
          <ml-input
            id="email-field"
            name="email"
            type="email"
            label="Email Address"
            placeholder="Where can we get back to you?"
            required
          />
        </ml-form>
      </div>
    );
  }
}
