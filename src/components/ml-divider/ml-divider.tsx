import { Component, h } from "@stencil/core";

@Component({
  tag: "ml-divider",
  styleUrl: "ml-divider.css"
})
export class MlDivider {
  render() {
    return (
      <div class="wrapper">
        <img src="/assets/images/ml-logo.png" />
        <div class="line" />
        <div class="line2" />
      </div>
    );
  }
}
