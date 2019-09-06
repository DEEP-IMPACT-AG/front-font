import { html, render } from "https://unpkg.com/lit-html@1.1.2?module";

const htmlTemplate = () => html`
  <style>
    @keyframes a {
      to {
        filter: blur(1rem) hue-rotate(-120deg);
        transform: rotateY(180deg) rotateZ(14deg) rotateX(20deg) scale(0.45);
      }
    }

    @keyframes b {
      to {
        transform: rotateY(90deg);
        filter: hue-rotate(90deg);
        background-color: hsl(70, 50%, 60%);
      }
    }

    @keyframes c {
      to {
        transform: rotateY(90deg) rotateX(17deg) scale(2);
      }
    }

    .letter,
    .letter::before,
    .letter::after {
      box-sizing: border-box;
      mix-blend-mode: multiply;
    }

    .letter {
      position: relative;
      animation: ease-out a 1.2s infinite alternate-reverse;
    }

    .letter::before,
    .letter::after {
      position: absolute;
      content: "M";
    }

    .letter::before {
      color: hsla(120, 50%, 50%, 0.4);
      animation: ease-out b 1200ms infinite forwards;
    }

    .letter::after {
      overflow: hidden;
      border-radius: 50%;
      color: hsla(320, 50%, 50%, 0.8);
      animation: ease-out c 1800ms infinite alternate-reverse;
      -webkit-backdrop-filter: blur(1rem);
    }
  </style>
  <span class="letter">
    M
  </span>
`;

class LetterM extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-m", LetterM);
