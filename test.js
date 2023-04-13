//原本放在index.js裡面 原本的程式碼   目前最新的都用GPT做優化
import { API_Calabarzon_6D } from "./api.js";

//統計資料的假格式
let statistics = [
  {
    name: "出現總次數",
    first: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    keys: ["first", "second", "third"],
    second: ["1", "1", "2", "1", "1", "1", "1", "1", "1", "1"],
    third: ["1", "1", "1", "3", "1", "1", "1", "1", "1", "1"],
  },
  {
    name: "最大遺漏值",
    first: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    keys: ["first", "second", "third"],
    second: ["1", "1", "2", "1", "1", "1", "1", "1", "1", "1"],
    third: ["1", "1", "1", "3", "1", "1", "1", "1", "1", "1"],
  },
  {
    name: "平均遺漏值",
    first: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    keys: ["first", "second", "third"],
    second: ["1", "1", "2", "1", "1", "1", "1", "1", "1", "1"],
    third: ["1", "1", "1", "3", "1", "1", "1", "1", "1", "1"],
  },
  {
    name: "最大連出值",
    first: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    keys: ["first", "second", "third"],
    second: ["1", "1", "2", "1", "1", "1", "1", "1", "1", "1"],
    third: ["1", "1", "1", "3", "1", "1", "1", "1", "1", "1"],
  },
];

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
let period = [10, 30, 50];

//當前期數
let nowPeriod = 30;

//用來表示第幾球
let balls = [];

//用來設置總共球數區間
let mainRange = [];

//球數的顯示名稱陣列
let showName = ["st", "nd", "rd", "th", "th", "th"];

//球數中文的顯示名稱陣列
let showNameChinese = ["一", "二", "三", "四", "五", "六"];

//標題第幾球顏色
let titleColor = ["one", "two", "three", "four", "five", "six"];

//線的顏色
let lineColor = [
  "#488D1A",
  "#18827F",
  "#FF5704",
  "#5D5ADE",
  "#A2165B",
  "#047FE8",
];

//先抓取API然後塞進 vanillaData
async function getApi() {
  try {
    const res = await fetch(API_Calabarzon_6D);
    const data = await res.json();
    let ball = await data[0][0].keys;
    vanillaData = data[0].reverse();
    console.log("先發API抓取資料");
    for (let i = 0; i < ball.length; i++) {
      balls.push(1);
    }
    ballsRanger(vanillaData);
    // 先給備註標記的陣列 設置初始值
    setVanillaBackGroundState(ball);
  } catch (error) {
    console.log(error.message);
  }
}

//處理所有球的開獎區間
function ballsRanger(vanillaData) {
  if (vanillaData.length === 0) {
    return;
  }
  let range = vanillaData[0]?.range;
  for (let x = range[0]; x <= range[1]; x++) {
    mainRange.push(Number(x));
  }
}

//設置 ballsBackGroundState 的初始值
function setVanillaBackGroundState(ball) {
  ballsBackGroundState = []; //先清空
  for (let i = 0; i < ball.length; i++) {
    let arr = [];
    for (let x = 0; x < mainRange.length; x++) {
      arr.push(0);
    }
    ballsBackGroundState.push(arr);
  }
}

//用來清掉所有標題的邏輯
function clearAllTitle() {
  let titleDiv = document.querySelector(".titleDiv");
  titleDiv?.remove();
}

//用來清掉所有數據標題的表
function clearAllStatisticsTitle() {
  let statisticsTitleDiv = document.querySelector(".statisticsTitleDiv");
  statisticsTitleDiv?.remove();
}

//用來清掉所有開獎資料的邏輯
function clearAllData() {
  let box = document.querySelectorAll(".box");
  for (let x = 0; x < nowPeriod; x++) {
    box[x]?.remove();
  }
}

//用來清掉所有數據統計資料的邏輯
function clearAllStatistics() {
  let statisticsBox = document.querySelectorAll(".statisticsBox");
  //固定只有4筆紀錄
  for (let x = 0; x <= 4; x++) {
    statisticsBox[x]?.remove();
  }
}

//用來清掉所有的線
function clearLine() {
  let canvas = document.querySelector("canvas");
  canvas?.remove();
}

//清除所有的資料
function clearAll() {
  clearAllData(); //清除所有開獎資料
  clearAllTitle(); //清除所有標題
  clearAllStatisticsTitle(); //清除所有數據標題
  clearLine(); //清除所有線
  clearAllStatistics(); //清除所有數據統計的資料
}

//是否顯示遺漏數字表的邏輯
let missBtn = document.querySelector("#missBtn");
let showMissMap = document.querySelector("#showMissMap");
missBtn.addEventListener("click", function () {
  let img = missBtn.getElementsByTagName("img");
  showMissMap.classList.toggle("active");
  clearAllData(); //先清除所有的表
  clearAllStatisticsTitle(); //清除所有數據標題
  clearAllStatistics();
  if (isMissMap) {
    isMissMap = false;
    img[0].style.display = "none";
  } else {
    isMissMap = true;
    img[0].style.display = "block";
  }
  mainDataRander(vanillaData, nowPeriod);
  statisticsTitle(); //再抓取一次統計標標題
  mainStatisticsRander(statistics); //再抓取一次統計資料
});

