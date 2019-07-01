import {
  Component,
  Prop,
  Element,
  Event,
  EventEmitter,
  Listen,
  Method,
  State,
  Watch,
  h
} from "@stencil/core";
declare var Cleave;
import { UserService } from "../../services/user";

@Component({
  tag: "ml-input",
  styleUrl: "ml-input.css",
  scoped: true
})
export class MlInput {
  modal: HTMLIonModalElement;

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

  @State()
  showInfo: boolean;
  @State()
  passwordVisible = false;
  @State()
  cleave: any;
  @State()
  input: HTMLInputElement;
  @State()
  inputType: string;

  @Event()
  mlChange: EventEmitter;
  @Event()
  mlInput: EventEmitter;
  @Event()
  mlFocus: EventEmitter;
  @Event()
  mlBlur: EventEmitter;

  @Element()
  inputEl: HTMLMlInputElement;

  @Listen("ionInput")
  onInput(event) {
    setTimeout(() => {
      this.mlInput.emit({
        event,
        name: this.name,
        value: this.input ? this.input.value : event.detail.value
      });
    }, 100);
  }

  @Listen("ionFocus")
  onFocus(event) {
    this.mlFocus.emit({
      event,
      name: this.name,
      value: this.input ? this.input.value : event.detail.value
    });
  }

  @Listen("ionBlur")
  onBlur(event) {
    this.mlBlur.emit({
      event,
      name: this.name,
      value: this.input ? this.input.value : event.detail.value
    });
  }

  @Listen("ionChange")
  onChange(event: UIEvent) {
    if (
      this.silence ||
      !this.input ||
      !this.input.value ||
      this.input.value === "undefined"
    ) {
      return false;
    }

    this.mlChange.emit({
      event,
      name: this.name,
      value: this.input.value
    });
  }

  @Method()
  async setFocus() {
    this.input.focus();
  }

  @Watch("value")
  onValueChange() {
    if (!this.cleave) {
      return false;
    }
    this.cleave.setRawValue(this.value ? this.value : null);
  }

  dateToYearMonthDay(date: any): string {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  togglePassword(event: UIEvent) {
    event.stopPropagation();
    const value = this.input.value;
    this.passwordVisible = !this.passwordVisible;
    setTimeout(() => {
      this.value = value;
    }, 50);
  }

  onEditClick(event) {
    event.preventDefault();
    const emailInputEl: HTMLInputElement = this.inputEl.querySelector(
      "#email-input input"
    );
    this.modalCtrl
      .create({
        component: "tmg-edit-email-modal",
        componentProps: {
          email: emailInputEl.value,
          actionOptions: this.actionOptions,
          user: this.user,
          modal: this.modal
        },
        backdropDismiss: false
      })
      .then(modal => {
        this.modal = modal;
        this.modal.present();
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  componentDidLoad() {
    this.showInfo = this.infoShow ? this.infoShow : false;
    this.input = this.inputEl.querySelector("input");
    this.inputType = this.type
      ? this.type === "phone"
        ? "tel"
        : this.type
      : "text";

    if (this.type === "phone") {
      this.cleave = new Cleave(this.input, {
        onValueChanged: e => {
          this.value = e.target.value;
          this.inputEl.forceUpdate();
        },
        phone: true,
        phoneRegionCode: "US",
        delimiter: "-"
      });
    } else if (this.type === "hour") {
      this.cleave = new Cleave(this.input, {
        onValueChanged: e => {
          this.value = e.target.value;
          this.inputEl.forceUpdate();
        },
        numericOnly: true,
        delimiter: ".",
        blocks: [2, 2]
      });
    } else if (this.type === "expiration") {
      this.cleave = new Cleave(this.input, {
        onValueChanged: e => {
          this.value = e.target.value;
          this.inputEl.forceUpdate();
        },
        delimiter: "/",
        numericOnly: true,
        blocks: [2, 2]
      });
    } else if (this.type === "cvc") {
      this.cleave = new Cleave(this.input, {
        onValueChanged: e => {
          this.value = e.target.value;
          this.inputEl.forceUpdate();
        },
        delimiter: "",
        numericOnly: true,
        blocks: [4]
      });
    } else if (this.type === "ssn") {
      this.cleave = new Cleave(this.input, {
        onValueChanged: e => {
          this.value = e.target.value;
          this.inputEl.forceUpdate();
        },
        delimiter: "",
        numericOnly: true,
        blocks: [4]
      });
    } else if (this.type === "code") {
      this.cleave = new Cleave(this.input, {
        onValueChanged: e => {
          this.value = e.target.value;
          this.inputEl.forceUpdate();
        },
        delimiter: "",
        numericOnly: true,
        blocks: [6]
      });
    } else if (this.type === "ein") {
      this.cleave = new Cleave(this.input, {
        onValueChanged: e => {
          this.value = e.target.value;
          this.inputEl.forceUpdate();
        },
        numericOnly: true,
        blocks: [2, 7],
        delimiter: "-"
      });
    }
  }

  renderInput() {
    if (this.type === "card") {
      return <div id="card-number" />;
    } else if (this.type === "expiration") {
      return <div id="card-expiry" />;
    } else if (this.type === "cvc") {
      return <div id="card-cvc" />;
    } else {
      const inputType: any =
        this.inputType && !this.passwordVisible
          ? this.inputType
          : this.type === "phone" ||
            this.type === "hours" ||
            this.type === "date"
          ? "tel"
          : "text";

      return (
        <ion-input
          type={inputType}
          name={this.name}
          // value={
          //   this.type === "date"
          //     ? this.dateToYearMonthDay(this.value)
          //     : this.value
          // }
          value={this.value}
          placeholder={this.placeholder}
          required={this.required}
          autofocus={this.autofocus}
          autocomplete={this.autocomplete}
          autocorrect={this.autocorrect}
          autocapitalize={this.autocapitalize}
          minlength={this.minlength}
          maxlength={this.maxlength}
          disabled={this.disabled}
          min={this.min}
          max={this.max}
          step={this.step}
        />
      );
    }
  }

  renderEdit() {
    return (
      <div class="edit">
        <ion-button
          size="small"
          fill="clear"
          onClick={event => this.onEditClick(event)}
        >
          <span class="button-inner">
            Edit
            <ion-icon color="primary" name="md-create" slot="end" />
          </span>
        </ion-button>
      </div>
    );
  }

  render() {
    return (
      <ion-item
        class={
          this.inputType === "password" ? "input-password item-input" : null
        }
      >
        {this.iconLeft ? <ion-icon name={this.iconLeft} slot="start" /> : null}
        {this.label ? (
          <ion-label position="stacked">{this.label}</ion-label>
        ) : null}
        {this.renderInput()}
        {this.type === "password" ? (
          <div class="input-icon">
            <ion-icon
              name={this.passwordVisible ? "md-eye-off" : "md-eye"}
              onClick={(event: UIEvent) => this.togglePassword(event)}
            />
          </div>
        ) : null}
        {this.edit ? this.renderEdit() : null}
        {this.iconRight ? (
          <ion-icon name={this.iconRight} slot="start" />
        ) : null}
      </ion-item>
    );
  }
}
