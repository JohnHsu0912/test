import { api } from "./api.js";

const fakerApi = [
  {
    issue: "20230323-0884",
    first: ["7", "2", "3", "7", "1", "7", "7", "4", "8", "5"],
    keys: ["first", "second", "third"],
    second: ["7", "7", "6", "2", "1", "5", "7", "7", "8", "7"],
    third: ["7", "7", "7", "6", "1", "2", "3", "7", "8", "4"],
    winNumber: "888",
    renger: [0, 9],
  },
  {
    issue: "20230323-0883",
    first: ["6", "1", "2", "6", "4", "6", "6", "3", "6", "4"],
    keys: ["first", "second", "third"],
    second: ["6", "6", "5", "1", "4", "4", "6", "6", "3", "6"],
    third: ["6", "6", "6", "5", "4", "1", "2", "6", "6", "3"],
    winNumber: "444",
    renger: [0, 9],
  },
  {
    issue: "20230323-0882",
    first: ["5", "3", "1", "5", "5", "5", "5", "2", "5", "3"],
    keys: ["first", "second", "third"],
    second: ["5", "5", "4", "3", "1", "3", "5", "5", "2", "5"],
    third: ["5", "5", "5", "4", "5", "5", "1", "5", "5", "2"],
    winNumber: "135",
    renger: [0, 9],
  },
  {
    issue: "20230323-0881",
    first: ["4", "3", "3", "4", "4", "4", "4", "1", "4", "2"],
    keys: ["first", "second", "third"],
    second: ["4", "4", "3", "4", "3", "2", "4", "4", "1", "4"],
    third: ["4", "4", "4", "3", "4", "4", "6", "4", "4", "1"],
    winNumber: "246",
    renger: [0, 9],
  },
  {
    issue: "20230323-0880",
    first: ["3", "2", "3", "3", "3", "3", "3", "7", "3", "1"],
    keys: ["first", "second", "third"],
    second: ["3", "3", "2", "3", "3", "1", "3", "3", "8", "3"],
    third: ["3", "3", "3", "2", "3", "3", "1", "3", "3", "9"],
    winNumber: "789",
    renger: [0, 9],
  },
  {
    issue: "20230323-0879",
    first: ["2", "1", "2", "2", "2", "2", "2", "2", "2", "2"],
    keys: ["first", "second", "third"],
    second: ["2", "2", "1", "2", "2", "5", "2", "2", "2", "2"],
    third: ["2", "2", "2", "1", "2", "2", "6", "2", "2", "2"],
    winNumber: "956",
    renger: [0, 9],
  },
  {
    issue: "20230323-0878",
    first: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    keys: ["first", "second", "third"],
    second: ["1", "1", "2", "1", "1", "1", "1", "1", "1", "1"],
    third: ["1", "1", "1", "3", "1", "1", "1", "1", "1", "1"],
    winNumber: "123",
    renger: [0, 9],
  },
];

