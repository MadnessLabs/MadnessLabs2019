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
  @State() selectedService: any;
  @Event() sendSelectedService: EventEmitter;
  @Element() ftmsChooseServiceEl: any;

  selectService(service, index) {
    this.deselectServcies();
    this.selectedService = service;
    this.serviceOptions[index].selected = true;
    this.serviceOptions = this.serviceOptions;
  }

  deselectServcies() {
    this.serviceOptions.forEach((service, _index) => {
      service.selected = false;
    });
    this.serviceOptions = this.serviceOptions;
  }

  onFormSubmit(event) {
    event.preventDefault;
    this.sendSelectedService.emit(this.selectedService); 
  }

  componentDidLoad(){
    console.log(this.user, 'thisDotUSER');
    
    this.selectService(this.serviceOptions[0], 0);
  }
  // class="service-item" 
  render() {
    return (
      <div class="choose-services-wrapper">
        <p>Hi, <span>{this.user.firstName}.</span></p>

        <h1>Pick A Service: </h1>

        <div class="service-list">

          {this.serviceOptions.map((service, index ) => (
            <div  class={service.selected ? "service-item selected-service-item" : "service-item"} onClick={() => this.selectService(service, index)} >
              <h3>{service.type}</h3><p>{service.description}</p>
            </div>
          ))}
        </div>
        <button onClick={event => this.onFormSubmit(event)}>BUTTON</button>
      </div>
    );
  }
}
