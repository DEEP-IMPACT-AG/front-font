import { html, render } from "https://unpkg.com/lit-html@1.1.2?module";

const htmlTemplate = () => html`
  <style>
    .letter {
      position: relative;
      top: 0px;
      animation-name: jump;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      -webkit-animation: jump 5s ease infinite;
      color: #fff;
      text-shadow: 0 0.05em 0px rgba(255, 255, 255, 0.5);
    }

    .letter:hover {
      animation-name: flip;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      -webkit-animation: flip 0.5s ease infinite alternate;
    }

    @keyframes flip {
      100% {
        transform: scaleX(-1);
      }
    }

    @keyframes jump {
      100% {
        transform: rotate(0deg);
        top: -20px;
        text-shadow: 0 0.075em 0px rgba(255, 255, 255, 0.5);
      }
      90% {
        transform: rotate(360deg);
        top: -20px;
        text-shadow: 0 0.075em 0px rgba(255, 255, 255, 0.5);
      }
      80% {
        top: 0px;
        text-shadow: 0 0.05em 0px rgba(255, 255, 255, 0.5);
      }
      70% {
        top: -20px;
        text-shadow: 0 0.075em 0px rgba(255, 255, 255, 0.5);
      }
      60% {
        top: 0px;
        text-shadow: 0 0.05em 0px rgba(255, 255, 255, 0.5);
      }
      50% {
        transform: rotate(360deg);
        top: -20px;
        text-shadow: 0 0.075em 0px rgba(255, 255, 255, 0.5);
      }
      40% {
        transform: rotate(0deg);
        top: -20px;
        text-shadow: 0 0.075em 0px rgba(255, 255, 255, 0.5);
      }
      30% {
        top: 0px;
        text-shadow: 0 0.05em 0px rgba(255, 255, 255, 0.5);
      }
      20% {
        top: -20px;
        text-shadow: 0 0.075em 0px rgba(255, 255, 255, 0.5);
      }
      10% {
        top: 0px;
        text-shadow: 0 0.05em 0px rgba(255, 255, 255, 0.5);
      }
      0% {
        top: -20px;
        text-shadow: 0 0.075em 0px rgba(255, 255, 255, 0.5);
      }
    }
  </style>
  <span class="letter">
    A
  </span>
`;

class LetterA extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-a", LetterA);
