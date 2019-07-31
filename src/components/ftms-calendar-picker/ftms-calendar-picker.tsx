import { Component, h, Event, EventEmitter, Prop, State } from "@stencil/core";

@Component({
  tag: "ftms-calendar-picker",
  styleUrl: "ftms-calendar-picker.css",
  scoped: true
})
export class FtmsCalendarPicker {
  @Prop() typeOfService: any;
  date: any;
  @Event() sendDateStamp: EventEmitter;
  @Event() sendTimeSlotEvent: EventEmitter;
  @State() days = {};
  @State() timeSlotChosen: any;
  @Prop() timeSlots: any;

  setTimeSlot(_event, slot, _index) {
    // this.timeSlotChosen[index].chosen = true;
    this.timeSlotChosen = slot;
    console.log(this.timeSlotChosen, ' time slot has been chosen');
    
  }

  onFormSubmit(event){
    this.timeSlotChosen ? this.sendTimeSlotEvent.emit({event, value: this.timeSlotChosen}) : alert('pick a time slot');
  }

  componentDidLoad() {
    this.date = new Date();
    console.log(this.date, ' thisDATE');
    this.sendDateStamp.emit({event,
      value: this.date});
      console.log(this.timeSlots, 'timeSLOTS');
  }

  render() {
    //
    return(
      <div class="picker-wrapper">
        {this.timeSlots.map((slot, index) => <p onClick={event => this.setTimeSlot(event, slot, index)}>{slot.slot}</p>)}
        <button onClick={event => this.onFormSubmit(event)}>BUTTON</button>
      </div>
      ) 
      ;
  }
}
