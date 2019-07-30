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
    let newMonthObject;
    let oldMonthObject;

    this.calendarScheduleObjects.forEach((year, yearIndex) => {

      for (i = 0; i < 12; i++) {
        switch (i) {
          case 0:
            if( year.months[i] ) {
              if( year.months[i].name === 'january' ) {
                newMonthObject = year.months[i];
                this.calendarScheduleObjects[yearIndex].months[0] = newMonthObject;
              } else {
                newMonthObject = { name: 'january', january: [] };
                oldMonthObject = year.months[i];
                this.calendarScheduleObjects[yearIndex].months[0] = newMonthObject;
                this.calendarScheduleObjects[yearIndex].months[1] =
                oldMonthObject;
              }
            this.calendarScheduleObjects = this.calendarScheduleObjects;
            }
            console.log(this.calendarScheduleObjects, 'within first Switch CASE');
            break;
            case 1:
                if( year.months[i] ) {
                  if( year.months[i].name === 'february' ) {
                    newMonthObject = year.months[i];
                    this.calendarScheduleObjects[yearIndex].months[1] = newMonthObject;
                  } else {
                    newMonthObject = { name: 'february', january: [] };
                    oldMonthObject = year.months[i];
                    this.calendarScheduleObjects[yearIndex].months[1] = newMonthObject;
                    this.calendarScheduleObjects[yearIndex].months[2] =
                    oldMonthObject;
                  }
                this.calendarScheduleObjects = this.calendarScheduleObjects;
                }
                console.log(this.calendarScheduleObjects, 'within first Switch CASE');
                break;            
            // case 1:
            //   console.log('logging this stuff out');
              
            //   newMonthObject = year.months[i].name === 'february'
            //     ? year.months[i]
            //     : { name: 'february', january: [] };
  
            //   year.months[1] = newMonthObject;
  
            //   this.calendarScheduleObjects[yearIndex].months[1] = newMonthObject;
            //   this.calendarScheduleObjects = this.calendarScheduleObjects;
            //   break;
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
        {this.calendarScheduleObjects.map(year=> (
          <div>
            <p>{year.year}</p>
            {/* {year.map(month => (
                {month.name}
            ))} */}
            {year.months.map( month => (
                <div>* {month.name}</div>
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
