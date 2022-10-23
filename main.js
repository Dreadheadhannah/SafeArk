var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};


var images = new Array(
    'img/bg2.jpg',
    'img/bg1.jpg',
    'img/bg3.jpg',
   );
  
  var slider = setInterval(function() {
    document.getElementsByClassName('hero-section')[0].setAttribute('style', 'background-image: url("'+images[0]+'")');
    images.splice(images.length, 0, images[0]);
    images.splice(0, 1);
  }, 2500);

  
window.onload = function () {
  if (
    document.querySelectorAll(".progress").length > 0 &&
    document.querySelectorAll(".progress [data-progress]").length > 0
  ) {
    document
      .querySelectorAll(".progress [data-progress]")
      .forEach((x) => AnimateProgress(x));
  }
};

function AnimateProgress(el) {
  el.className = "animate-progress";
  el.setAttribute(
    "style",
    `--animate-progress:${el.getAttribute("data-progress")}%;`
  );
};
