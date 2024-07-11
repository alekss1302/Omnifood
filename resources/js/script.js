$(document).ready(function() {
    
    /* ------------------------------------------------- */
    /* FOR THE STICKY NAVIGATIONS */
    /* ------------------------------------------------- */

    $('.js--section-features').waypoint(function(direction){
        if (direction == 'down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
       offset: '60px;'
    });

    /* ------------------------------------------------- */
    /* SCROLL ON BUTTONS */
    /* ------------------------------------------------- */

    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });

    /* ------------------------------------------------- */
    /* NAVIGATION SCROLL */
    /* ------------------------------------------------- */

    // Scroll to specific values
    // scrollTo is the same
    window.scroll({
        top: 2500, 
        left: 0, 
        behavior: 'smooth'
    });
    
    // Scroll certain amounts from current position 
    window.scrollBy({ 
        top: 100, // could be negative value
        left: 0, 
        behavior: 'smooth' 
    });
    
    // Scroll to a certain element
    document.querySelector('.hello').scrollIntoView({ 
        behavior: 'smooth' 
    });


  
})