//是否顯示背景標註的邏輯
let backGroundBtn = document.querySelector("#backGroundBtn");
let showBackground = document.querySelector("#showBackground");
let img = backGroundBtn.getElementsByTagName("img");
img[0].style.display = "none";
backGroundBtn.addEventListener("click", function () {
  clearAllData(); //先清除所有的表
  clearAllStatisticsTitle(); //清除所有數據標題
  clearAllStatistics(); //清除所有數據統計的資料
  showBackground.classList.toggle("active");
  if (isBackGroundNumber) {
    isBackGroundNumber = false;
    img[0].style.display = "none";
  } else {
    isBackGroundNumber = true;
    img[0].style.display = "block";
  }
  mainDataRander(vanillaData, nowPeriod); //再抓取一次開獎資料
  statisticsTitle();
  mainStatisticsRander(statistics);
});

//用來顯示標題第幾球的邏輯
function mainTitle() {
  let result = balls.map((_, i) => {
    if (balls[i] === 1) {
      let res = mainRange.map((num, x) => {
        return `<span class="number-area">${num}</span>`;
      });
      return `<div class="color-set-title-${
        titleColor[i]
      }"><div class="rightTitle">第${showNameChinese[i]}球</div>
              <div class="rightContent">${res.join("")}</div></div>`;
    }
  });
  let newTitle = document.createElement("div");
  newTitle.className = "titleDiv";
  document.querySelector(".main").appendChild(newTitle);
  let newTitleInfo = `<div class="left"><div class="titleNo">編號</div><div class="titleDate">獎期號</div>
    <div class="titleNumber">開獎結果</div></div>${result.join("")}`;
  newTitle.innerHTML = newTitleInfo;
}

//用來顯示數據統計標題的邏輯
function statisticsTitle() {
  let result = balls.map((_, i) => {
    if (balls[i] === 1) {
      let res = mainRange.map((num) => {
        return `<div class="number-area">${num}</div>`;
      });
      return `<div class="color-set-title-${
        titleColor[i]
      }"><div class="rightTitle">第${showNameChinese[i]}球</div>
        <div class="rightContent">${res.join("")}</div></div>`;
    }
  });
  let statistics = document.createElement("div");
  statistics.className = "statisticsTitleDiv";
  document.querySelector(".main").appendChild(statistics);
  let newStatisticsTitleInfo = `<div class="left"><div class="toDataTotalArea">數據統計</div>
        </div>${result.join("")}`;
  statistics.innerHTML = newStatisticsTitleInfo;
}

//抓取總共要顯示幾顆球與是否中獎的邏輯
function ballsTotal(data) {
  let win = data.winNumber.split(",");
  let total = data.keys;
  const result = total.map((num, luckyIndex) => {
    // 先判斷是否要顯示這顆球
    if (balls[luckyIndex] === 1) {
      const firstData = data[num].map((content, numIndex) => {
        //這裡要先判斷如果沒有數字0的球 陣列位置要+1 0再處理是否為中獎號碼
        if (
          Number(win[luckyIndex]) ===
          (mainRange[0] !== 0 ? numIndex + 1 : numIndex)
        ) {
          ballsBackGroundState[luckyIndex][numIndex] = 1;
          return `<div class="color-set-${
            titleColor[luckyIndex]
          } bodyLuckyNumber" id="line-0${luckyIndex + 1}">${content}</div>`;
        }
        // 設置線的顏色與背景的顏色
        return `<span class="number-area ${
          ballsBackGroundState[luckyIndex][numIndex] !== 1 &&
          isBackGroundNumber &&
          `color-set-${titleColor[luckyIndex]}`
        }">${isMissMap ? content : ""}</span>`;
      });
      return `<div class="rightBoxContent color-set-backGround-${
        titleColor[luckyIndex]
      }">${firstData.join("")}</div>`;
    }
  });
  return result.join("");
}

//抓取總共要顯示幾顆球與數據統計的邏輯
function ballsStatistics(data) {
  let total = data.keys;
  const result = total.map((num, luckyIndex) => {
    // 先判斷是否要顯示這顆球
    if (balls[luckyIndex] === 1) {
      const down = data[num].map((content) => {
        return `<span class="number-area">${content}</span>`;
      });
      return `<div class="rightBoxContent color-set-backGround-${
        titleColor[luckyIndex]
      }">${down.join("")}</div>`;
    }
  });
  return result.join("");
}

