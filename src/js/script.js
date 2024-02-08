const columns = document.querySelectorAll(".column");

function generateRandomColor() {
  const hexCodes = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }

  return color;
}

document.addEventListener("keydown", handleSpace);

function handleSpace(event) {
    event.preventDefault();
  if (event.code.toLowerCase() === "space") {
    setRandomColors();
  }
}

document.addEventListener("keydown", handleEnter);

function handleEnter(event) {
  if (event.code.toLowerCase() === "enter") {
    clearInterval(colorChanging);
  }
}

document.addEventListener("click", (event) => {
  const type = event.target.dataset.type;

  if (type === "lock") {
    const node =
      event.target.tagName.toLowerCase() === "i"
        ? event.target
        : event.target.children[0];

    node.classList.toggle("fa-lock-open");
    node.classList.toggle("fa-lock");
  }



});

const colorChanging = setInterval(() => setRandomColors(), 900);

function setRandomColors() {
  columns.forEach((col) => {
    const text = col.querySelector("h2");
    const btn = col.querySelector("button");
    const color = chroma.random();

    text.textContent = color;
    col.style.background = color;

    setTextColors(text, color);
    setTextColors(btn, color);
  });
}

function setTextColors(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? "#4d4343" : "white";
}

setRandomColors();
