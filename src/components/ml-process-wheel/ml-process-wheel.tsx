import {
  Component,
  Element,
  Event,
  EventEmitter,
  Prop,
  State,
  Watch,
  h
} from "@stencil/core";

@Component({
  tag: "ml-process-wheel",
  styleUrl: "ml-process-wheel.css"
})
export class MlProcessWheel {
  @Element() wheelEl: any;

  /**
   * The index of the pie piece that should have the active class
   */
  @Prop() currentIndex: number;

  /**
   * The index of the currently active piece of pie
   */
  @State() currentlyActive = 0;

  /**
   * Fired when a section of the wheel is clicked and should pass the following
   * {
   *   index: number;
   * }
   */
  @Event() madWheelClick: EventEmitter;

  @Watch("currentIndex")
  onIndexChange() {
    this.currentlyActive = this.currentIndex;
  }

  makeActive(event: any, index: number) {
    this.currentlyActive = index;
    this.madWheelClick.emit({ event, index });
  }

  render() {
    return (
      <div class="centered">
        <div
          class={this.currentlyActive === 3 ? "active piece-1" : "piece-1"}
          onClick={(event: UIEvent) => this.makeActive(event, 3)}
        >
          <ion-icon name="ios-rocket" />
          <h3>RELEASE</h3>
        </div>
        <div
          class={this.currentlyActive === 0 ? "active piece-2" : "piece-2"}
          onClick={(event: UIEvent) => this.makeActive(event, 0)}
        >
          <ion-icon name="ios-brush" />
          <h3>DESIGN</h3>
        </div>
        <div
          class={this.currentlyActive === 1 ? "active piece-4" : "piece-4"}
          onClick={(event: UIEvent) => this.makeActive(event, 1)}
        >
          <h3>PLAN</h3>
          <ion-icon name="ios-calendar" id="plan-icon" />
        </div>
        <div
          class={this.currentlyActive === 2 ? "active piece-3" : "piece-3"}
          onClick={(event: UIEvent) => this.makeActive(event, 2)}
        >
          <h3>DEVELOP</h3>
          <ion-icon name="md-hammer" />
        </div>
      </div>
    );
  }
}
