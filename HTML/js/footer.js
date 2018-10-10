$(function () {
    
    // Open lightbox if the contact, or tour footer -
    // links are clicked
    $('.lightbox').click(function (e) {
        e.preventDefault();
        $('.contact-lightbox').fadeIn("linear");
        $('.contact-form').fadeIn("slow");
        $('.contact-lightbox').css('display', 'block');
        console.log("lightbox clicked");
        $('.close-btn').click(function () {
            $('.contact-lightbox').css('display', 'none');
        });
    });
    
    $("#social-link").click(function (e) {
        e.preventDefault();
        $(".right-footer").slideToggle();
    });
});

// Put the navbar and footer on everything
$contact_bar = `<div id="contact-bar">
                    <ul class="contact-left">
                        <li><i class="fas fa-phone"></i><span><a href="tel:4356748400"> (435) 674-8400 </a></span></li>
                        <li id="contact-email"><i class="far fa-envelope"></i><span><a href="mailto:info@dixietech.edu"> INFO@DIXIETECH.EDU</a></span></li>
                        <li id="contact-address"><i class="fas fa-location-arrow"></i><span><a href="https://goo.gl/maps/ww652VAz94P2"> 610 Tech Ridge Dr.</a></span></li>
                    </ul>
                    <ul class="contact-right">
                        <li><a href="#">TOUR</a></li>
                        <li><a href="#">DONATE</a></li>
                        <li><a href="#">STUDENT PORTAL</a></li>
                        <li><a href="/HTML/pages/about/employment-opp.html">EMPLOYMENT</a></li>
                        <li><a href="#">APPLY NOW</a></li>
                    </ul>
                </div>`;

$('.section-footer').load('/HTML/footer.html');
$('.navbar').load('/HTML/index-menu-old.html');
$('.navbar').after($contact_bar);

// Dynamic menu bar adjustment
$(window).on('load', function() {
    $nav = $('.navbar');
    // Check if display is none on #contact-bar and if so set $nav to top: 0;
    $contactHeight = $("#contact-bar").height();
    $nav.css('top', $contactHeight);
});

//Spencer Random video function

var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

var video = document.getElementById("banner-video");
//arrays containing the individual videos for each page


var automationTech = ["cnc1.mp4","cnc2.mp4", "cnc3.mp4"]; // need videos
var autoTech = ["autotech1.mp4", "autotech2.mp4", "autotech3.mp4"]; //
var cdl = ["cdl.mp4", "cdl2.mp4"]; //
var cnc = ["cnc1.mp4","cnc2.mp4", "cnc3.mp4"]; //
var collision = ["collision_repair1.mp4", "collision_repair2.mp4", "collision_repair3.mp4"]; //
var culinary = ["culinary1.mp4", "culinary2.mp4", "culinary3.mp4"]; //
var diesel = ["diesel1.mp4", "diesel2.mp4", "diesel3.mp4"]; //
var dmd = ["dmd1.mp4", "dmd2.mp4", "dmd3.mp4", "dmd4.mp4"]; //
var drafting = ["drafting1.mp4", "drafting2.mp4", "drafting3.mp4"]; //
var electrical = ["electrical1.mp4", "electrical2.mp4", "electrical3.mp4"]; //
var emt = ["emt1.mp4", "emt2.mp4", "emt3.mp4"]; //
var emta = ["emta1.mp4", "emta2.mp4", "emta3.mp4"]; //
var hvac = ["hvac1.mp4", "hvac2.mp4"]; //
var it = ["it1.mp4", "it2.mp4"]; //
var macna = ["macna1.mp4", "macna2.mp4"]; //
var manuOps = ["cnc1.mp4","cnc2.mp4", "cnc3.mp4"]; // need videos
var medAid = ["macna1.mp4", "macna2.mp4"]; // new needs videos
var paramedic = ["paramedic1.mp4"]; // no videos not sure if this program still exists
var pharmTech = ["pharm1.mp4", "pharm2.mp4", "pharm3.mp4"]; //
var phlebotomy = ["Phleb1.mp4", "Phleb2.mp4"]; //
var plumbing = ["plumbing1.mp4", "plumbing2.mp4", "plumbing3.mp4"]; //
var welding = ["welding1.mp4", "welding2.mp4", "welding3.mp4"]; //
// var wildfire = ["Wildfire 1.mp4", "Wildfire 2.mp4", "Wildfire 3.mp4", "Wildfire 4.mp4", "Wildfire 5.mp4", "Wildfire 6.mp4", "Wildfire 7.mp4"];

