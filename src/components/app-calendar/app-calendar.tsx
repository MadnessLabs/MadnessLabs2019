import { Component, h, Listen, State } from "@stencil/core";

@Component({
  tag: "app-calendar",
  styleUrl: "app-calendar.css"
})
export class AppCalendar {

  @State() step = 1;
  @State() typeOfService: any;

  user = {
    id: 123,
    firstName: 'Aaron',
    lastName: 'Happe'
  }

  @Listen("sendSelectedService")
  listenForService(event) {
    console.log(event, "selected Service Event");
    this.step = 2;
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
        return (
          <ftms-calendar-picker
            typeOfService="example"
          />
        );
    }
  }

  render() {
    return <div class="app-calendar-wrapper">{this.renderStep()}</div>;
  }
}
