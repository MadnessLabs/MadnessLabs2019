import {
  Component,
  h,
  Element,
  Event,
  EventEmitter,
  Prop
} from "@stencil/core";

@Component({
  tag: "ftms-choose-service",
  styleUrl: "ftms-choose-service.css"
})
export class FtmsChooseService {
  @Prop() serviceOptions;
  @Event() selectService: EventEmitter;
  @Element() ftmsChooseServiceEl: HTMLFtmsChooseServiceElement;

  example(event) {
    console.log(event);
    console.log("IN THE example thing");
  }
  onFormSubmit(event) {
    event.preventDefault;
    const selectEl = this.ftmsChooseServiceEl.querySelector(".serviceSelect");
    // selectEl.options[selectEl.selectedIndex.value]
    console.log(selectEl.options[selectEl.selectedIndex].value, " this is the select El");
  }

  render() {
    return (
      <div class="choose-services-wrapper">
        <select class="serviceSelect" onChange={event => this.example(event)}>
          {this.serviceOptions.map(service => (
            <option>{service.type}</option>
          ))}
        </select>
        <button onClick={event => this.onFormSubmit(event)}>BUTTON</button>
      </div>
    );
  }
}
