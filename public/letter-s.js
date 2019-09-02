import { html, render } from "https://unpkg.com/lit-html?module";

const htmlTemplate = () => html`
  <style>
    .letter {
      position: relative;
      width: 1em;
      height: 1.3em;
    }
    .letter span {
      position: absolute;
      opacity: 0;
      top: 0;
      left: 0;
      animation-name: swiss;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      -webkit-animation: swiss 4s ease infinite alternate;
    }
    .letter::before {
      position: absolute;
      content: "👨🏼‍💻";
      top: 0.1em;
      left: -0.2em;
      opacity: 0;
      animation-name: swissbefore;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      -webkit-animation: swissbefore 4s ease infinite alternate;
    }
    .letter::after {
      position: absolute;
      content: "🇨🇭";
      top: 0.1em;
      left: -0.2em;
      opacity: 0;
      animation-name: swissafter;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      -webkit-animation: swissafter 4s ease infinite alternate;
    }

    @keyframes swiss {
      10% {
        opacity: 0;
      }
      25% {
        opacity: 1;
        color: red;
      }
      50% {
        color: green;
        text-shadow: 0 0 0.5em yellow;
      }
      75% {
        color: blue;
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
    }

    @keyframes swissbefore {
      0% {
        opacity: 1;
      }
      25% {
        opacity: 0;
      }
    }

    @keyframes swissafter {
      75% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  </style>
  <span class="letter">
    <span>S</span>
  </span>
`;

class LetterS extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-s", LetterS);
