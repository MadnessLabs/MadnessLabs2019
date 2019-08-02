import {
  Component,
  h,
  Element,
  Event,
  EventEmitter,
  Prop,
  State
} from "@stencil/core";

@Component({
  tag: "ftms-choose-service",
  styleUrl: "ftms-choose-service.css"
})
export class FtmsChooseService {
  selectEl;
  @Prop({mutable: true}) serviceOptions: any;
  @Prop() user: any;
  @State() chosenIndex: any;
  @State() selectedService: any;
  @Event() sendSelectedService: EventEmitter;
  @Element() ftmsChooseServiceEl: any;

  selectService(service, index) {
    this.selectedService = service;
    this.chosenIndex = index;
    this.serviceOptions = this.serviceOptions;
  }

  onFormSubmit(event) {
    event.preventDefault;
    this.sendSelectedService.emit(this.selectedService); 
  }

  componentDidLoad(){
    this.chosenIndex = 0;
    this.selectService(this.serviceOptions[0], 0);
  }

  render() {
    return (
      <div class="choose-services-wrapper">
        <p>Hi, <span>{this.user.firstName}.</span></p>

        <h1>Pick A Service: </h1>

        <div class="service-list">

          {this.serviceOptions.map((service, index ) => (
            <div  class={this.chosenIndex === index ? "service-item selected-service-item" : "service-item"} onClick={() => this.selectService(service, index)} >
              <h3>{service.type}</h3><p>{service.description}</p>
            </div>
          ))}
        </div>
        <button onClick={event => this.onFormSubmit(event)}>BUTTON</button>
      </div>
    );
  }
}
