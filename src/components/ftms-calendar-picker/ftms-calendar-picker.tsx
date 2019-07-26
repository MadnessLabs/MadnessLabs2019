import { Component, h, Prop, State } from '@stencil/core';


@Component({
    tag: 'ftms-calendar-picker',
    styleUrl: 'ftms-calendar-picker.css'
})
export class FtmsCalendarPicker {

    @Prop() typeOfService: any;
    // @State() totalYears: number;
    @State() currentYear: number;
    @State() currentMonth: number;
    @Prop({mutable: true}) calendarScheduleObject:any;

    findDate() {
        const dateObject = new Date();
        this.currentYear = dateObject.getFullYear();
        this.currentMonth = dateObject.getMonth();
    }

    constructDateObject() {
        // const dateMax = this.currentYear + 10;
        // let i;
        // year is not iterable but its an array and should be?

        console.log(this.calendarScheduleObject.year, 'this year should be a thing that is iterable');

        // for (i = this.currentYear; i < dateMax; i++) {
        //     [...this.calendarScheduleObject.year, this.currentYear];
        // }
        console.log(this.calendarScheduleObject, ' this OBJECT');
    }

    componentDidLoad() {
        this.findDate();
        this.constructDateObject();
    }

    render() {
        return (
            <div class="calendar-picker-wrapper">
                <h1>Calendar!</h1>
                {}
            </div>
        );
    }
}
