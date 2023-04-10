import { api } from "./api.js";

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
let period = [10, 30, 50, 100];

//當前期數
let nowPeriod = 30;

//用來表示第幾球
let balls = [];

//用來設置總共球數區間
let mainRange = [];

//球跟線的顏色
let lineColor = ["red", "green", "yellow", "purple", "blue"];

//先抓取API然後塞進 vanillaData
async function getApi() {
  try {
    const res = await fetch(api);
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
    mainRange.push(x);
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
  let historyBox = document.querySelectorAll(".historyBox");
  for (let x = 0; x < nowPeriod; x++) {
    historyBox[x]?.remove();
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
}

//用來顯示標題第幾球的邏輯
function mainTitle() {
  let newTitle = document.createElement("div");
  newTitle.className = "historyTitle";
  document.querySelector(".historyMain").appendChild(newTitle);
  let newTitleInfo = `
  <div class="titleNo">編號</div><div class="titleDate">日期</div>
  <div class="titleDate">期號</div>
    <div class="titleNumber">號碼</div>`;
  newTitle.innerHTML = newTitleInfo;
}

//用來顯示中獎號碼區域
function ballsLotteryAera(win) {
  const ballsWin = win.map((num, i) => {
    return `<div class=${
      balls[i] === 1 ? "luckyNumber" : "unLuckyNumber"
    }>${num}</div>`;
  });
  return `<div class="toHistoryLuckyArea">${ballsWin.join("")}</div>`;
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
      nowPeriod = period[i]; //改變期數
      mainDataRander(vanillaData, nowPeriod);
    });
  }
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
    newCard.className = "historyBox";
    document.querySelector(".historyMain").appendChild(newCard);
    let newCardInfo = `
                <div class="toHistorySortArea">${i + 1}</div>
                <div class="toHistoryDateArea">${data.date} </div>
                <div class="toHistoryDateArea">${data.issue} </div>
                ${ballsLotteryAera(win)}
            `;
    newCard.innerHTML = newCardInfo;
  });
}

function url() {
  let pathname = window.location.pathname;
  if (pathname.includes("history")) {
    console.log("這是歷史頁面");
    return;
  }
  console.log("這是其他業");
}

window.onload = function () {
  getApi().then(() => {
    mainTitle();
    btnChange();
    mainDataRander(vanillaData, nowPeriod);
  });
};
