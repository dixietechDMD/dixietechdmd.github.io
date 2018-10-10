$(function () {
    // ANIMATIONS USING WAYPOINTS.JS AND ANIMATIONS.CSS
    $(".js--wp-1").waypoint(function (direction) {
        $(".js--wp-1").addClass("animated fadeInUp");
    }, {
        offset: '70%'
    });
    
    $(".info-box-animation").waypoint(function (direction) {
        $(".info-box-animation").addClass("animated fadeInLeft");
    }, {
        offset: '70%'
    });
    
    $(".mobile-info-box-animation").waypoint(function (direction) {
        $(".mobile-info-box-animation").addClass("animated fadeInLeft");
    }, {
        offset: '70%'
    });
    
    /*******************
    
        STELLAR.JS ONLY WORKS WITH A CERTAIN VERSION OF JQUERY (1.7.1)
        GONNA HAVE TO FIND A WAY TO USE IT WITHOUT CAUSING ERRORS.
        
    *******************/
    
    // INITIALIZES STELLAR.JS (PARALLAX EFFECT)
    $.stellar();
    
    // ARRAY OF BACKGROUND IMAGES
    var background = ["img/GEO/GeoAMSTEMPurple.png", "img/GEO/GeoContstructionTeal.png", "img/GEO/GeoCTBlue.png", "img/GEO/GeoEMTBlue.png", "img/GEO/GeoHealthCareRed.png", "img/GEO/GeoOpXYellow.png", "img/GEO/GeoServiceProfGreen.png", "img/GEO/GeoTransTechOrange.png"];
    
    function randomNumber() {
        return Math.floor(Math.random() * 8);
    }
    
    // SET BACKGROUND IMAGE
    $('.bg').css({'background-image': "url(" + background[randomNumber()] + ")"});
    
    $('.lightbox').click(function (e) {
        e.preventDefault();
        $('.contact-lightbox').fadeIn("linear");
        $('.contact-form').fadeIn("slow");
        $('.contact-lightbox').css('display', 'block');
        
        $('.close-btn').click(function () {
            $('.contact-lightbox').css('display', 'none');
        });
    });
    
    $("#social-link").click(function (e) {
        e.preventDefault();
        $(".right-footer").slideToggle();
    });
});