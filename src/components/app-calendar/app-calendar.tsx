import { Component, h } from '@stencil/core';


@Component({
    tag: 'app-calendar',
    styleUrl: 'app-calendar.css',
    scoped: true
})
export class AppCalendar {

    step = 1;

    renderStep(){
        switch(this.step) {
            case 1:
                return               (  <ftms-choose-service serviceOptions={[{type: 'grab covfefe', description: 'want to spend 30 mins having a chat about your business and what we can do for you, let\'s a covfefe'}, {type: 'jam band', description: 'come jam with our band for an hour! pick one of our jams or teach us a new one'}, {type: 'dancing', description: 'we at madness labs can\'t dance. our contracter Happe is especially bad. teach us!'}, {type: 'Catan', description: 'a friendly game of Settlers of Catan. Let\'s talk business whilte we trade resources'}]} />);
        }
    }

    render() {
        return (
            <div>
                <p>Hello AppCalendar!</p>

                {
                    this.renderStep()
                }

            </div>
        );
    }
}
