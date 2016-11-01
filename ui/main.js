$(document).ready(function(){
    $('.sub-image').hide();
    $('.image1').click(function(){
       $(this).siblings().show();
    });
    $('.sub-image').click(function(){
       $(this).hide(); 
    });
    
    $('.carousel').carousel({
      interval: 20000
    });
});

// var send = $('#send').click(function(){
//     var request = XMLHttpRequest();
//     request.onreadystatechange = function(){
//         if(request.readyState === XMLHttpRequest.DONE) {
//             if (request.status === 200) {
//                 var a = request.responseText;
//                
//             }
//         }   
//     };
//     request.open('GET', 'http://nikitasharma1.imad.hasura-app.io/xxxx, true);
//     request.send(null);
// });