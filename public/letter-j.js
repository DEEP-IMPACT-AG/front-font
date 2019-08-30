import { html, render } from "https://unpkg.com/lit-html?module";

const htmlTemplate = () => html`
  <style>
    .letter {
      font-weight: 600;
      text-decoration: underline;
      transform: rotate(180deg);
      color: teal;
    }
  </style>
  <span class="letter">
    J
  </span>
`;

class LetterJ extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-j", LetterJ);