const fakerApi_2 = [
  {
    issue: "20230323-0882",
    first: ["5", "1", "1", "5", "5", "5", "5", "2", "5", "3"],
    keys: ["first", "second", "third", "four"],
    second: ["5", "5", "4", "5", "1", "5", "5", "5", "2", "5"],
    third: ["5", "5", "5", "4", "4", "5", "1", "5", "5", "2"],
    four: ["5", "5", "5", "3", "2", "1", "5", "4", "5", "3"],
    winNumber: "1543",
    renger: [0, 9],
  },
  {
    issue: "20230323-0881",
    first: ["4", "3", "3", "4", "4", "4", "4", "1", "4", "2"],
    keys: ["first", "second", "third", "four"],
    second: ["4", "4", "3", "4", "3", "2", "4", "4", "1", "4"],
    third: ["4", "4", "4", "3", "4", "4", "6", "4", "4", "1"],
    four: ["4", "4", "4", "4", "1", "5", "4", "3", "4", "2"],
    winNumber: "2465",
    renger: [0, 9],
  },
  {
    issue: "20230323-0880",
    first: ["3", "2", "3", "3", "3", "3", "3", "7", "3", "1"],
    keys: ["first", "second", "third", "four"],
    second: ["3", "3", "2", "3", "3", "1", "3", "3", "8", "3"],
    third: ["3", "3", "3", "2", "3", "3", "1", "3", "3", "9"],
    four: ["3", "3", "3", "3", "4", "3", "3", "2", "3", "1"],
    winNumber: "7894",
    renger: [0, 9],
  },
  {
    issue: "20230323-0879",
    first: ["2", "1", "2", "2", "2", "2", "2", "2", "2", "2"],
    keys: ["first", "second", "third", "four"],
    second: ["2", "2", "1", "2", "2", "5", "2", "2", "2", "2"],
    third: ["2", "2", "2", "1", "2", "2", "6", "2", "2", "2"],
    four: ["2", "2", "2", "2", "2", "2", "2", "1", "2", "9"],
    winNumber: "9569",
    renger: [0, 9],
  },
  {
    issue: "20230323-0878",
    first: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    keys: ["first", "second", "third", "four"],
    second: ["1", "1", "2", "1", "1", "1", "1", "1", "1", "1"],
    third: ["1", "1", "1", "3", "1", "1", "1", "1", "1", "1"],
    four: ["1", "1", "1", "1", "1", "1", "1", "7", "1", "1"],
    winNumber: "1237",
    renger: [0, 9],
  },
];

//最後形成的資料格式
let test = {
  gameCode: "xxxx",
  issue: "20230323-0878",
  first: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
  keys: ["first", "second", "third", "four"],
  second: ["1", "1", "2", "1", "1", "1", "1", "1", "1", "1"],
  third: ["1", "1", "1", "3", "1", "1", "1", "1", "1", "1"],
  four: ["1", "1", "1", "1", "1", "1", "1", "7", "1", "1"],
  winNumber: "1237",
  ranger: [1, 31],
};

//用來設置背景標註的開關
let ballsBackGroundState = [];

//先保留背景標註的初始值 用來回歸第一次

//抓取API資料塞進去
let vanillaData = [];

//是否顯示遺漏表的開關
let isMissMap = true;

//是否顯示背景標註的開關
let isBackGroundNumber = false;

//是否顯示遺漏表的開關
let isShowLine = true;

//所有顯示的期數列表 固定值
let period = [2, 4, 7];

//當前期數
let nowPeriod = 4;

//用來表示第幾球
let balls = [];

//用來設置總共球數區間
let mainRanger = [];

//球跟線的顏色
let lineColor = ["red", "green", "yellow", "purple", "blue"];

//處理所有球的開獎區間
function ballsRanger(vanillaData) {
  let renger = vanillaData[0]?.renger;
  for (let x = renger[0]; x <= renger[1]; x++) {
    mainRanger.push(x);
  }
}

//設置 ballsBackGroundState 的初始值
function setVanillaBackGroundState(ball) {
  ballsBackGroundState = []; //先清空
  for (let i = 0; i < ball.length; i++) {
    let arr = [];
    for (let x = 0; x < mainRanger.length; x++) {
      arr.push(0);
    }
    ballsBackGroundState.push(arr);
  }
}

//先抓取API然後塞進 vanillaData
async function getApi() {
  //   try {
  //     const res = await fetch(api);
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  let ball = fakerApi[0].keys;
  vanillaData = fakerApi;
  console.log("先發API抓取資料");
  for (let i = 0; i < ball.length; i++) {
    balls.push(1);
  }
  ballsRanger(vanillaData);

  // 先給備註標記的陣列 設置初始值
  setVanillaBackGroundState(ball);
}

//用來清掉所有標題的表
function clearAllTitle() {
  let titleDiv = document.querySelector(".titleDiv");
  titleDiv?.remove();
}

//用來清掉所有的表
function clearAllData() {
  let box = document.querySelectorAll(".box");
  for (let x = 0; x < nowPeriod; x++) {
    box[x]?.remove();
  }
}

//用來清掉所有的線
function clearLine() {
  let canvas = document.querySelector("canvas");
  canvas?.remove();
}

