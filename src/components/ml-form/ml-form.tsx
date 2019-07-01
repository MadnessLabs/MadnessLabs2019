import { Component, Event, EventEmitter, Listen, Prop, h } from "@stencil/core";

@Component({
  tag: "ml-form",
  styleUrl: "ml-form.css",
  scoped: true
})
export class MlForm {
  formEl: HTMLFormElement;

  /**
   * The name of the form used for ID and name
   */
  @Prop() name: string;
  /**
   * The data from the form being filled out
   */
  @Prop() formData: any = {};
  /**
   * Adds a padding around the inside of the form
   */
  @Prop() padding = false;
  /**
   * Emitted when the user submits the form
   */
  @Event() mlSubmit: EventEmitter<{ event; data: any; name: string }>;

  @Listen("mlChange")
  onInput(event) {
    if (event && event.detail && event.detail.name) {
      this.formData[event.detail.name] = event.detail.value;
    }
  }
  @Listen("keydown")
  onKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      const submitButtonEl: HTMLButtonElement = this.formEl.querySelector(
        '[type="submit"]'
      );
      if (submitButtonEl) {
        submitButtonEl.click();
      }
    }
  }

  /**
   * Emit mlSubmit event with form data
   * @param event The form submit event
   */
  save(event?) {
    event.preventDefault();
    this.mlSubmit.emit({ event, data: this.formData, name: this.name });
  }

  render() {
    return (
      <form
        ref={el => (this.formEl = el as HTMLFormElement)}
        name={this.name}
        id={this.name}
        onSubmit={event => this.save(event)}
        class={{
          "has-padding": this.padding
        }}
      >
        <slot />
      </form>
    );
  }
}
