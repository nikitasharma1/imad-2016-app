$(document).ready(function(){
   (function(){
       var path = window.location.pathname.split('/').pop();
       if (path === '') {
           path = 'index.html';
       }
       var target = $('.hover li a[href="'+path+'"]');
       target.addClass('active-menu');
       console.log(path);
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

// what else to be added ?
// active class  to menu items 
// add popovers 
// add title attributes //slide names/category/title
// certificate links
// adding comments 
// code cleaning (dry)
