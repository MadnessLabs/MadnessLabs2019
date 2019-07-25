import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'ftms-calendar-picker',
    styleUrl: 'ftms-calendar-picker.css'
})
export class FtmsCalendarPicker {

    @Prop() typeOfService

    render() {
        return (
            <div>
                <p>Hello FtmsCalendarPicker!</p>
            </div>
        );
    }
}
