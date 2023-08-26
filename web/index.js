const currentTime = document.getElementById('current-time');

setInterval(() => {
  currentTime.innerText = new Date().toString();
}, 1000);

function onClickButton() {
  alert(new Date());
}
