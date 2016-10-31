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

var email = document.getElementById('email').value;
var subject = document.getElementById('subject').value;
var message = document.getElementById('message').value;