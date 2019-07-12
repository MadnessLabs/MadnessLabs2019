import { Component, Element, Listen, State, h } from "@stencil/core";

@Component({
  tag: "ml-how-we-do",
  styleUrl: "ml-how-we-do.css"
})
export class MlHowWeDo {
  slider: HTMLIonSlidesElement;

  /**
   * Options to control slider
   * @see http://idangero.us/swiper/api/
   */
  sliderOptions: any = {
    initialSlide: 0,
    autoHeight: true
  };

  @Element() howWeDoEl: any;

  @State() currentSlide: number;

  @Listen("madWheelClick")
  onWheelClick(event) {
    this.slider.slideTo(event.detail.index);
  }

  @Listen("ionSlideDidChange")
  onSlideChange(event) {
    this.currentSlide = event.detail.snapIndex;
  }

  componentDidLoad() {
    // Allow the ion-slides component proper time to render the pagination bullets
    setTimeout(() => {
      // Get the slider element
      // https://github.com/ionic-team/ionic/blob/master/core/src/components/slides/readme.md
      this.slider = this.howWeDoEl.querySelector("ion-slides");

      // Get the pagination bullets and convert them to an array
      // https://davidwalsh.name/nodelist-array
      const bullets = [].slice.call(
        this.howWeDoEl.querySelectorAll(".swiper-pagination-bullet")
      );

      // Loop through element array and add click event listener
      bullets.map((bullet, index) => {
        bullet.addEventListener("click", () => {
          // Slide to clicked bullet's index
          this.slider.slideTo(index);
        });
      });
    }, 100);
  }

  render() {
    return (
      <div>
        <h2>HOW WE DO</h2>
        <ion-grid>
          <ion-row>
            <ion-col size="12" sizeLg="8">
              <div id="how-we-do">
                <ion-slides pager={true} options={this.sliderOptions}>
                  <ion-slide color="primary">
                    <div class="align-left-slide slide-padding">
                      <h3>Design</h3>
                      <h4>1. Unpacking</h4>
                      <p>
                        Meetings with the client to discuss project technology,
                        vision, and scope of work.
                      </p>
                      <h4>2. Research & Discovery</h4>
                      <p>
                        Using meeting notes, references (websites, photos,
                        etc.), and interactions with the stakeholder, a designer
                        will start to get an idea of what they’re designing to
                        build.
                      </p>
                      <h4>3. Whiteboarding / Wireframing</h4>
                      <p>
                        A designer will go through previous notes from the
                        unpacking to start playing with the user experience or
                        feel of the application on a whiteboard and in Adobe XD.
                        Again, the team goes to the feedback loop.
                      </p>
                      <h4>4. Prototyping</h4>
                      <p>
                        A designer will go through the previous feedback to
                        start playing with the user interface or look of the
                        application on an interactive prototype using Adobe XD.
                      </p>
                      <p>
                        The team and the stakeholder should be expecting to
                        share their opinions on how the application should look.
                      </p>
                      <p>
                        The team and the stakeholder now get to put in their two
                        cents in on how the application should feel.
                      </p>
                    </div>
                  </ion-slide>
                  <ion-slide>
                    <div class="align-left-slide slide-padding">
                      <h3>Plan</h3>
                      <h4>1. Component Breakdown</h4>
                      <p>
                        Taking the prototype and breaking out all of the visual
                        elements into their own components and creating issues
                        on our project management tool, GitHub, for each one.
                      </p>
                      <h4>2. Issue Sizing</h4>
                      <p>
                        Technical research and discovery to estimate the
                        complexity and size of each component or issue.
                      </p>
                      <h4>3. Prioritization</h4>
                      <p>
                        Listing issues in order of what is most important to the
                        product or MVP, Minimum Viable Product.
                      </p>
                      <h4>4. Estimation</h4>
                      <p>
                        We should have enough information on each issue to make
                        an estimation of total hours required and how much it
                        will cost.
                      </p>
                    </div>
                  </ion-slide>
                  <ion-slide>
                    <div class="align-left-slide slide-padding">
                      <h3>Develop</h3>
                      <h4>1. Build</h4>
                      <p>
                        Developers will pull issues from the board and start to
                        build the components.
                      </p>
                      <h4>2. Test</h4>
                      <p>
                        Developers and internal team will test components
                        locally and on a test server.
                      </p>
                      <h4>3. Deploy</h4>
                      <p>
                        Developers will deploy code to a test server, which
                        mirrors the live application.
                      </p>
                    </div>
                  </ion-slide>
                  <ion-slide>
                    <div class="align-left-slide slide-padding">
                      <h3>Release</h3>
                      <h4>1. Approval</h4>
                      <p>
                        Final check from all parties that the project is
                        complete and ready to release.
                      </p>
                      <h4>2. Launch Plan</h4>
                      <p>
                        Work to determine when release will go live and any
                        marketing strategies.
                      </p>
                      <h4>3. Ship</h4>
                      <p>Release is deployed to the live server.</p>
                      <h4>4. Retrospective</h4>
                      <p>
                        All parties reflect on the project and document what
                        went well, what didn’t go well, and what they learned.
                      </p>
                    </div>
                  </ion-slide>
                </ion-slides>
              </div>
            </ion-col>
            <ion-col size="12" sizeLg="4">
              <ml-process-wheel currentIndex={this.currentSlide} />
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    );
  }
}
