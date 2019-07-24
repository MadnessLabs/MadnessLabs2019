import {
    Component,
    Element,
    Event,
    EventEmitter,
    Prop,
    Watch,
    h
  } from "@stencil/core";
  import Cleave from "cleave.js";
  @Component({
    tag: "ft-input",
    styleUrl: "ft-input.css",
    scoped: true
  })
  export class FtInput {
    cleave: Cleave;
  
    @Element() inputEl: HTMLFtInputElement;
  
    @Event() ftInput: EventEmitter;
    @Event() ftChange: EventEmitter;
  
    @Prop() accept?: string;
    @Prop() alt?: string;
    @Prop() autoComplete?: string;
    @Prop() autocomplete?: string;
    @Prop() autoFocus?: boolean;
    @Prop() autofocus?: boolean | string;
    @Prop() capture?: string;
    @Prop() checked?: boolean;
    @Prop() crossOrigin?: string;
    @Prop() crossorigin?: string;
    @Prop() disabled?: boolean;
    @Prop() form?: string;
    @Prop() formAction?: string;
    @Prop() formaction?: string;
    @Prop() formEncType?: string;
    @Prop() formenctype?: string;
    @Prop() formMethod?: string;
    @Prop() formmethod?: string;
    @Prop() formNoValidate?: boolean;
    @Prop() formnovalidate?: boolean;
    @Prop() formTarget?: string;
    @Prop() formtarget?: string;
    @Prop() height?: number | string;
    @Prop() label: string;
    @Prop() list?: string;
    @Prop() max?: number | string;
    @Prop() maxLength?: number;
    @Prop() maxlength?: number | string;
    @Prop() min?: number | string;
    @Prop() minLength?: number;
    @Prop() minlength?: number | string;
    @Prop() multiple?: boolean;
    @Prop() name?: string;
    @Prop() pattern?: string;
    @Prop() placeholder?: string;
    @Prop() readOnly?: boolean;
    @Prop() readonly?: boolean | string;
    @Prop() required?: boolean;
    @Prop() size?: number;
    @Prop() src?: string;
    @Prop() step?: number | string;
    @Prop() type: any = "text";
    @Prop() value?: string | string[] | number;
    @Prop() width?: number | string;
  
    @Prop() format?: "usd";
    @Prop() iconLeft: string;
    @Prop() iconRight: string;
  
    @Watch("value")
    onValueChange() {
      if (this.cleave || (this.format === "usd" && !this.cleave)) {
        setTimeout(() => {
          this.cleave.setRawValue(this.value);
        }, 100);
      }
    }
  
    componentDidLoad() {
      if (this.format === "usd") {
        this.cleave = new Cleave(this.inputEl.querySelector("input"), {
          numeral: true,
          numeralThousandsGroupStyle: "thousand"
        });
      }
    }
  
    onChange(event: any) {
      this.ftChange.emit({
        event,
        value: this.cleave ? this.cleave.getRawValue() : event.target.value
      });
    }
  
    onInput(event: any) {
      this.ftInput.emit({
        event,
        value: this.cleave ? this.cleave.getRawValue() : event.target.value
      });
    }
  
    setWrapperClasses() {
      let classList = "ft-input-wrapper";
      if (this.iconLeft) {
        classList += " ft-input-has-icon-left";
      }
      if (this.iconRight) {
        classList += " ft-input-has-icon-right";
      }
      return classList;
    }
  
    render() {
      return (
        <div class={this.setWrapperClasses()}>
          {this.iconLeft ? (
            <ion-icon class="ft-input-icon-left" name={this.iconLeft} />
          ) : null}
          <input
            class="ft-input"
            accept={this.accept}
            alt={this.alt}
            autoComplete={this.autoComplete}
            autoFocus={this.autoFocus}
            capture={this.capture}
            checked={this.checked}
            crossOrigin={this.crossOrigin}
            disabled={this.disabled}
            form={this.form}
            formAction={this.formAction}
            formEncType={this.formEncType}
            formMethod={this.formMethod}
            formNoValidate={this.formNoValidate}
            formTarget={this.formTarget}
            height={this.height}
            list={this.list}
            max={this.max}
            maxLength={this.maxLength}
            min={this.min}
            minLength={this.minLength}
            multiple={this.multiple}
            name={this.name}
            pattern={this.pattern}
            placeholder={this.placeholder}
            readOnly={this.readOnly}
            required={this.required}
            size={this.size}
            src={this.src}
            step={this.step}
            type={this.type}
            value={this.value}
            width={this.width}
            onInput={this.onInput.bind(this)}
            onChange={this.onChange.bind(this)}
          />
          <label class="ft-input-label">{this.label}</label>
          {this.iconRight ? (
            <ion-icon class="ft-input-icon-right" name={this.iconRight} />
          ) : null}
        </div>
      );
    }
  }
  