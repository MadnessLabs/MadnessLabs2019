import { Component, h, Prop } from '@stencil/core';




@Component({
    tag: 'ftms-display-confirmation',
    styleUrl: 'ftms-display-confirmation.css'
})
export class FtmsDisplayConfirmation {

    @Prop()formatedDate: any;
    @Prop()userName: any;
    @Prop()address: any;
    @Prop()service: any;
    @Prop()time: any;
    @Prop()dayOfWeek: any;


    render() {
        return (
            <div>
                <h1>Good To Go!</h1>
                <p>Your appointment is booked, we will see you {}</p>
                <p>Hello FtmsDisplayConfirmation!</p>
                <div class="appointment-info">
                    <h3>{}</h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        );
    }
}
