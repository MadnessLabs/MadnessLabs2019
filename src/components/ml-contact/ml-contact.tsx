import { Component, h } from "@stencil/core";

@Component({
  tag: "ml-contact",
  styleUrl: "ml-contact.scss"
})
export class MlContact {
  render() {
    return (
      <div>
        <p>Hello MlContact!</p>
        <ml-form>
          <ml-inputml
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
