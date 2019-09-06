import { html, render } from "https://unpkg.com/lit-html@1.1.2?module";

const htmlTemplate = () => html`
  <style>
    @keyframes jump {
      0% {
        transform: translateY(0) scale(1.5);
      }
      25% {
        transform: translateY(-0.125em) rotate(45deg);
        filter: blur(0);
      }
      50% {
        transform: translateY(0) scale(0.5);
        filter: blur(30px);
      }
      75% {
        transform: translateY(0.125em) rotate(-45deg);
        filter: blur(0);
      }
      100% {
        transform: translateY(0) scale(1.5);
      }
    }
    @keyframes jumpbefore {
      0% {
        transform: translateY(0) scale(0.5);
      }
      25% {
        transform: translateY(-0.125em) rotate(-90deg);
      }
      50% {
        transform: translateY(0) scale(1.5);
      }
      75% {
        transform: translateY(0.125em) rotate(135deg);
      }
      100% {
        transform: translateY(0) scale(0.5);
      }
    }
    @keyframes jumpafter {
      0% {
        transform: translateY(0) scale(1.5);
      }
      25% {
        transform: translateY(-0.125em) rotate(270deg);
      }
      50% {
        transform: translateY(0) scale(0.5);
      }
      75% {
        transform: translateY(0.125em) rotate(-135deg);
      }
      100% {
        transform: translateY(0) scale(1.5);
      }
    }
    .letter {
      position: relative;
      color: rgb(255, 0, 255);
      animation: jump 5s ease-in-out infinite;
    }
    .letter::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(255, 255, 0, 0.5);
      animation: jumpbefore 2.5s ease-in-out infinite alternate;
    }
    .letter::after {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 255, 255, 0.5);
      animation: jumpafter 2.5s ease-in-out infinite alternate;
    }
  </style>
  <span class="letter">
    E
  </span>
`;

class LetterE extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-e", LetterE);
