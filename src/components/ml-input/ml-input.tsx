import { Component, Prop, Element, h } from "@stencil/core";
declare var Cleave;
import { UserService } from "../../services/user";

@Component({
  tag: "ml-input",
  styleUrl: "ml-input.scss"
})
export class MlInput {

  @Prop()
  type: any;
  @Prop()
  placeholder: any;
  @Prop()
  label: string;
  @Prop({ mutable: true })
  value: any;
  @Prop()
  required: any;
  @Prop()
  name: string;
  @Prop()
  autocomplete: "on" | "off";
  @Prop()
  autocapitalize: string;
  @Prop()
  autocorrect: "on" | "off";
  @Prop()
  autofocus: boolean;
  @Prop()
  minlength: number;
  @Prop()
  maxlength: number;
  @Prop()
  disabled: boolean;
  @Prop()
  info: string;
  @Prop()
  edit: boolean;
  @Prop()
  infoShow: boolean;
  @Prop()
  min: string;
  @Prop()
  max: string;
  @Prop()
  iconLeft: string;
  @Prop()
  iconRight: string;
  @Prop()
  silence: boolean;
  @Prop()
  step: string;
  @Prop()
  actionOptions: any;
  @Prop()
  user: UserService;
  @Prop({ connect: "ion-modal-controller" })
  modalCtrl: HTMLIonModalControllerElement;	

  modal: HTMLIonModalElement;
  @Element()
  inputEl: HTMLMlInputElement;

  render() {
    return (
      <div>
        <p>Hello MlInput!</p>
      </div>
    );
  }
}