//是否顯示遺漏數字表的邏輯
let showMissMap = document.querySelector("#showMissMap");
showMissMap.addEventListener("click", function () {
  showMissMap.classList.toggle("active");
  clearAllData(); //先清除所有的表
  if (isMissMap) {
    isMissMap = false;
  } else {
    isMissMap = true;
  }
  mainDataRander(vanillaData, nowPeriod);
});

//是否顯示背景標註的邏輯
let showBackground = document.querySelector("#showBackground");
showBackground.addEventListener("click", function () {
  clearAllData(); //先清除所有的表
  showBackground.classList.toggle("active");
  if (isBackGroundNumber) {
    isBackGroundNumber = false;
    mainDataRander(vanillaData, nowPeriod);
  } else {
    isBackGroundNumber = true;
    mainDataRander(vanillaData, nowPeriod);
  }
});

//用來顯示標題第幾球的邏輯
function mainTitle() {
  let result = balls.map((_, i) => {
    if (balls[i] === 1) {
      let res = mainRanger.map((num) => {
        return `<div class="number-area">${num}</div>`;
      });
      return `<div class="rightTitleBoxContent"><div class="rightTitle">第 ${
        i + 1
      } 球</div>
              <div class="rightContent">${res.join("")}</div></div>`;
    }
  });
  let newTitle = document.createElement("div");
  newTitle.className = "titleDiv";
  document.querySelector(".main").appendChild(newTitle);
  let newTitleInfo = `<div class="left"><div>編號</div><div>日期</div>
    <div>號碼</div></div>${result.join("")}`;
  newTitle.innerHTML = newTitleInfo;
}

//抓取總共要顯示幾顆球與是否中獎的邏輯
function ballsTotal(data) {
  let win = data.winNumber.split("");
  let total = data.keys;
  const result = total.map((num, luckyIndex) => {
    // 先判斷是否要顯示這顆球
    if (balls[luckyIndex] === 1) {
      const down = data[num].map((content, numIndex) => {
        //再處理是否為中獎號碼
        if (Number(win[luckyIndex]) === numIndex) {
          ballsBackGroundState[luckyIndex][numIndex] = 1;
          return `<div id="line-0${luckyIndex + 1}" class="${
            lineColor[luckyIndex]
          } bodyLuckyNumber">
          ${Number(win[luckyIndex])}</div>`;
        }
        // 設置線的顏色與背景的顏色
        return `<div class="number-area ${
          ballsBackGroundState[luckyIndex][numIndex] !== 1 &&
          isBackGroundNumber &&
          `color-set-${lineColor[luckyIndex]}`
        }">${isMissMap ? content : ""}</div>`;
      });
      return `<div class="rightBoxContent">${down.join("")}</div>`;
    }
  });
  return result.join("");
}

//用來顯示中獎號碼區域
function ballsLotteryAera(win) {
  const ballsWin = win.map((num, i) => {
    return `<div class=${
      balls[i] === 1 ? "luckyNumber" : "unLuckyNumber"
    }>${num}</div>`;
  });
  return ballsWin.join("");
}

//用來控制顯示期數
function btnChange() {
  let btnAll = document.querySelectorAll("#btn");
  for (let i = 0; i < btnAll.length; i++) {
    btnAll[i].addEventListener("click", function () {
      // 按下該按鈕跟上一期的筆數一樣 則不做事  
      if (period[i] === nowPeriod) {
        return;
      }
      for (let j = 0; j < btnAll.length; j++) {
        btnAll[j].className = "btn";
      }
      btnAll[i].className = "btn active";
      clearAllData(); //清除所有資料
      clearLine(); //清除所有線
      nowPeriod = period[i]; //改變期數
      mainDataRander(vanillaData, nowPeriod);
      // 如果有要顯示折線圖才畫線
      if (isShowLine) {
        drawBrokenLine();
      }
    });
  }
}

