import { html, render } from "https://unpkg.com/lit-html@1.1.2?module";

const htmlTemplate = () => html`
  <style>
    @keyframes moveBefore {
      0% {
        transform: rotate(0);
        opacity: 0;
      }
      100% {
        transform: rotate(90deg);
        opacity: 1;
      }
    }

    @keyframes moveAfter {
      0% {
        transform: rotate(0);
        opacity: 0;
      }
      100% {
        transform: rotate(90deg);
        opacity: 1;
      }
    }

    .letter {
      position: relative;
      width: 25px;
      height: 3px;
    }
    .letter::before {
      content: "";
      position: absolute;
      width: 4rem;
      height: 0.3rem;
      background-color: red;
      top: 0;
      left: 0.3rem;
      animation: moveBefore 1s ease infinite alternate;
    }
    .letter::after {
      content: "";
      position: absolute;
      width: 4rem;
      height: 0.3rem;
      background-color: red;
      top: 0;
      animation: moveAfter 1s ease infinite alternate;
      left: -2rem;
    }
    .dash {
      width: 4.5rem;
      height: 0.3rem;
      background-color: red;
      position: absolute;
      top: 0;
      left: -1.1rem;
      transform: rotate(60deg);
    }
  </style>
  <span class="letter">
    <span class="dash"></span>
  </span>
`;

class LetterN extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-n", LetterN);
