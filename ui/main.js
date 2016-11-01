$(document).ready(function(){
    $('.sub-image').hide();
    $('.image1').click(function(){
       $(this).siblings().show();
       $(this).siblings().css('display', 'inline-block');
    });
    $('.sub-image').click(function(){
       $(this).hide(); 
    });
    
    $('.carousel').carousel({
      interval: false
    });
});

// var send = $('#send').click(function(){
//     var request = XMLHttpRequest();
//     request.onreadystatechange = function(){
//         if(request.readyState === XMLHttpRequest.DONE) {
//             if (request.status === 200) {
//                 // var a = request.responseText;
//                 // $('send').html(a);
//             }
//         }   
//     };
//     request.open('GET', 'http://nikitasharma1.imad.hasura-app.io/?email=&subject=&message=, true');
//     request.send(null);
// });