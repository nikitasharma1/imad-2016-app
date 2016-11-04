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
                                        /* click-image toggle on page load */
        for (var i=0; i<5 ; i++) { 
          $('#click').fadeIn('slow').delay(500).fadeOut('slow');
          $('#click').hide();
        }
    })(); 
    

   
                                    /* portfolio-page: onclick function for glyphicons */
    $('.image1').click(function(){
       $(this).siblings().show();
       $(this).siblings().css('display', 'inline-block');
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
// active class  to menu items : done
// add popovers 
// add title attributes //slide names/category/title
// certificate links
// adding comments 
// code cleaning (dry)