if(sPage == "auto-technician.html"){
   video.src = "/ASSETS/videos/" + autoTech[Math.floor(Math.random() * autoTech.length)];

   $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/AUTOTECH.png)");
}
else if(sPage  == "automation-technician.html"){
   video.src = "/ASSETS/videos/" + automationTech[Math.floor(Math.random() * automationTech.length)];

   $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/AUTOTECH.png)");
}
else if(sPage == "cdl.html"){
    video.src = "/ASSETS/videos/" + cdl[Math.floor(Math.random() * cdl.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/CDL.png)");
}
else if(sPage == "nursing-assistant.html"){
    video.src = "/ASSETS/videos/" + macna[Math.floor(Math.random() * macna.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/NURSINGASSISTANT.png)");
}
else if(sPage == "cnc-machining.html"){
    video.src = "/ASSETS/videos/" + cnc[Math.floor(Math.random() * cnc.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/CNC.png)");
}
else if(sPage == "collision-repair.html"){
    video.src = "/ASSETS/videos/" + collision[Math.floor(Math.random() * collision.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/COLLISIONREPAIR.png)");
}
else if(sPage == "culinary.html"){
    video.src = "/ASSETS/videos/" + culinary[Math.floor(Math.random() * culinary.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/CULINARY.png)");
}
else if(sPage == "diesel-technology.html"){
    video.src = "/ASSETS/videos/" + diesel[Math.floor(Math.random() * diesel.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/DIESELTECH.png)");
}
else if(sPage == "dmd.html"){
    video.src = "/ASSETS/videos/" + dmd[Math.floor(Math.random() * dmd.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/DIGITALMEDIA.png)");
}
else if(sPage == "drafting-and-design.html"){
    video.src = "/ASSETS/videos/" + drafting[Math.floor(Math.random() * drafting.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/DRAFTING&DESIGN.png)");
}
else if(sPage == "electrical-apprenticeship.html"){
    video.src = "/ASSETS/videos/" + electrical[Math.floor(Math.random() * electrical.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/ELECTRICAL.png)");
}
else if(sPage == "emergency-medical-technician-advanced.html"){
    video.src = "/ASSETS/videos/" + emta[Math.floor(Math.random() * emta.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/EMT.png)");
}
else if(sPage == "emergency-medical-technician.html"){
    video.src = "/ASSETS/videos/" + emt[Math.floor(Math.random() * emt.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/EMT.png)");
}
else if(sPage == "hvac-technician.html"){
    video.src = "/ASSETS/videos/" + hvac[Math.floor(Math.random() * hvac.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/HVACR.png)");
}
else if(sPage == "information-technology.html"){
    video.src = "/ASSETS/videos/" + it[Math.floor(Math.random() * it.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/INFORMATIONTECH.png)");
}
else if(sPage == "manufacturing-operations.html"){
    video.src = "/ASSETS/videos/" + manuOps[Math.floor(Math.random() * manuOps.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/OPERATIONSMANAGEMENT.png)");
}
else if(sPage == "medication-aide.html"){
    video.src = "/ASSETS/videos/" + medAid[Math.floor(Math.random() * medAid.length)]; // find proper videos for this one

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/MEDICATIONAIDE.png)");
}
else if(sPage == "medical-assisting.html"){
    video.src = "/ASSETS/videos/" + macna[Math.floor(Math.random() * macna.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/MEDICALASSISTING.png)");
}
else if(sPage == "paramedic.html"){
    video.src = "/ASSETS/videos/" + paramedic[Math.floor(Math.random() * paramedic.length)];
    } 
else if(sPage == "practical-nursing.html"){
    video.src = "/ASSETS/videos/" + macna[Math.floor(Math.random() * macna.length)];
    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/PRACTICALNURSING.png)"); 
}
else if(sPage == "pharmacy-tech.html"){
    video.src = "/ASSETS/videos/" + pharmTech[Math.floor(Math.random() * pharmTech.length)]; 

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/PHARMACYTECH.png)");
}
else if(sPage == "phlebotomy.html"){
    video.src = "/ASSETS/videos/" + phlebotomy[Math.floor(Math.random() * phlebotomy.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/PHLEBOTOMY.png)");
}
else if(sPage == "plumbing-apprencticeship.html"){
    video.src = "/ASSETS/videos/" + plumbing[Math.floor(Math.random() * plumbing.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/PLUMBING.png)");
}
else if(sPage == "welding.html"){
    video.src = "/ASSETS/videos/" + welding[Math.floor(Math.random() * welding.length)];

    $(".section-information .row").css("background-image", "url(/ASSETS/COURSEINFO/WELDING.png)");
}
// AM STEM videos
else if(sPage == "nursing-assistant-am.html") {
    video.src = "/ASSETS/videos/" + macna[Math.floor(Math.random() * macna.length)];
}
else if(sPage == "emergency-medical-technician-am.html") {
    video.src = "/ASSETS/videos/" + emt[Math.floor(Math.random() * emt.length)];
}
else if(sPage == "information-technology-am.html") {
    video.src = "/ASSETS/videos/" + it[Math.floor(Math.random() * it.length)];
}
else if(sPage == "dmd-design-am.html") {
    video.src = "/ASSETS/videos/" + dmd[Math.floor(Math.random() * dmd.length)];
}
else if(sPage == "dmd-developer-am.html") {
    video.src = "/ASSETS/videos/" + dmd[Math.floor(Math.random() * dmd.length)];
}
else if(sPage == "pre-engineering-am.html") {
    video.src = "/ASSETS/videos/" + cnc[Math.floor(Math.random() * cnc.length)];
}
else if(sPage == "construction-am.html") {
    video.src = "/ASSETS/videos/" + hvac[Math.floor(Math.random() * hvac.length)];
}

//end spencers random video function
// Spencer's mobile navbar fix





