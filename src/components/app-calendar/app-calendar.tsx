import { Component, h, State } from "@stencil/core";

@Component({
  tag: "app-calendar",
  styleUrl: "app-calendar.css"
})
export class AppCalendar {
  // date (2019/08/19), 9 - 5, event [{type: 'grab covfefe', description: 'blahblah'}]
  // pick a time in 30 minute slots
  // or an array? [{9: true, slots: 2}, 9.5: true,]
  // should it be math? time + event.date.totalTime

  // array method trying first
  // [year: {
  // 2019: []
  // }]

  @State() step = 1;
  @State() typeOfService: any;

  // @Listen('sendSelectedService')
  // listenForService(event){
  //     console.log(event, 'selected Service Event');
  //     this.step = 2;
  // }

  // temporary
  temporarySetUp() {
    this.step = 2;
  }
  componentDidLoad() {
    this.temporarySetUp();
  }

  renderStep() {
    switch (this.step) {
      case 1:
        return (
          <ftms-choose-service
            serviceOptions={[
              {
                type: "grab covfefe",
                description:
                  "want to spend 30 mins having a chat about your business and what we can do for you, let's a covfefe",
                time: 0.5,
                selected: false
              },
              {
                type: "jam band",
                description:
                  "come jam with our band for an hour! pick one of our jams or teach us a new one",
                time: 1,
                selected: false
              },
              {
                type: "dancing",
                description:
                  "we at madness labs can't dance. our contracter Happe is especially bad. teach us!",
                time: 1,
                selected: false
              },
              {
                type: "Catan",
                description:
                  "a friendly game of Settlers of Catan. Let's talk business whilte we trade resources",
                time: 2,
                selected: false
              }
            ]}
          />
        );
      case 2:
        return (
          <ftms-calendar-picker
            typeOfService="example"
            calendarScheduleObjects={[
              {
                year: 2019,
                months: [
                  {
                    name: 'january',
                    january: [
                      {
                        1: {
                          startTime: 9,
                          service: {
                            type: "grab covfefe",
                            description:
                              "a friendly game of Settlers of Catan. Let's talk business whilte we trade resources",
                            time: 0.5,
                            selected: false
                          }
                        }
                      }
                    ]
                  },
                  { 
                    namme: 'august',
                    august: [
                      {
                        12: {
                            startTime: 11,
                            service: {
                              type: "catan",
                              description:
                                "want to spend 30 mins having a chat about your business and what we can do for you, let's a covfefe",
                              time: 0.5,
                              selected: false
                            }
                        }
                      }
                    ] 
                }
                ]
              }
            ]}
          />
        );
    }
  }

  render() {
    return <div class="app-calendar-wrapper">{this.renderStep()}</div>;
  }
}
