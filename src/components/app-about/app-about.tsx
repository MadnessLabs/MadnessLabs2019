import { Component, Listen, Prop, h } from "@stencil/core";

import { DatabaseService } from "../../services/database";

@Component({
  tag: "app-about",
  styleUrl: "app-about.css"
})
export class AppAbout {
  @Prop() db: DatabaseService;

  @Listen("mlSubmit")
  contactUs(event) {
    if (!event || !event.detail || !event.detail.data) {
      return false;
    }

    this.db.add("contact", event.detail.data);
  }

  render() {
    return (
      <div>
        <ml-what-we-do />
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
