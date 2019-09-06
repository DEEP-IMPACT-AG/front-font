import { html, render } from "https://unpkg.com/lit-html@1.1.2?module";

const htmlTemplate = () => html`
  <style>
    .letter {
      color: rgb(255, 0, 255);
      background: white;
      font-weight: bold;
    }
  </style>
  <span class="letter">
    G
  </span>
`;

class LetterG extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-g", LetterG);
