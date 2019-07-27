import { Component, h, Prop, State } from "@stencil/core";

@Component({
  tag: "ftms-calendar-picker",
  styleUrl: "ftms-calendar-picker.css",
  scoped: true
})
export class FtmsCalendarPicker {
  @Prop() typeOfService: any;
  // @State() totalYears: number;
  @State() currentYear: number;
  @State() currentMonth: number;
  @State() yearIndex = 0;
  @Prop({ mutable: true }) calendarScheduleObjects: any;

  findDate() {
    const dateObject = new Date();
    this.currentYear = dateObject.getFullYear();
    this.currentMonth = dateObject.getMonth();
  }

  constructDateObject() {
    let i;
    let yearObject;
    let newCalendarScheduleObjects = [];

    for (i = 0; i < 2; i++) {
      if (
        this.calendarScheduleObjects[i] &&
        this.calendarScheduleObjects[i].year === this.currentYear
      ) {
        yearObject = this.calendarScheduleObjects[i];
      } else {
        yearObject = { year: this.currentYear, months: [{}] };
      }

      newCalendarScheduleObjects = [...newCalendarScheduleObjects, yearObject];
      this.calendarScheduleObjects = newCalendarScheduleObjects;
      this.currentYear = this.currentYear + 1;
    }
    this.constructMonthObject();
  }

  constructMonthObject() {
    let i;
    // let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    let monthObject;
    // let newCalendarScheduleObjects = [];

    this.calendarScheduleObjects.forEach(year => {
      // may have an issue with scope with the index?
      // have to determine days in the month at some point too;
      
      for (i = 0; i < 12; i++) {
        switch (i) {
          case i:
            monthObject = year.months[i].january
              ? year.months[i]
              : { january: [] };
            
           year.months[0] = monthObject;
           console.log(year.months[0], 'is the right thing here?');

           console.log(this.calendarScheduleObjects, 'what about in here?');
           
           
            break;
        }
      }
    });
  }

  changeCalendarYear(direction) {
    this.yearIndex =
      direction === "left" ? this.yearIndex - 1 : this.yearIndex + 1;
  }

  componentDidLoad() {
    this.findDate();
    this.constructDateObject();
  }

  render() {
    return (
      <div class="calendar-picker-wrapper">
        <h1>Calendar!</h1>
        {/* {this.calendarScheduleObjects.map(year) => (
            year.year
        )} */}
        <div class="calendar-year">
          {this.yearIndex === 1 ? (
            <span class="year-back">
              <ion-icon
                name="arrow-dropleft"
                onClick={() => this.changeCalendarYear("left")}
              />
            </span>
          ) : null}
          <h3>{this.calendarScheduleObjects[this.yearIndex].year}</h3>
          {this.yearIndex === 0 ? (
            <span class="year-forward">
              <ion-icon
                name="arrow-dropright"
                onClick={() => this.changeCalendarYear("right")}
              />
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}
