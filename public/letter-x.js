import { html, render } from "https://unpkg.com/lit-html?module";

const htmlTemplate = () => html`
  <style>
    .letter {
      animation: rotateX 2s cubic-bezier(1, 0, 0.58, 1) infinite;
      background-image: linear-gradient(90deg, red, yellow, red);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    @keyframes rotateX {
      0% {
        transform: rotate(0deg) scale(0,0);
      }
      50% {
        transform: rotate(65deg) scale(0.9,0.8);
      }
      100% {
        transform: rotate(0deg) scale(0,0);
      }
    }
  </style>
  <span class="letter">
    X
  </span>
`;

class LetterX extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-x", LetterX);
