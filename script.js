const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

const update = () => {
  let date = new Date();
  let h = date.getHours();

  hr.innerText = `0${h}`.slice(-2);
  min.innerText = `0${date.getMinutes()}`.slice(-2);
  sec.innerText = `0${date.getSeconds()}`.slice(-2);
};
setInterval(update, 1000);
window.onload = update();
