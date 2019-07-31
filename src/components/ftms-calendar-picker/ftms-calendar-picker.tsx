import { Component, h, Prop, State } from "@stencil/core";

@Component({
  tag: "ftms-calendar-picker",
  styleUrl: "ftms-calendar-picker.css",
  scoped: true
})
export class FtmsCalendarPicker {
  @Prop() typeOfService: any;
  @State() todayObject: any = {};
  @State() tomorrowObject: any = {};
  // @State() timeslots: any = [
  //   { today: {
  //     timeslots: []
  //     }
  //   },
  //   {
  //     tomororw: {
  //       timeslots:[]
  //     }
  //   }
  // ];
  @State() days = {};

  createSlots(){

    this.days[this.tomorrowObject.dayKey] = [];

    let time = this.todayObject.newDate.getHours() + 1;
    
    while(time < 15.5) {
      
      this.days[this.tomorrowObject.dayKey].push({
        "slot": time
      }) 
      time = time + .5;
      console.log(time);
    }
    console.log(this.days, 'ASDFEFASDF');
    
  }

  componentDidLoad() {
    let dateObj = new Date();

    this.todayObject.newDate = dateObj;
    this.todayObject.month = dateObj.getUTCMonth() + 1; //months from 1-12
    this.todayObject.day = dateObj.getUTCDate();
    this.todayObject.year = dateObj.getUTCFullYear();
    this.todayObject.todayString =
      this.todayObject.month +
      " " +
      this.todayObject.day +
      ", " +
      this.todayObject.year;

    this.todayObject.dayKey = this.todayObject.year + "-" + this.todayObject.month + "-" + this.todayObject.day;

    let initDateObj2 = new Date(this.todayObject.todayString);
    initDateObj2.setDate(dateObj.getDate() + 1);

    this.tomorrowObject.newDate = initDateObj2;
    this.tomorrowObject.month = initDateObj2.getUTCMonth() + 1; //months from 1-12
    this.tomorrowObject.day = initDateObj2.getUTCDate();
    this.tomorrowObject.year = initDateObj2.getUTCFullYear();
    this.tomorrowObject.todayString = this.tomorrowObject.month + " " + this.tomorrowObject.day + ", " + this.tomorrowObject.year;

    this.tomorrowObject.dayKey = this.tomorrowObject.year + "-" + this.tomorrowObject.month + "-" + this.tomorrowObject.day;


    console.log(this.todayObject, ' 1todayObject');
    console.log(this.tomorrowObject, ' 2tomorrowObject');
    
    this.createSlots();
  }

  convertToHours(){

  }

  render() {
    //
    return(
      <div class="picker-wrapper">
        {this.days[this.tomorrowObject.dayKey].map(day => (
          <p>{day.slot} o-clock</p>
        )

        )}
      </div>
      ) 
      ;
  }
}
