/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  DatabaseService,
} from './services/database';
import {
  Color,
} from '@ionic/core';
import {
  UserService,
} from './services/user';

export namespace Components {
  interface AppAbout {
    'db': DatabaseService;
  }
  interface AppApps {}
  interface AppCommunity {}
  interface AppHome {}
  interface AppMedia {}
  interface AppRoot {}
  interface MlApps {
    'apps': any;
  }
  interface MlDivider {}
  interface MlFloatingButton {
    /**
    * The list of buttons to show when the material button is clicked
    */
    'buttonList': {
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
    }[];
    /**
    * The icon to use on the material button when it's closed
    */
    'openIcon': string;
    /**
    * The url to link the material button to
    */
    'url': string;
  }
  interface MlForm {
    /**
    * The data from the form being filled out
    */
    'formData': any;
    /**
    * The name of the form used for ID and name
    */
    'name': string;
    /**
    * Adds a padding around the inside of the form
    */
    'padding': boolean;
  }
  interface MlHowWeDo {}
  interface MlInput {
    'actionOptions': any;
    'autocapitalize': string;
    'autocomplete': "on" | "off";
    'autocorrect': "on" | "off";
    'autofocus': boolean;
    'disabled': boolean;
    'edit': boolean;
    'iconLeft': string;
    'iconRight': string;
    'info': string;
    'infoShow': boolean;
    'label': string;
    'max': string;
    'maxlength': number;
    'min': string;
    'minlength': number;
    'name': string;
    'placeholder': any;
    'required': any;
    'setFocus': () => Promise<void>;
    'silence': boolean;
    'step': string;
    'type': any;
    'user': UserService;
    'value': any;
  }
  interface MlLatestPost {
    'description': string;
    'image': string;
    'title': string;
  }
  interface MlNavigation {
    'expanded': boolean;
    /**
    * A list of links to put in the navigation
    */
    'links': { label: string; url: string; icon: string; }[];
  }
  interface MlProcessWheel {
    /**
    * The index of the pie piece that should have the active class
    */
    'currentIndex': number;
  }
  interface MlVideos {}
}

