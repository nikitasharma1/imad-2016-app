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
    $('#myCarousel').carousel({
  interval:false // remove interval for manual sliding
});

    // $(function() {
    //      var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    //      $(".hover ul li a").each(function(){
    //           if($(this).attr("href") === pgurl || $(this).attr("href") === '' )
    //           $(this).parent().addClass("active-menu");
    //      });
    // });

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