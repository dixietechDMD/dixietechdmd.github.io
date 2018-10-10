$(function() {
    $(".section-instructor").waypoint(function (direction) {
        $(".teacher-bio-animation").addClass("animated fadeInLeft");
    }, {
        offset: '50%'
    });

    $(".js--wp-instructor").waypoint(function (direction) {
        $(".teacher-bio-animation-2").addClass("animated fadeInLeft");
    }, {
        offset: '50%'
    });

    $(".mobile-cluster-button").click(function () {
        $(".mobile-cluster-nav").slideToggle();
    });
});

// Makes the cluster menu stick to top when scrolled past
$clusterMenu = $('.program-cluster');
$clusterMenuTop = $clusterMenu.offset().top;
$mobileCluster = $(".mobile-cluster").offset().top;

$(window).on('load', function() {
    $navbar = $('.navbar');
    $navbarTop = $navbar.offset().top;
    $navSize = $('#contact-bar').height() + $('.navbar').height();
    $mobileNavSize = $('#contact-bar').height() + $('.navbar').height();

    $(window).scroll(function () {
        $clusterMenu.toggleClass('program-cluster-fixed', ($(window).scrollTop()) > ($clusterMenuTop) - $navSize).trigger("classChange");

        if ($(window).scrollTop() > ($mobileCluster - $mobileNavSize)) {
            $(".mobile-cluster").addClass("mobile-cluster-fixed");
            $(".mobile-cluster").css("top", $mobileNavSize);
        } else {
            $(".mobile-cluster").removeClass("mobile-cluster-fixed");
            $(".mobile-cluster").css("top", 0);
        }
    });
});

// Toggle empty space
$filler = $('#filler');

$clusterMenu.on("classChange", function () {
	if ($clusterMenu.hasClass('program-cluster-fixed')) {
		$filler.show();
        $clusterMenu.css("top", $navSize);
	} else {
		$filler.hide();
        $clusterMenu.css("top", 0);
	}
});

$('.lightbox').click(function (e) {
        e.preventDefault();
        $('.contact-lightbox').fadeIn("linear");
        $('.contact-form').fadeIn("slow");
        $('.contact-lightbox').css('display', 'block');
        
        $('.close-btn').click(function () {
            $('.contact-lightbox').css('display', 'none');
        });
    });