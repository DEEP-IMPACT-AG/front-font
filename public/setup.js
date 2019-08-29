const texts = [
  "The quick brown fox jumps over the lazy dog",
  "Pack my box with five dozen liquor jugs",
  "How vexingly quick daft zebras jump",
];

const title = "FRONT FONT STYLEGUIDE";

const actualLetter = (l) => {
  if (l === " ") return "space";
  if (l === "-") return "dash";
  return l;
};

const drawLetter = ({ letter, className, rootElementId }) => {
  const rootEl = document.getElementById(rootElementId);
  if (rootEl) {
    const letterElement = document.createElement(
      `letter-${actualLetter(letter)}`,
    );
    letterElement.classList.add("letter-element");
    const containerDiv = document.createElement("div");
    containerDiv.classList.add(className);
    containerDiv.appendChild(letterElement);
    rootEl.appendChild(containerDiv);
  }
};

title
  .toUpperCase()
  .split("")
  .forEach((letter) => {
    drawLetter({
      letter,
      className: "h2-wrapper",
      rootElementId: "textContainer-h2-title",
    });
  });

texts.forEach((text, index) => {
  text
    .toUpperCase()
    .split("")
    .forEach((letter) => {
      drawLetter({
        letter,
        className: "h2-wrapper",
        rootElementId: `textContainer-h2-${index}`,
      });
    });

  text
    .toUpperCase()
    .split("")
    .forEach((letter) => {
      drawLetter({
        letter,
        className: "h3-wrapper",
        rootElementId: `textContainer-h3-${index}`,
      });
    });

  text
    .toUpperCase()
    .split("")
    .forEach((letter) => {
      drawLetter({
        letter,
        className: "h4-wrapper",
        rootElementId: `textContainer-h4-${index}`,
      });
    });

  text
    .toUpperCase()
    .split("")
    .forEach((letter) => {
      drawLetter({
        letter,
        className: "h5-wrapper",
        rootElementId: `textContainer-h5-${index}`,
      });
    });

  text
    .toUpperCase()
    .split("")
    .forEach((letter) => {
      drawLetter({
        letter,
        className: "h6-wrapper",
        rootElementId: `textContainer-h6-${index}`,
      });
    });
});
