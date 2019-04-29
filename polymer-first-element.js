import { css, html, LitElement } from 'lit-element';

/**
 * `polymer-first-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolymerFirstElement extends LitElement {
  static get styles() {
    return [
      css`
      :host {
        display: block;
      }
      h2 {
        color: red;
      }
      `
    ];
  }
  render() {
    return html`
      <h2>Hello ${this.prop1}</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String
      }
    };
  }
  constructor() {
    super();
    this.prop1 = "polymer-first-element";
  }
}

window.customElements.define('polymer-first-element', PolymerFirstElement);
