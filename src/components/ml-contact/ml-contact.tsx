import { Component, h, Listen, Prop } from "@stencil/core";
//import { type } from "os";

@Component({
  tag: "ml-contact",
  styleUrl: "ml-contact.scss"
})
export class MlContact {
  
  @Prop() contact: ({
      id: string,
      name: string,
      type: string,
      label: string,
      placeholder: string
  })

  // api: APIService;

  @Listen("mlSubmit")
  contactUs(event) {
    if (!event || !event.detail || !event.detail.data) {
      return false;
    }
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
