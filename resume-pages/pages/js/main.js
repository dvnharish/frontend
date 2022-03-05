var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("sidenavigation").style.top = "0";
    document.getElementById("logosource").style.top = "0";
  } else {
    document.getElementById("sidenavigation").style.top = "-51px";
    document.getElementById("logosource").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};
