$(document).ready(function(){
    $('sub-image').hide();
    $('.image1').click(function(){
       $(this).addClass('col-md-6');
       $(this).siblings().show();
    });
    $('.sub-image').click(function(){
       $(this).hide(); 
    });
});

