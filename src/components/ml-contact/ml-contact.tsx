import { Component, h, Listen, Prop } from "@stencil/core";
import { APIService } from "../../services/api";

@Component({
  tag: "ml-contact",
  styleUrl: "ml-contact.scss"
})
export class MlContact {
  
  @Prop()
  api: APIService;

  @Listen("mlSubmit")
  contactUs(event) {
    if (!event || !event.detail || !event.detail.data) {
      return false;
    }
    // this.isLoading = true;
    this.api
      .post("contact", event.detail.data)
      .then(() => {
        // this.isLoading = false;
        // this.contactedUs = true;
        console.log('this posted');
        
      })
      .catch(error => {
        // this.isLoading = false;
        alert(error.message);
      });
  }

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
