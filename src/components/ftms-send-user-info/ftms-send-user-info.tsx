import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';


@Component({
    tag: 'ftms-send-user-info',
    styleUrl: 'ftms-send-user-info.css'
})
export class FtmsSendUserInfo {

    @Prop() formatedYear: any;
    @Event() sendingUserInfo: EventEmitter;

    onFormSubmit(event){
        this.sendingUserInfo.emit(event);
      }    
  
    render() {
        return (
            <div class="send-user-info-wrapper">
                <h1>Finish Booking</h1>
                <p>Please fill the form below and hit submit to book your Free Evaluation on {this.formatedYear}.</p>
                <form>
                    <ft-input label="address" type="text"></ft-input>
                    <ft-input label="phone number"></ft-input>
                    <ft-input label="email"></ft-input>
                    <button onClick={event => this.onFormSubmit(event)}>BUTTON</button>
                </form>
            </div>
        );
    }
}
