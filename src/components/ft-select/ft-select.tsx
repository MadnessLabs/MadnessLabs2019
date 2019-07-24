import {
    Component,
    Element,
    Event,
    EventEmitter,
    Method,
    Prop,
    State,
    Watch,
    h
  } from "@stencil/core";
  
  import { HelperService } from "../../services/helpers";
  
  @Component({
    tag: "ft-select",
    styleUrl: "ft-select.css",
    scoped: true
  })
  export class FtSelect {
    modalEl: HTMLIonModalElement;
  
    @Element()
    selectEl: HTMLElement;
  
    @Prop({ connect: "ion-modal-controller" })
    modalCtrl: HTMLIonModalControllerElement;
    @Prop()
    badge: string;
    @Prop()
    label: string;
    @Prop()
    name: string;
    @Prop()
    type: string;
    @Prop()
    placeholder: string;
    @Prop()
    value: any;
    @Prop()
    required: boolean;
    @Prop()
    where: string;
    @Prop()
    options: [
      {
        name: any;
        value: any;
        payload: any;
      }
    ];
    @Prop()
    modal: string;
  
    @State()
    valueName: any;
    @State()
    selectedValue: any;
    @State()
    selectedIndex: any;
  
    @Event()
    ftSelectOpen: EventEmitter;
    @Event()
    ftSelectClose: EventEmitter;
    @Event()
    ftChange: EventEmitter;
    helper = new HelperService();
  
    @Method()
    async open(event) {
      if (event) {
        this.ftSelectOpen.emit({ event });
      }
  
      this.selectEl.querySelector(".item").classList.add("item-input-has-focus");
      const attributes = {
        options: this.options ? this.options : [],
        selected: this.selectedIndex ? this.selectedIndex : 0,
        where: this.where
      };
      this.modalEl = await this.modalCtrl.create({
        component: this.modal,
        componentProps: attributes,
        cssClass: "select-modal"
      });
      this.modalEl.present();
  
      const selectChangeEvent = selectEvent => {
        this.selectChange(selectEvent);
      };
  
      this.helper.addOnceEventListener(
        this.modalEl,
        "ftModalClose",
        () => {
          document.body.removeEventListener(
            "ftSelectChange",
            selectChangeEvent,
            true
          );
          this.selectEl
            .querySelector(".item")
            .classList.remove("item-input-has-focus");
        },
        true
      );
  
      this.helper.addOnceEventListener(
        document.body,
        "ftSelectChange",
        ftChangeEvent => {
          this.selectChange(ftChangeEvent);
        },
        true
      );
    }
  
    @Watch("value")
    didChangeHandler(newValue: number) {
      this.updateValue(newValue);
    }
  
    @Watch("options")
    onOptionsChange() {
      this.selectedIndex = this.value ? this.value : 0;
      this.selectedValue = this.options ? this.options[this.selectedIndex] : {};
    }
  
    @Method()
    async updateValue(index) {
      this.selectedIndex = index;
      this.selectedValue = this.options ? this.options[index] : {};
    }
  
    selectChange(event) {
      this.selectedIndex = event.detail.index;
      this.selectedValue = event.detail.option;
      this.ftChange.emit({
        event,
        name: this.name,
        value: event.detail.option.value,
        selected: event.detail.index,
        payload: event.detail.option.payload
      });
      this.modalEl.dismiss();
    }
  
    componentWillLoad() {
      this.selectedIndex = this.value ? this.value : 0;
      this.selectedValue = this.options ? this.options[this.selectedIndex] : {};
    }
  
    render() {
      return (
        <ion-item onClick={(event: UIEvent) => this.open(event)}>
          <ion-label position="stacked">{this.label}</ion-label>
          <ion-input
            type={this.type ? this.type : ("text" as any)}
            placeholder={this.placeholder}
            value={this.selectedValue && this.selectedValue.name}
            required={this.required}
          />
          <div class="end-cap" slot="end">
            {this.badge && <ion-badge>{this.badge}</ion-badge>}
            <ion-icon name="md-arrow-dropdown" />
          </div>
        </ion-item>
      );
    }
  }
  