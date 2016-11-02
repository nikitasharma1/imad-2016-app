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

    // when the carousel slides, load the ajax content
    $('#myCarousel').on('slid', function (e) {
      
    	// get index of currently active item
    	var idx = $('#myCarousel .item.active').index();
    	var url = $('.item.active').data('url');
    
    	// ajax load from data-url
      	//$('.item').html("wait...");
    	$('.item').load(url,function(result){
    	    $('#myCarousel').carousel(idx);  
    	});
      
    });
    
    // load first slide
    $('[data-slide-number=0]').load($('[data-slide-number=0]').data('url'),function(result){    
    	$('#myCarousel').carousel(0);
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