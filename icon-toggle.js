import '@polymer/iron-icon';
import '@polymer/iron-icons';
import { css, html, LitElement } from 'lit-element';


/**
 */
class IconToggle extends LitElement {
  static get styles() {
    return [
      css`
      :host {
        display: inline-block;
      }
      iron-icon {
        fill: var(--icon-toggle-color, rgba(0,0,0,0));
        stroke: var(--icon-toggle-outline-color, currentcolor);
      }
      :host([pressed]) iron-icon {
        fill: var(--icon-toggle-pressed-color, currentcolor);
      }
      `
    ];
  }
  render() {
    return html`
      <iron-icon icon="${this.icon}" @click="${this.toggle}"></iron-icon>
    `;
  }
  static get properties() {
    return {
      icon: {
        type: String
      },
      pressed: {
        type: Boolean,
        reflect: true
      }
    };
  }
  toggle(e) {
    this.pressed = !this.pressed;
  }
  constructor() {
    super();
    this.icon = "polymer";
    this.pressed = false;
  }
}

window.customElements.define('icon-toggle', IconToggle);
