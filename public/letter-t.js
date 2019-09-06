import { html, render } from "https://unpkg.com/lit-html@1.1.2?module";

const htmlTemplate = () => html`
  <style>
    @keyframes morph-horizontal-bar {
      0% {
        clip-path: polygon(50% 20%, 50% 20%, 50% 0, 50% 0);
      } /* centered top */
      15% {
        clip-path: polygon(50% 20%, 50% 20%, 50% 0, 50% 0);
      } /* centered top */
      30% {
        clip-path: polygon(0 20%, 100% 20%, 100% 0, 0 0);
      } /* fully streched */
      70% {
        clip-path: polygon(0 20%, 100% 20%, 100% 0, 0 0);
      } /* fully streched */
      85% {
        clip-path: polygon(50% 20%, 50% 20%, 50% 0, 50% 0);
      } /* centered top */
      100% {
        clip-path: polygon(50% 20%, 50% 20%, 50% 0, 50% 0);
      } /* centered top */
    }

    @keyframes morph-vertical-bar {
      0% {
        clip-path: polygon(40% 100%, 60% 100%, 60% 100%, 40% 100%);
      } /* flat bottom */
      15% {
        clip-path: polygon(40% 0, 60% 0, 60% 100%, 40% 100%);
      } /* fully streched */
      85% {
        clip-path: polygon(40% 0, 60% 0, 60% 100%, 40% 100%);
      } /* fully streched */
      100% {
        clip-path: polygon(40% 100%, 69% 100%, 60% 100%, 40% 100%);
      } /* flat bottom */
    }

    .letter {
      position: relative;
    }

    .horizontal-bar,
    .vertical-bar {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: blue;
    }

    .horizontal-bar {
      animation: morph-horizontal-bar 2s infinite;
    }

    .vertical-bar {
      animation: morph-vertical-bar 2s infinite;
    }
  </style>
  <span class="letter">
    &nbsp;
    <span class="horizontal-bar"></span>
    <span class="vertical-bar"></span>
  </span>
`;

class LetterT extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    render(htmlTemplate(), this._shadowRoot);
  }
}

window.customElements.define("letter-t", LetterT);
