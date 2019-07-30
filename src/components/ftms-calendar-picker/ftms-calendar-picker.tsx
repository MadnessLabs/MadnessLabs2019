import { Component, h, Prop, State } from "@stencil/core";

@Component({
  tag: "ftms-calendar-picker",
  styleUrl: "ftms-calendar-picker.css",
  scoped: true
})
export class FtmsCalendarPicker {
  @Prop() typeOfService: any;
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
    let monthObject;

    this.calendarScheduleObjects.forEach((year, yearIndex) => {

      for (i = 0; i < 12; i++) {
        switch (i) {
          case 0:
            monthObject = year.months[i].january
              ? year.months[i]
              : { name: 'january', january: [] };

            year.months[0] = monthObject;

            this.calendarScheduleObjects[yearIndex].months[0] = monthObject;
            this.calendarScheduleObjects = this.calendarScheduleObjects;
            break;
            case 1:
              console.log('logging this stuff out');
              
              monthObject = year.months[i].january
                ? year.months[i]
                : { name: 'february', january: [] };
  
              year.months[1] = monthObject;
  
              this.calendarScheduleObjects[yearIndex].months[1] = monthObject;
              this.calendarScheduleObjects = this.calendarScheduleObjects;
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
      // claims  year.map isnt a function. what a claim
      console.log(this.calendarScheduleObjects, 'thisCalendarScheduleObj&!!!ct');
      
    return (
      <div class="calendar-picker-wrapper">
        <h1>Calendar!</h1>
        {this.calendarScheduleObjects.map(year=> (
          <div>
            <p>asdf{year.year}</p>
            {/* {year.map(month => (
                {month.name}
            ))} */}
            {year.months.map( month => (
                <div>CD {month.name}</div>
            ))}
          </div>
        ))}
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
