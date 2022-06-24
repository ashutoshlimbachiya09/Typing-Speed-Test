var main = document.getElementById("main");
var body = document.getElementById("bd");
var counter=document.getElementById("counter");

window.onload = () => {
  var ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var count=0;

  var timer = setInterval(() => {
    var min = 0;
    var max = 80;
    var posX = Math.floor(Math.random() * (max - min) + min);
    var sp = document.createElement("span");
    sp.className = "bubble";

    var mincolor = 000000;
    var maxcolor = 999999;
    var colors = Math.floor(Math.random() * (maxcolor - mincolor) + mincolor);
    sp.style.backgroundColor = "#" + colors;

    var min1 = 0;
    var max1 = ch.length;
    var ch1 = Math.floor(Math.random() * (max1 + min1) - min1);
    sp.innerHTML = ch[ch1];
    sp.id = ch[ch1];
    sp.style.left = posX + "%";
    bd.appendChild(sp);

  }, 1500);

  var count = 0;
  var key = null;

  document.getElementById("bd").addEventListener("keyup", function () {
    key = event.keyCode;
    var res = String.fromCharCode(key);
    var e = document.getElementById(res);
    var sp_code = e.innerHTML.charCodeAt(0);
    if (sp_code == key) {
      count++;
      document.getElementById("bd").removeChild(e);
      counter.innerHTML=count;
    }
  });
};
