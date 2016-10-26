console.log('Loaded!');
var btn = document.getElementsByClassName("btn");
// btn.onclick = function () {
//     if (this.id === "about") {
       
//     }
//     else if (this.id === "portfolio") {
       
//     }
//     else {
       
//     }
// };

var button = document.getElementById("counter");
var counter = 0;
button.onclick = function () {
    //Create a request object
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE){
          // Take some action
          if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
          }
      }
      //Not done yet
    }; 
    // Make a request
    request.open ('GET', 'http://nikitasharma1.imad.hasura-app.io/counter', true);
    request.send(null);
};

//Submit name 

var nameInput = document.getElementById("name");
var name = nameInput.value;
var nameInput = document.getElementById("submit");
submit.onclick = function() {
  //Make a request to server and sendd the name
  //Captre the names and render as list
  var names = ['name1','name2','name3'];
  var list = '';
  for (var i=0; i<names.length; i++) {
      list += '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById("namelist");
  ul.innerHTML = list;
};