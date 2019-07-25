import { Component, h, Listen, State } from '@stencil/core';




@Component({
    tag: 'app-calendar',
    styleUrl: 'app-calendar.css'
})
export class AppCalendar {

    @State() step = 1;
    @State() typeOfService: any;

    @Listen('sendSelectedService')
    listenForService(event){
        console.log(event, 'selected Service Event');
        this.step = 2;
    }

    renderStep(){
        switch(this.step) {
            case 1:
                return (  <ftms-choose-service serviceOptions={[{type: 'grab covfefe', description: 'want to spend 30 mins having a chat about your business and what we can do for you, let\'s a covfefe', selected: false}, {type: 'jam band', description: 'come jam with our band for an hour! pick one of our jams or teach us a new one', selected: false}, {type: 'dancing', description: 'we at madness labs can\'t dance. our contracter Happe is especially bad. teach us!', selected: false}, {type: 'Catan', description: 'a friendly game of Settlers of Catan. Let\'s talk business whilte we trade resources', selected: false}]} />);
            case 2:
                return (
                    <ftms-calendar-picker typeOfService="example" />
                );
        }
    }

    render() {
        return (
            <div class="app-calendar-wrapper">
                <p>Hello AppCalendar!</p>

                {
                    this.renderStep()
                }

            </div>
        );
    }
}
