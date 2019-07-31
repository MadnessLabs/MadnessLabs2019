import { Component, h, Listen, State } from "@stencil/core";

@Component({
  tag: "app-calendar",
  styleUrl: "app-calendar.css"
})
export class AppCalendar {
  @State() step = 1;
  @State() typeOfService: any;
  @State() timeSlots = [];
  user = {
    id: 123,
    firstName: "Aaron",
    lastName: "Happe"
  };
  @Listen("sendSelectedService")
  listenForService(event) {
    console.log(event, "selected Service Event");
    this.step = 2;
  }
  @Listen("sendTimeSlotEvent")
  lisetnForTimeSlot(event){
    console.log(event);
    this.step = 3;
  }
  @Listen("sendDateStamp")
  getScheduleData(event) {
    // makes call to api and returns
    console.log(event, 'the Event goes here');
    
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
    this.step = 2;
  }
  componentDidLoad() {
    // this.temporarySetUp();
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
        return <ftms-calendar-picker typeOfService="example"  timeSlots={this.timeSlots} />;
      case 3: 
            return <ftms-send-user-info></ftms-send-user-info>
    }
  }

  render() {
    return <div class="app-calendar-wrapper">{this.renderStep()}</div>;
  }
}
