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
        console.log('make it here?2');
        
        // const dateMax = this.currentYear + 10;
        // let i;

        // let currentYearObject;
        // let newYearObject = [];
        console.log(this.calendarScheduleObject[0].year, 'calendarSchedObj');
        console.log(this.currentYear, 'this.currentYEAR');
        
        // for (i = 0; i < 10; i++) {
        //     currentYearObject = this.calendarScheduleObject.year === this.currentYear ? this.currentYear : { year: this.currentYear };
        //     newYearObject = [...newYearObject, currentYearObject];
        //     this.calendarScheduleObject = newYearObject;
            
        //     // newYearObject = [...this.calendarScheduleObject, currentYearObject];
        //     // this.calendarScheduleObject = newYearObject;
        //     // console.log(this.currentYear, 'CURRENT YEAR');
        //     // console.log(dateMax, 'SAME DATE MAX');
        //     this.currentYear + 1;
        // }
        // console.log(this.calendarScheduleObject, ' thisCalendarScheduleObject');
        // console.log(newYearObject, ' newYearObject');
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
