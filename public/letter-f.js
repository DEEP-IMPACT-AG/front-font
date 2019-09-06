import { html, render } from "https://unpkg.com/lit-html@1.1.2?module";

const htmlTemplate = () => html`
  <style>
    .letter-cursor {
      text-align: center;
    }

    .letter {
      overflow: hidden;
      font-family: Courier;
      width: 0%;
      display: inline-block;
      animation: show 4s linear forwards infinite, blink 1s step-end infinite;
      border-right: 4px solid limegreen;
      line-height: 0.8;
    }

    @keyframes blink {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: limegreen;
      }
    }

    @keyframes show {
      0%,
      49% {
        width: 0%;
        color: transparent;
      }
      50%,
      100% {
        width: 100%;
        color: #ffc107;
      }
    }
  </style>
  <div class="letter-cursor">
    <span class="letter">F</span>
  </div>
`;

class LetterF extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-f", LetterF);