//用來顯示中獎號碼區域
function ballsLotteryAera(win) {
  const ballsWin = win.map((num, i) => {
    return `<span class=${
      balls[i] === 1 ? "luckyNumber" : "unLuckyNumber"
    }>${num}</span>`;
  });
  return `<div class="toLuckyArea">${ballsWin.join("")}</div>`;
}

//用來控制顯示期數
function btnChange() {
  let btnAll = document.querySelectorAll(".periodBtn");
  for (let i = 0; i < btnAll.length; i++) {
    btnAll[i].addEventListener("click", function () {
      // 按下該按鈕跟上一期的筆數一樣 則不做事
      if (period[i] === nowPeriod) {
        return;
      }
      for (let j = 0; j < btnAll.length; j++) {
        btnAll[j].className = "periodBtn";
      }
      btnAll[i].className = "periodBtn active";
      clearAllData(); //清除所有資料
      clearLine(); //清除所有線
      clearAllStatistics(); //清除所有統計資料
      clearAllStatisticsTitle(); //清除所有數據標題
      nowPeriod = period[i]; //改變期數
      mainDataRander(vanillaData, nowPeriod);
      // 如果有要顯示折線圖才畫線
      if (isShowLine) {
        drawBrokenLine();
      }
      statisticsTitle();
      mainStatisticsRander(statistics);
    });
  }
}

//用來顯示總共要有幾個球數按鈕
function mainDataBallsBtn() {
  balls.forEach((_, i) => {
    let ballsBtn = document.createElement("div");
    ballsBtn.className = "optionBtn";
    ballsBtn.id = "show";
    document.querySelector(".allbtnNumberBox").appendChild(ballsBtn);
    let newBallsBtnInfo = `<div class="btn active" id="showNumber"></div>
    <img class="check" id="check" src="./check.svg"/>
    <span>${i + 1}${showName[i]}</span>`;
    ballsBtn.innerHTML = newBallsBtnInfo;
  });
}
//顯示所有開獎資料的邏輯
function mainDataRander(vanillaData, nowPeriod) {
  // 重新設置初始值
  let ball = vanillaData[0]?.keys;
  setVanillaBackGroundState(ball);

  //根據資料顯示
  vanillaData.slice(0, nowPeriod).forEach((data, i) => {
    let win = data.winNumber.split(",");
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

//顯示所有數據統計的邏輯
function mainStatisticsRander(statistics) {
  //根據資料顯示
  statistics.forEach((data) => {
    let newStatistics = document.createElement("div");
    newStatistics.className = "statisticsBox";
    document.querySelector(".main").appendChild(newStatistics);
    let newStatisticsInfo = `
              <div class="leftBox">
                 <div class="toDataTotalArea">${data.name}</div>
              </div>
              ${ballsStatistics(data)}`;
    newStatistics.innerHTML = newStatisticsInfo;
  });
}

//處理要顯示幾球的邏輯
function handleBallsNumberBtn() {
  let show = document.querySelectorAll("#show");
  let showBtn = document.querySelectorAll("#showNumber");
  for (let i = 0; i < show.length; i++) {
    show[i].addEventListener("click", function () {
      let img = show[i].getElementsByTagName("img");
      showBtn[i].classList.toggle("active");
      if (balls[i] === 1) {
        balls[i] = 0;
        img[0].style.display = "none";
      } else {
        balls[i] = 1;
        img[0].style.display = "block";
      }
      clearAll(); //先清除所有資料
      mainTitle(); //在抓取一次標題還有所有資料
      mainDataRander(vanillaData, nowPeriod);
      statisticsTitle(); //再抓取一次統計資料
      mainStatisticsRander(statistics);
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
  let width = main.scrollWidth;
  let height = main.scrollHeight;
  //panelLeft設置為0才會使每次球數變更畫布位置正確
  let panelLeft = 0;
  let panelTop = main.scrollTop;

  //設置canvas
  canvas.width = width;
  canvas.height = height;
  canvas.style.position = "absolute";
  main.appendChild(canvas);
  canvas.style.top = panelTop + "px";
  canvas.style.left = 0 + "px";

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
  let lineBtn = document.querySelector("#lineBtn");
  let showLine = document.querySelector("#showLine");
  let img = lineBtn.getElementsByTagName("img");
  lineBtn.addEventListener("click", function () {
    if (isShowLine) {
      clearLine();
      img[0].style.display = "none";
      isShowLine = false;
    } else {
      drawBrokenLine();
      img[0].style.display = "block";
      isShowLine = true;
    }
    showLine.classList.toggle("active");
  });
}

function loadOver() {
  let load = document.querySelector(".load");
  load.style.display = "none";
}

window.onload = function () {
  getApi().then(() => {
    mainTitle();
    mainDataBallsBtn();
    handleBallsNumberBtn();
    btnChange();
    mainDataRander(vanillaData, nowPeriod);
    handleClearBtn();
    statisticsTitle();
    mainStatisticsRander(statistics);
    drawBrokenLine();
    loadOver();
  });
};