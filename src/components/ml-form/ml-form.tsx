import { Component, Event, EventEmitter, Listen, Prop, h } from '@stencil/core';


@Component({
    tag: 'ml-form',
    styleUrl: 'ml-form.scss'
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

    render() {
        return (
            <div>
                <p>Hello MlForm!</p>
            </div>
        );
    }
}
