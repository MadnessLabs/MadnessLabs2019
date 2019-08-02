import { Component, h, Event, EventEmitter,Prop, State } from "@stencil/core";

@Component({
  tag: "ftms-calendar-picker",
  styleUrl: "ftms-calendar-picker.css",
  scoped: true
})
export class FtmsCalendarPicker {
  @Prop() typeOfService: any;
  @Prop() date: any;
  @Event() sendDateStamp: EventEmitter;
  @Event() sendTimeSlotEvent: EventEmitter;
  @State() chosenIndex = undefined;
  @State() days = {};
  @State() timeSlotChosen: any;
  @Prop() timeSlots: any;





  setTimeSlot(_event, slot, index) {
    this.timeSlotChosen = slot;
    this.chosenIndex = index;
  }

  onFormSubmit(event){
    this.timeSlotChosen ? this.sendTimeSlotEvent.emit({event, value: this.timeSlotChosen}) : alert('pick a time slot');
  }

  componentDidLoad() {
    this.sendDateStamp.emit({event,
      value: this.date});
  }


  render() {
    //
    return(
      <div class="picker-wrapper">
        {this.timeSlots.map((slot, index) => <p class={this.chosenIndex === index ? ' chosen-index' : null} onClick={event => this.setTimeSlot(event, slot, index)}>{slot.slot}</p>)}
        <button onClick={event => this.onFormSubmit(event)}>BUTTON</button>
      </div>
      ) 
      ;
  }
}
