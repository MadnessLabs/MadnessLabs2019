import { Component, h, Listen, State } from "@stencil/core";

@Component({
  tag: "app-calendar",
  styleUrl: "app-calendar.css"
})
export class AppCalendar {
  @State() step = 1;
  @State() typeOfService: any;
  @State() date: any;
  @State() dayOfWeek: any;
  @State() dayOfMonth: any;
  @State() month: any;
  @State() dateReadableString: string;
  @State() year: any;
  @State() address: any;
  @State() timeSlots = [];
  user = {
    id: 123,
    firstName: "Aaron",
    lastName: "Happe"
  };
  @Listen("sendSelectedService")
  listenForService(_event) {
    this.step = 2;
  }
  @Listen("sendTimeSlotEvent")
  lisetnForTimeSlot(_event) {
    this.step = 3;
  }
  @Listen("sendDateStamp")
  getScheduleData(_event) {
    this.timeSlots = [
      {
        slot: "3:30 am",
        time: "2019-07-30 03:30:00 cst",
        user: 123
      },
      {
        slot: "4:00 am",
        time: "2019-07-30 04:00:00 cst",
        user: 332
      },
      {
        slot: "4:30 am",
        time: "2019-07-30 04:30:00 cst",
        user: 123
      }
    ];
    this.timeSlots = this.timeSlots;
  }

  // temporary
  temporarySetUp() {
    this.step = 3;
  }
  getStringDayOfWeek() {
    switch (this.dayOfWeek) {
      case 0:
        this.dayOfWeek = "Monday";
        break;
      case 1:
        this.dayOfWeek = "Tuesday";
        break;
      case 2:
        this.dayOfWeek = "Wednesday";
        break;
      case 3:
        this.dayOfWeek = "Thursday";
        break;
      case 4:
        this.dayOfWeek = "Friday";
        break;
      case 5:
        this.dayOfWeek = "Saturday";
        break;
      case 6:
        this.dayOfWeek = "Sunday";
        break;
    }
  }
  getStringMonth(){
    switch (this.month) {
      case 0:
        this.month = "January";
        break;
      case 1:
        this.month = "February";
        break;
      case 2:
        this.month = "March";
        break;
      case 3:
        this.month = "April";
        break;
      case 4:
        this.month = "May";
        break;
      case 5:
        this.month = "June";
        break;
      case 6:
        this.month = "July";
        break;
      case 7:
        this.month = "August";
        break;
      case 8:
        this.month = "September";
        break;
      case 9:
        this.month = "October";
        break;
      case 10:
        this.month = "November";
      case 11:
        this.month = "December";
    }
  }


  @Listen('ftChange')
  listenFtChange(event){
    console.log(event, 'ftChangeEvent');
  }

  @Listen('sendingUserInfo')
  acceptingUserInfo(_event){
    this.step = 4;
  }

  componentDidLoad() {
    this.date = new Date();
    this.dayOfWeek = this.date.getDay();
    this.getStringDayOfWeek();
    this.dayOfMonth = this.date.getDate();
    this.month = this.date.getMonth();
    this.getStringMonth();
    this.year = this.date.getFullYear();

    this.dateReadableString = `${this.dayOfWeek} ${this.month} ${this.dayOfMonth}, ${this.year}`;

    console.log(this.dateReadableString, 'this is the Date in a reable string' );
    
    this.temporarySetUp();
  }

  renderStep() {
    switch (this.step) {
      case 1:
        return (
          <ftms-choose-service
            user={this.user}
            serviceOptions={[
              {
                type: "grab covfefe",
                description:
                  "want to spend 30 mins having a chat about your business and what we can do for you, let's a covfefe",
                selected: false
              },
              {
                type: "jam band",
                description:
                  "come jam with our band for an hour! pick one of our jams or teach us a new one",
                selected: false
              },
              {
                type: "dancing",
                description:
                  "we at madness labs can't dance. our contracter Happe is especially bad. teach us!",
                selected: false
              },
              {
                type: "Catan",
                description:
                  "a friendly game of Settlers of Catan. Let's talk business whilte we trade resources",
                selected: false
              }
            ]}
          />
        );
      case 2:
        return (
          <ftms-calendar-picker
            typeOfService="example"
            date={this.date}
            timeSlots={this.timeSlots}
          />
        );
      case 3:
        return <ftms-send-user-info formatedYear={this.dateReadableString } />;
        case 4:
            return <ftms-display-confirmation formatedYear={this.dateReadableString } />;        
    }
  }

  render() {
    return <div class="app-calendar-wrapper">{this.renderStep()}</div>;
  }
}
