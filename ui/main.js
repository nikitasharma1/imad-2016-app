console.log('Loaded!');

var button = document.getElementById("counter");
var counter = 0;
button.onclick = function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE){
          if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
          }
      }
    }; 
    request.open ('GET', 'http://nikitasharma1.imad.hasura-app.io/counter', true);
    request.send(null);
};

/****************************/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}