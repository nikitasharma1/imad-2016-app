$(document).ready(function(){
    $('.sub-image').hide();
    $('.image1').click(function(){
       $(this).siblings().show();
    });
    $('.sub-image').click(function(){
       $(this).hide(); 
    });
});

