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

email = document.getElementById('email').value;
subject = document.getElementById('subject').value;
message = document.getElementById('message').value;