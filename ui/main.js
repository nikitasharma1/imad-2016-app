$(document).ready(function(){
   (function(){
       var path = window.location.pathname.split('/').pop();
       if (path === '') {
           path = 'index.html';
       }
       var target = $('.hover li a[href="'+path+'"]');
       target.addClass('active-menu');
   })();

   // portfolio page
    $('.sub-image').hide();
    $('.image1').click(function(){
       $(this).siblings().show();
       $(this).siblings().css('display', 'inline-block');
    });
    $('.sub-image').click(function(){
       $(this).hide(); 
    });
   // carousel jquery
    $('.carousel').carousel({
      interval: false
    });
    $('#myCarousel').carousel({
        interval:false // remove interval for manual sliding
    });

});

// var send = $('#send').click(function(){
//     var request = XMLHttpRequest();
//     request.onreadystatechange = function(){
//         if(request.readyState === XMLHttpRequest.DONE) {
//             if (request.status === 200) {
//                 // var a = request.responseText;
//             }
//         }   
//     };
//     request.open('GET', 'http://nikitasharma1.imad.hasura-app.io/?email=&subject=&message=, true');
//     request.send(null);
// });