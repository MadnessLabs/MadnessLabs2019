import { Component, Listen, Prop, h } from "@stencil/core";

import { DatabaseService } from "../../services/database";

@Component({
  tag: "app-about",
  styleUrl: "app-about.css"
})
export class AppAbout {
  @Prop() db: DatabaseService;

  @Listen("mlSubmit")
  contactUs(event) {
    if (!event || !event.detail || !event.detail.data) {
      return false;
    }

    this.db.add("contact", event.detail.data);
  }

  render() {
    return (
      <div class="page-wrapper">
        <h2>WHAT WE DO</h2>
        <p>
          Madness Labs is a software engineering company from St. Louis,
          Missouri aimed to make apps with heart. Whether you are looking for a
          customer rewards app, a management tool for your business, or have an
          idea for the next big start-up; we will help you align your vision
          with cutting-edge, standard-compliant, technology to create magic on
          the screen, big or small. Our intense focus on the user experience
          (UX) and simplicity in our designs make our apps as easy on your eyes
          as they are to use.
        </p>
        <ml-divider />
        <h2>WHY WE DO</h2>
        <p>
          We do this in dreams of making the world a better place by developing
          applications that make a real impact on peoples’ lives. Madness Labs
          also aims to empower others to do the same by teaching design,
          development, and our general philosophy. It’s an ambitious goal, we
          can’t do it alone, and some might call it madness…we agree!
        </p>
        <ml-divider />
        <ml-how-we-do />
        <ml-form>
          <ml-input
            id="email-field"
            name="email"
            type="email"
            label="Email Address"
            placeholder="Where can we get back to you?"
            required
          />
        </ml-form>
      </div>
    );
  }
}
