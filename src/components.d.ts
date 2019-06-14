/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  APIService,
} from './services/api';
import {
  AuthService,
} from './services/auth';
import {
  DatabaseService,
} from './services/database';
import {
  UserService,
} from './services/user';

export namespace Components {
  interface AppRoot {}
  interface MlApps {}
  interface MlContact {
    'api': APIService;
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
  interface MlHome {
    'auth': AuthService;
    'db': DatabaseService;
    'session': any;
  }
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
  interface MlVideos {}
}

declare global {


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

  interface HTMLMlContactElement extends Components.MlContact, HTMLStencilElement {}
  var HTMLMlContactElement: {
    prototype: HTMLMlContactElement;
    new (): HTMLMlContactElement;
  };

  interface HTMLMlFormElement extends Components.MlForm, HTMLStencilElement {}
  var HTMLMlFormElement: {
    prototype: HTMLMlFormElement;
    new (): HTMLMlFormElement;
  };

  interface HTMLMlHomeElement extends Components.MlHome, HTMLStencilElement {}
  var HTMLMlHomeElement: {
    prototype: HTMLMlHomeElement;
    new (): HTMLMlHomeElement;
  };

  interface HTMLMlInputElement extends Components.MlInput, HTMLStencilElement {}
  var HTMLMlInputElement: {
    prototype: HTMLMlInputElement;
    new (): HTMLMlInputElement;
  };

  interface HTMLMlVideosElement extends Components.MlVideos, HTMLStencilElement {}
  var HTMLMlVideosElement: {
    prototype: HTMLMlVideosElement;
    new (): HTMLMlVideosElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'ml-apps': HTMLMlAppsElement;
    'ml-contact': HTMLMlContactElement;
    'ml-form': HTMLMlFormElement;
    'ml-home': HTMLMlHomeElement;
    'ml-input': HTMLMlInputElement;
    'ml-videos': HTMLMlVideosElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface MlApps extends JSXBase.HTMLAttributes<HTMLMlAppsElement> {}
  interface MlContact extends JSXBase.HTMLAttributes<HTMLMlContactElement> {
    'api'?: APIService;
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
  interface MlHome extends JSXBase.HTMLAttributes<HTMLMlHomeElement> {
    'auth'?: AuthService;
    'db'?: DatabaseService;
    'session'?: any;
  }
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
  interface MlVideos extends JSXBase.HTMLAttributes<HTMLMlVideosElement> {}

  interface IntrinsicElements {
    'app-root': AppRoot;
    'ml-apps': MlApps;
    'ml-contact': MlContact;
    'ml-form': MlForm;
    'ml-home': MlHome;
    'ml-input': MlInput;
    'ml-videos': MlVideos;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


