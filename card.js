import { API_Calabarzon_6D } from "./api.js";

const api = "https://phlottodev1.azurewebsites.net/D6";

let nextTime = "";

//先發第一次
async function getApi() {
    //這裡可以放打完API之後要做的事
    nextTime = "2023-04-13T07:30:00.000Z";
    countDown();
    // try {
    //     const res = await fetch(api);
    //     const data = await res.json();
    //     console.log("發完了");
    //     console.log(data);
    // } catch (error) {
    //     console.log(error.message);
    // }
}

//這是第二次的API
async function getApi2() {
    //這裡可以放打完API之後要做的事
    nextTime = "2023-04-13T07:40:00.000Z";
    countDown();
    // try {
    //     const res = await fetch(api);
    //     const data = await res.json();
    //     console.log("發完了");
    //     console.log(data);
    // } catch (error) {
    //     console.log(error.message);
    // }
}

function addZero(i) {
    return i < 10 ? "0" + i : i + "";
}

function nextDrawsTime() {
    let date = new Date("2023-04-13T07:30:00.000Z");

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    function timeCheck() {
        if (Number(hour) <= 12) {
            return "上午" + addZero(Number(hour)) + ":" + addZero(min);
        } else {
            return "下午" + addZero(Number(hour - 12)) + ":" + addZero(min);
        }
    }

    let currentDate = `${year}/${month}/${day}/${timeCheck()}`;
    document.querySelector(".next").innerHTML = currentDate;
}

function countDown() {
    let nowtime = new Date();
    //把下期時間塞在這裡
    let endtime = new Date(nextTime);
    let lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
    // let d = parseInt(lefttime / (24 * 60 * 60));
    let h = parseInt(lefttime / (60 * 60));
    let m = parseInt((lefttime / 60) % 60);
    let s = parseInt(lefttime % 60);
    // d = addZero(d);
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);
    document.querySelector(".count").innerHTML = `倒數 ${h} : ${m} : ${s}`;
    if (lefttime <= 0) {
        document.querySelector(".count").innerHTML = "發API中";
        getApi2();
        return;
    }
    setTimeout(countDown, 1000);
}

window.onload = function () {
    // getApi()
    nextDrawsTime();
};
