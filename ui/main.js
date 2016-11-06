$(document).ready(function(){
    $('#click').hide();
    $('.sub-image').hide();
    (function(){
                                        /* current-page menu highlight on page load */
        var path = '/'+window.location.pathname.split('/').pop();
        if (path === '') {
           path = '/index.html';
        }
        var target = $('.hover li a[href="'+path+'"]');
        target.addClass('active-menu');
        console.log(path);
        
    })(); 
                                     /* toggle on page load */
    for (var i=0; i<5; i++) {
        $('#click').fadeIn('slow').delay(500).fadeOut('slow');
        if (ontheclick) {
            $('#click').hide();
            break;  
        } 
    }  
    for (var j=0; j<5; j++) {
        $('#by').fadeIn('slow').delay(500).fadeOut('slow');
    }
                                     /* portfolio-page: onclick function for glyphicons */
    var ontheclick = $('.image1').click(function(){
       $(this).siblings('.sub-image').css('display', 'inline-block');
       return true;
    });
    $('.sub-image').click(function(){
       $(this).hide(); 
    });
                                   /* about-page: carousel jquery */
    $('.carousel').carousel({
      interval: false
    });
});

// what else to be added ?
// add popovers 
// add title attributes //slide names/category/title
// certificate links
// adding comments 
// code cleaning (dry)
// blog page with comments section 