declare global {


  interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {}
  var HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };

  interface HTMLAppAppsElement extends Components.AppApps, HTMLStencilElement {}
  var HTMLAppAppsElement: {
    prototype: HTMLAppAppsElement;
    new (): HTMLAppAppsElement;
  };

  interface HTMLAppCommunityElement extends Components.AppCommunity, HTMLStencilElement {}
  var HTMLAppCommunityElement: {
    prototype: HTMLAppCommunityElement;
    new (): HTMLAppCommunityElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppMediaElement extends Components.AppMedia, HTMLStencilElement {}
  var HTMLAppMediaElement: {
    prototype: HTMLAppMediaElement;
    new (): HTMLAppMediaElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLMlAppsElement extends Components.MlApps, HTMLStencilElement {}
  var HTMLMlAppsElement: {
    prototype: HTMLMlAppsElement;
    new (): HTMLMlAppsElement;
  };

  interface HTMLMlDividerElement extends Components.MlDivider, HTMLStencilElement {}
  var HTMLMlDividerElement: {
    prototype: HTMLMlDividerElement;
    new (): HTMLMlDividerElement;
  };

  interface HTMLMlFloatingButtonElement extends Components.MlFloatingButton, HTMLStencilElement {}
  var HTMLMlFloatingButtonElement: {
    prototype: HTMLMlFloatingButtonElement;
    new (): HTMLMlFloatingButtonElement;
  };

  interface HTMLMlFormElement extends Components.MlForm, HTMLStencilElement {}
  var HTMLMlFormElement: {
    prototype: HTMLMlFormElement;
    new (): HTMLMlFormElement;
  };

  interface HTMLMlHowWeDoElement extends Components.MlHowWeDo, HTMLStencilElement {}
  var HTMLMlHowWeDoElement: {
    prototype: HTMLMlHowWeDoElement;
    new (): HTMLMlHowWeDoElement;
  };

  interface HTMLMlInputElement extends Components.MlInput, HTMLStencilElement {}
  var HTMLMlInputElement: {
    prototype: HTMLMlInputElement;
    new (): HTMLMlInputElement;
  };

  interface HTMLMlLatestPostElement extends Components.MlLatestPost, HTMLStencilElement {}
  var HTMLMlLatestPostElement: {
    prototype: HTMLMlLatestPostElement;
    new (): HTMLMlLatestPostElement;
  };

  interface HTMLMlNavigationElement extends Components.MlNavigation, HTMLStencilElement {}
  var HTMLMlNavigationElement: {
    prototype: HTMLMlNavigationElement;
    new (): HTMLMlNavigationElement;
  };

  interface HTMLMlProcessWheelElement extends Components.MlProcessWheel, HTMLStencilElement {}
  var HTMLMlProcessWheelElement: {
    prototype: HTMLMlProcessWheelElement;
    new (): HTMLMlProcessWheelElement;
  };

  interface HTMLMlVideosElement extends Components.MlVideos, HTMLStencilElement {}
  var HTMLMlVideosElement: {
    prototype: HTMLMlVideosElement;
    new (): HTMLMlVideosElement;
  };
  interface HTMLElementTagNameMap {
    'app-about': HTMLAppAboutElement;
    'app-apps': HTMLAppAppsElement;
    'app-community': HTMLAppCommunityElement;
    'app-home': HTMLAppHomeElement;
    'app-media': HTMLAppMediaElement;
    'app-root': HTMLAppRootElement;
    'ml-apps': HTMLMlAppsElement;
    'ml-divider': HTMLMlDividerElement;
    'ml-floating-button': HTMLMlFloatingButtonElement;
    'ml-form': HTMLMlFormElement;
    'ml-how-we-do': HTMLMlHowWeDoElement;
    'ml-input': HTMLMlInputElement;
    'ml-latest-post': HTMLMlLatestPostElement;
    'ml-navigation': HTMLMlNavigationElement;
    'ml-process-wheel': HTMLMlProcessWheelElement;
    'ml-videos': HTMLMlVideosElement;
  }
}

declare namespace LocalJSX {
  interface AppAbout extends JSXBase.HTMLAttributes<HTMLAppAboutElement> {
    'db'?: DatabaseService;
  }
  interface AppApps extends JSXBase.HTMLAttributes<HTMLAppAppsElement> {}
  interface AppCommunity extends JSXBase.HTMLAttributes<HTMLAppCommunityElement> {}
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {}
  interface AppMedia extends JSXBase.HTMLAttributes<HTMLAppMediaElement> {}
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface MlApps extends JSXBase.HTMLAttributes<HTMLMlAppsElement> {
    'apps'?: any;
  }
  interface MlDivider extends JSXBase.HTMLAttributes<HTMLMlDividerElement> {}
  interface MlFloatingButton extends JSXBase.HTMLAttributes<HTMLMlFloatingButtonElement> {
    /**
    * The list of buttons to show when the material button is clicked
    */
    'buttonList'?: {
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
    }[];
    /**
    * The icon to use on the material button when it's closed
    */
    'openIcon'?: string;
    /**
    * The url to link the material button to
    */
    'url'?: string;
  }
  interface MlForm extends JSXBase.HTMLAttributes<HTMLMlFormElement> {
    /**
    * The data from the form being filled out
    */
    'formData'?: any;
    /**
    * The name of the form used for ID and name
    */
    'name'?: string;
    /**
    * Emitted when the user submits the form
    */
    'onMlSubmit'?: (event: CustomEvent<{ event; data: any; name: string }>) => void;
    /**
    * Adds a padding around the inside of the form
    */
    'padding'?: boolean;
  }
  interface MlHowWeDo extends JSXBase.HTMLAttributes<HTMLMlHowWeDoElement> {}
  interface MlInput extends JSXBase.HTMLAttributes<HTMLMlInputElement> {
    'actionOptions'?: any;
    'autocapitalize'?: string;
    'autocomplete'?: "on" | "off";
    'autocorrect'?: "on" | "off";
    'autofocus'?: boolean;
    'disabled'?: boolean;
    'edit'?: boolean;
    'iconLeft'?: string;
    'iconRight'?: string;
    'info'?: string;
    'infoShow'?: boolean;
    'label'?: string;
    'max'?: string;
    'maxlength'?: number;
    'min'?: string;
    'minlength'?: number;
    'name'?: string;
    'onMlBlur'?: (event: CustomEvent<any>) => void;
    'onMlChange'?: (event: CustomEvent<any>) => void;
    'onMlFocus'?: (event: CustomEvent<any>) => void;
    'onMlInput'?: (event: CustomEvent<any>) => void;
    'placeholder'?: any;
    'required'?: any;
    'silence'?: boolean;
    'step'?: string;
    'type'?: any;
    'user'?: UserService;
    'value'?: any;
  }
  interface MlLatestPost extends JSXBase.HTMLAttributes<HTMLMlLatestPostElement> {
    'description'?: string;
    'image'?: string;
    'title'?: string;
  }
  interface MlNavigation extends JSXBase.HTMLAttributes<HTMLMlNavigationElement> {
    'expanded'?: boolean;
    /**
    * A list of links to put in the navigation
    */
    'links'?: { label: string; url: string; icon: string; }[];
  }
  interface MlProcessWheel extends JSXBase.HTMLAttributes<HTMLMlProcessWheelElement> {
    /**
    * The index of the pie piece that should have the active class
    */
    'currentIndex'?: number;
    /**
    * Fired when a section of the wheel is clicked and should pass the following {    index: number; }
    */
    'onMadWheelClick'?: (event: CustomEvent<any>) => void;
  }
  interface MlVideos extends JSXBase.HTMLAttributes<HTMLMlVideosElement> {}

  interface IntrinsicElements {
    'app-about': AppAbout;
    'app-apps': AppApps;
    'app-community': AppCommunity;
    'app-home': AppHome;
    'app-media': AppMedia;
    'app-root': AppRoot;
    'ml-apps': MlApps;
    'ml-divider': MlDivider;
    'ml-floating-button': MlFloatingButton;
    'ml-form': MlForm;
    'ml-how-we-do': MlHowWeDo;
    'ml-input': MlInput;
    'ml-latest-post': MlLatestPost;
    'ml-navigation': MlNavigation;
    'ml-process-wheel': MlProcessWheel;
    'ml-videos': MlVideos;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


