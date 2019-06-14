import { Component, h } from "@stencil/core";
declare var Cleave;
import { UserService } from "../../services/user";

@Component({
  tag: "ml-input",
  styleUrl: "ml-input.scss"
})
export class MlInput {
  render() {
    return (
      <div>
        <p>Hello MlInput!</p>
      </div>
    );
  }
}
