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

var experiences = document.getElementsByClassName("experiencebutton");

for (let index = 0; index < experiences.length; index++) {
  experiences[index].addEventListener("click", function () {
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.color = "aliceblue";
      content.style.borderRadius = "10px";
      content.style.boxShadow = "0px 10px 10px 0px rgb(4, 19, 41)";
      content.style.zIndex = "2";
      content.style.backgroundColor = "rgb(10, 28, 59)";
    }
  });
}
