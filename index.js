let input = document.getElementById("input");
let mainTxt = document.getElementById("txt");
let startBtn = document.getElementById("start");
let removeTxt = document.querySelectorAll(".container .view .remove");
let copybtn = document.querySelector(".container .view .btn .copy");

startBtn.addEventListener("click", () => {
  if (input.value && input.value != "") {
    mainTxt.innerText = `${input.value}`;
    removeTxt[0].style.display = "none";
    removeTxt[1].style.display = "none";
    mainTxt.style.color = "#fff";
  }
});

input.addEventListener("keydown", (event) => {
  if (input.value && input.value != "") {
    if (event.key === "Enter") {
      mainTxt.innerText = `${input.value}`;
      removeTxt[0].style.display = "none";
      removeTxt[1].style.display = "none";
      mainTxt.style.color = "#fff";
    }
  }
});

// closure and style perpuse

//for font size

const fontSize = (value) => {
  let size = `${value}px`;
  const setSize = () => {
    if (input.value && input.value != "") {
      mainTxt.style.fontSize = `${size}`;
      console.log(size);
    }
  };
  return setSize;
};
let adjustSize_11 = fontSize(11);
let adjustSize_12 = fontSize(12);
let adjustSize_14 = fontSize(14);
let adjustSize_16 = fontSize(16);
let adjustSize_18 = fontSize(18);
let adjustSize_20 = fontSize(20);
let adjustSize_22 = fontSize(22);
let adjustSize_24 = fontSize(24);
let adjustSize_28 = fontSize(28);
let adjustSize_34 = fontSize(34);
let adjustSize_38 = fontSize(38);
let adjustSize_46 = fontSize(46);
let adjustSize_56 = fontSize(56);
let adjustSize_68 = fontSize(68);
let adjustSize_72 = fontSize(72);
let adjustSize_100 = fontSize(100);

// for font family

const fontStyle = (value) => {
  let style = `${value}`;
  const setStyle = () => {
    if (input.value && input.value != "") {
      mainTxt.style.fontFamily = `${style}`;
      console.log(style);
    }
  };
  return setStyle;
};
let adjustStyle_poppins = fontStyle("Poppins");
let adjustStyle_nunito = fontStyle("Nunito");
let adjustStyle_cursive = fontStyle("Cursive");
let adjustStyle_arial = fontStyle("Arial");
let adjustStyle_impact = fontStyle("Impact");
let adjustStyle_gillsans = fontStyle("Gill Sans");
let adjustStyle_frankiln = fontStyle("Franklin Gothic Medium");
let adjustStyle_curier = fontStyle("Courier New");
let adjustStyle_comberia = fontStyle("Cambria");
let adjustStyle_goergia = fontStyle("Georgia");

// for color

const fontColor = (value) => {
  let color = `${value}`;
  const setColor = () => {
    if (input.value && input.value != "") {
      mainTxt.style.color = `${color}`;
      console.log(color);
    }
  };
  return setColor;
};
let adjustColor_green = fontColor("green");
let adjustColor_yellow = fontColor("yellow");
let adjustColor_blue = fontColor("blue");
let adjustColor_pink = fontColor("pink");
let adjustColor_purple = fontColor("purple");
let adjustColor_slategrey = fontColor("slategray");
let adjustColor_slateblue = fontColor("slateblue");
let adjustColor_black = fontColor("black");
let adjustColor_white = fontColor("white");
let adjustColor_orange = fontColor("orange");
let adjustColor_seagreen = fontColor("seagreen");
let adjustColor_aqua = fontColor("aqua");

//for font weight

const fontWeight = (value) => {
  let weight = `${value}`;
  const setWeight = () => {
    if (input.value && input.value != "") {
      mainTxt.style.fontWeight = `${weight}`;
      console.log(weight);
    }
  };
  return setWeight;
};
let adjustWeight_100 = fontWeight(100);
let adjustWeight_200 = fontWeight(200);
let adjustWeight_300 = fontWeight(300);
let adjustWeight_400 = fontWeight(400);
let adjustWeight_500 = fontWeight(500);
let adjustWeight_600 = fontWeight(600);
let adjustWeight_700 = fontWeight(700);
let adjustWeight_800 = fontWeight(800);
let adjustWeight_900 = fontWeight(900);

// for rotarte

const fontRotate = (value) => {
  let rotate = `${value}deg`;
  const setRotate = () => {
    if (input.value && input.value != "") {
      mainTxt.style.rotate = `${rotate}`;
      console.log(rotate);
    }
  };
  return setRotate;
};
let adjustrotate_0deg = fontRotate(0);
let adjustrotate_45deg = fontRotate(45);
let adjustrotate_90deg = fontRotate(90);
let adjustrotate_135deg = fontRotate(135);
let adjustrotate_180deg = fontRotate(180);
let adjustrotate_225deg = fontRotate(225);
let adjustrotate_270deg = fontRotate(270);
let adjustrotate_320deg = fontRotate(320);
let adjustrotate_360deg = fontRotate(360);

//for decoration

const fontDecorate = (value) => {
  let decorate = `${value}`;
  const setDecorate = () => {
    if (input.value && input.value != "") {
      mainTxt.style.textDecoration = `${decorate}`;
      if (decorate == "none") {
        mainTxt.style.fontStyle = `normal`;
      }
      if (decorate == "italic") {
        mainTxt.style.fontStyle = `italic`;
      }
      console.log(decorate);
    }
  };
  return setDecorate;
};

let adjustdeco_none = fontDecorate("none");
let adjustdeco_underline = fontDecorate("underline");
let adjustdeco_overline = fontDecorate("overline");
let adjustdeco_linethrough = fontDecorate("line-through");
let adjustdeco_italic = fontDecorate("italic");

const saveWork = () => {
  copybtn.style.filter = `none`;
  ToSave();
};

const ToSave = () => {
  if (copybtn && mainTxt) {
    copybtn.addEventListener("click", () => {
      navigator.clipboard.writeText(mainTxt.textContent);
    });
  } else {
    console.error("Pleas Save First");
  }
};
