import { html, render } from "https://unpkg.com/lit-html?module";

const htmlTemplate = () => html`
  <style>
    .letter {
      color: #020202;
      background: blue;
      animation: rotate 3s linear reverse infinite;
      -ms-transform: skewY(70deg);
      -webkit-transform: skewY(70deg);
      transform: skewY(70deg);
      animation: morph-vertical-bar 2s infinite;
    }
  </style>
  <span class="letter">
    C
  </span>
`;

class LetterC extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-c", LetterC);
