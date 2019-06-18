
import { Color } from "@ionic/core";
import { Component, h, Listen, Prop } from "@stencil/core";

@Component({
  tag: "ml-floating-button",
  styleUrl: "ml-floating-button.css"
})
export class MlFloatingButton {
    fabEl: HTMLIonFabElement;

    /**
     * The list of buttons to show when the material button is clicked
     */
    @Prop()
    buttonList: {
      /**
       * The title to show next to the button
       */
      title: string;
      /**
       * The icon to use in the button
       */
      icon: string;
      /**
       * The color from the theme to make the button
       */
      color: Color;
      /**
       * The functionality to run when the button is clicked
       */
      onClick: (event: any) => any;
    }[] = [];
    /**
     * The url to link the material button to
     */
    @Prop()
    url: string;
    /**
     * The icon to use on the material button when it's closed
     */
    @Prop()
    openIcon = "md-add";

    @Listen("body:click")
    outterFabClick(event) {
        if (
        this.fabEl &&
        this.fabEl.activated &&
        !event.target.closest("ion-fab")
        ) {
        this.fabEl.close();
        }
    }    

  componentDidLoad() {
    // Set the size of the close icon since there
    // is no CSS variable at this moment
    const fabIconEl: HTMLIonIconElement = this.fabEl
      .querySelector("ion-fab-button")
      .shadowRoot.querySelector("ion-icon");
    fabIconEl.style.setProperty("font-size", "40px");
  }    

  render() {
    return (
        <div class="ion-fab-wrapper">
        <ion-fab
          horizontal="end"
          vertical="bottom"
          slot="fixed"
          ref={el => (this.fabEl = el as HTMLIonFabElement)}
        >
          <ion-fab-button color="dark">
            <ion-icon name={this.openIcon} />
          </ion-fab-button>
          <ion-fab-list side="top">
            {this.buttonList.map(mb => (
              <div class="button-wrapper">
                <span class="fab-label">{mb.title}</span>
                <ion-button
                  color={mb.color}
                  onClick={event =>
                    mb.onClick && typeof mb.onClick === "function"
                      ? mb.onClick(event)
                      : null
                  }
                  shape="round"
                >
                  <ion-icon name={mb.icon} />
                </ion-button>
              </div>
            ))}
          </ion-fab-list>
        </ion-fab>
      </div>
    );
  }
}
