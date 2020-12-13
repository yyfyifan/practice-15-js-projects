const counter = document.querySelector("#counter");

const buttons = document.querySelectorAll("button");

// 1. 视频的写法，使用forEach为所有button注册同一个点击处理
// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let number = 0;
//     // 根据不同button做不同的处理
//     if (e.target.id === "inc") {
//       number = Number(counter.innerHTML) + 1;
//     } else if (e.target.id === "dec") {
//       number = Number(counter.innerHTML) - 1;
//     } else {
//       number = 0;
//     }

//     // 根据值的大小来更换颜色
//     if (number > 0) {
//       counter.style.color = "green";
//     } else if (number < 0) {
//       counter.style.color = "red";
//     } else {
//       counter.style.color = "black";
//     }

//     counter.innerHTML = number;
//   });
// });

// 2. 分开写
const adjustColor = () => {
  let value = Number(counter.innerHTML);
  if (value > 0) {
    counter.style.color = "green";
  } else if (value < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
};
document.querySelector("#inc").addEventListener("click", (e) => {
  counter.innerHTML = Number(counter.innerHTML) + 1;
  adjustColor();
});

document.querySelector("#dec").addEventListener("click", (e) => {
  counter.innerHTML = Number(counter.innerHTML) - 1;
  adjustColor();
});
document.querySelector("#reset").addEventListener("click", (e) => {
  counter.innerHTML = 0;
  adjustColor();
});
