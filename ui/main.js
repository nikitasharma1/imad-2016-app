$(document).ready(function(){
    $('image1').siblings().hide();
    $('.image1').click(function(){
       $(this).siblings().show();
    });
    $('image1').siblings().click(function(){
       $(this).hide(); 
    });
});