//用來顯示總共要有幾個球數按鈕
function mainDataBallsBtn() {
  balls.forEach((_, i) => {
    let ballsBtn = document.createElement("div");
    ballsBtn.className = "btn active";
    ballsBtn.id = "showNumber";
    document.querySelector(".allbtnNumberBox").appendChild(ballsBtn);
    let newBallsBtnInfo = `${i + 1} th`;
    ballsBtn.innerHTML = newBallsBtnInfo;
  });
}

//顯示所有資料的邏輯
function mainDataRander(vanillaData, nowPeriod) {
  // 重新設置初始值
  let ball = vanillaData[0].keys;
  setVanillaBackGroundState(ball);

  //根據資料顯示所有資料
  vanillaData.slice(0, nowPeriod).forEach((data, i) => {
    let win = data.winNumber.split("");
    let newCard = document.createElement("div");
    newCard.className = "box";
    document.querySelector(".main").appendChild(newCard);
    let newCardInfo = `
            <div class="leftBox">
                <div class="toSortArea">${i + 1}</div>
                <div class="toDateArea">${data.issue} </div>
                ${ballsLotteryAera(win)}
            </div>
            ${ballsTotal(data)}`;
    newCard.innerHTML = newCardInfo;
  });
}

//處理顯示幾球的邏輯
function handleBallsNumberBtn() {
  let showBtn = document.querySelectorAll("#showNumber");
  for (let i = 0; i < showBtn.length; i++) {
    showBtn[i].addEventListener("click", function () {
      showBtn[i].classList.toggle("active");
      if (balls[i] === 1) {
        balls[i] = 0;
      } else {
        balls[i] = 1;
      }
      clearAllData(); //先清除所有資料
      clearAllTitle(); //清除所有標題
      clearLine(); //清除所有線
      mainTitle(); //在抓取一次標題還有所有資料
      mainDataRander(vanillaData, nowPeriod);
      // 如果有要顯示折線圖才畫線
      if (isShowLine) {
        drawBrokenLine();
      }
    });
  }
}

//畫線的邏輯
function drawBrokenLine() {
  let main = document.querySelector(".main");
  let canvas = document.createElement("canvas");

  //抓取畫布所有的屬性
  let width = main.offsetWidth;
  let height = main.offsetHeight;
  let panelLeft = main.offsetLeft;
  let panelTop = main.offsetTop;

  //設置canvas
  canvas.width = width;
  canvas.height = height;
  canvas.style.position = "absolute";
  main.parentNode.appendChild(canvas);
  canvas.style.top = panelTop + "px";
  canvas.style.left = panelLeft + "px";

  for (let i = 0; i < balls.length; i++) {
    let line = document.querySelectorAll(`#line-0${i + 1}`);
    let color = lineColor[i];

    // canvas可用性
    // if (canvas.getContext) {
    //     console.log("遊覽器支援Canvas");
    // } else {
    //     console.log("遊覽器不支援Canvas");
    // }

    let context = canvas.getContext("2d");

    for (let i = 0; i < line.length - 1; i++) {
      let select1 = line[i];
      let select2 = line[i + 1];

      let x1 = select1.offsetLeft - panelLeft + select1.offsetWidth / 2;
      let y1 = select1.offsetTop - panelTop + select1.offsetHeight / 2;
      let x2 = select2.offsetLeft - panelLeft + select2.offsetWidth / 2;
      let y2 = select2.offsetTop - panelTop + select2.offsetHeight / 2;

      // 開始畫線
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.lineWidth = 2;
      context.strokeStyle = color;
      context.stroke();
    }
  }
}

//處理畫線按鈕
function handleClearBtn() {
  let showLine = document.querySelector("#showLine");
  showLine.addEventListener("click", function () {
    if (isShowLine) {
      clearLine();
      isShowLine = false;
    } else {
      drawBrokenLine();
      isShowLine = true;
    }
    showLine.classList.toggle("active");
  });
}

getApi();

window.onload = function () {
  mainTitle();
  mainDataBallsBtn();
  handleBallsNumberBtn();
  btnChange();
  mainDataRander(vanillaData, nowPeriod);
  drawBrokenLine();
  handleClearBtn();
};
