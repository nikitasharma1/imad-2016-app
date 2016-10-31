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

$(document).ready(function(){
  $('.sub-div-1').hide();
  $('.sub-div-2').hide();
  $('.btn-close').hide();
  // $('#arrow-').hide(); 
  $('#arrow-2').hide(); 
  
    $('#arrow-1').click(function(){
    $('.image-div').addClass('col-md-6');
    $('.sub-div-1').show();
    $('#arrow-2').show(); 
    $('#arrow-1').hide(); 
    // $('.btn-close').addClass("close-sub-div-1");
    // $('.btn-close').show();
  });

  $('#arrow-2').click(function(){
    
    $('.image-div').removeClass('col-md-6');
    $('.image-div').addClass('col-md-4');
    $('.sub-div-1').removeClass('col-md-6');
    $('.sub-div-1').addClass('col-md-4');
    $('.sub-div-2').show();
    $('.btn-close').show();
    $('#arrow-2').hide(); 
    // $('.btn-close').removeClass('close-sub-div-1');
    // $('.btn-close').addClass('.close-sub-divs');
  });

  
  $('.btn-close').click(function(){
    $('.sub-div-1').hide();
    $('.sub-div-2').hide();
    $('.btn-close').hide();
    $('.sub-div-1').removeClass('col-md-4');
    $('.sub-div-1').addClass('col-md-6');
    $('.image-div').removeClass('col-md-4');
    $('#arrow-1').show(); 
  });

//   $(".close-sub-div-1").click(function(){
//     $('.sub-div-1').hide();
//     $('.image-div').removeClass('col-md-6');

//     $(this).hide();
//     $(this).removeClass('close-sub-div-1');  
//   });

//   $('.close-sub-divs').click(function(){
//     $('.sub-div-2').hide();
//     $('.sub-div-1').removeClass('col-md-4');
//     $('.sub-div-1').addClass('col-md-6');
//     $('.image-div').removeClass('col-md-4');
//     $('.image-div').addClass('col-md-6');
//     $(this).addClass('close-sub-div-1');
//     $(this).removeClass('close-sub-divs');
//   });
});

