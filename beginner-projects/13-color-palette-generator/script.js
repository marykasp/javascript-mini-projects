const button = document.querySelector("#generate-btn");
const header = document.querySelector(".header");
console.log(header);

// Functions to get Hue from hex code
const hexToRgb = (color) => {
  let hex = color[0] === "#" ? color.slice(1) : color;
  let c;

  // expand the short hex by doubling each character, fc0 -> ffcc00
  if (hex.length !== 6) {
    hex = (() => {
      const result = [];
      for (c of Array.from(hex)) {
        result.push(`${c}${c}`);
      }
      return result;
    })().join("");
  }
  const colorStr = hex.match(/#?(.{2})(.{2})(.{2})/).slice(1);
  const rgb = colorStr.map((col) => parseInt(col, 16));
  rgb.push(1);
  return rgb;
};

function hslToHex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

const extractHue = (rgb) => {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;
  const add = max + min;

  const hue =
    min === max
      ? 0
      : r === max
      ? ((60 * (g - b)) / diff + 360) % 360
      : g === max
      ? (60 * (b - r)) / diff + 120
      : (60 * (r - g)) / diff + 240;

  const lum = 0.5 * add;

  const sat =
    lum === 0 ? 0 : lum === 1 ? 1 : lum <= 0.5 ? diff / add : diff / (2 - add);

  const h = Math.round(hue);
  const s = Math.round(sat * 100);
  const l = Math.round(lum * 100);
  const a = rgb[3] || 1;

  return [h, s, l, a];
};

// generate color palettes
const generateColorPalette = (baseColor) => {
  let rgb = hexToRgb(baseColor);
  let hsla = extractHue(rgb);
  console.log(`hsla: ${hsla}`);

  const saturation = hsla[1];
  const hue = hsla[0];

  const colorArray = [0, 10, 20, 30, 40, 50, 60, 70, 80].map((lightness) => {
    return {
      hsl: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
      hexCode: hslToHex(hue, saturation, lightness),
    };
  });
  return colorArray;
};

const changeBackground = (e) => {
  e.stopPropagation();
  const color = e.currentTarget.style.backgroundColor;
  document.body.style.backgroundColor = color;
};

const copyCode = (e) => {
  // console.log(e.target.innerHTML);
  let input = document.createElement("input");
  input.type = "text";
  if (e.target.innerHTML.includes("#")) {
    let text = e.target.innerHTML;
    let hex = text;

    input.value = hex;
    // append to body
    document.body.appendChild(input);
    input.select();

    document.execCommand("copy");
    document.body.removeChild(input);
    alert(`Color ${hex} copied`);
  }
};

// use library to generate color name from hex code
const generateColorName = (hex) => {
  var ntcMatch = ntc.name(hex);
  return ntcMatch[1];
};

const generatePalette = () => {
  const baseColorInput = document.querySelector("#base-color");

  const colorPaletteContainer = document.querySelector(".color-palette");
  const baseColor = baseColorInput.value;
  console.log(baseColor);

  // change background color on generating a color
  document.body.style.backgroundColor = baseColor;
  // change button color
  button.style.backgroundColor = baseColor;
  // change header of color palette
  header.style.backgroundColor = baseColor;
  // get the color name from the hex code
  let colorName = generateColorName(baseColor);
  header.innerHTML = colorName;

  // clear previous palette
  colorPaletteContainer.innerHTML = "";
  // generate array of colors
  const palette = generateColorPalette(baseColor);
  console.log(palette);

  const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  palette.reverse().forEach((color, index) => {
    console.log(color.hsl);
    const colorBox = document.createElement("div");
    colorBox.className = "item";
    colorBox.dataset.id = `${levels[index]}`;
    colorBox.style.backgroundColor = color.hsl;

    colorBox.innerHTML = `<p>${levels[index]}</p><p>${color.hexCode}</p>`;
    const colorBoxChildren = colorBox.querySelectorAll("p");
    // console.log(colorBoxChildren);
    colorBoxChildren.forEach((child) => {
      child.addEventListener("click", (e) => {
        e.stopPropagation();
        copyCode(e);
      });
    });

    const hslColor = color.hsl;
    colorBox.addEventListener("click", changeBackground);

    colorPaletteContainer.appendChild(colorBox);
  });
};

window.addEventListener("load", generatePalette);

button.addEventListener("click", generatePalette);
