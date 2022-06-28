/*===Preloader===*/

$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/*==Team Section==*/ 
$(document).ready(function(){
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 600,
        loop: true,
        autoplayHoverPause: true, 
        nav: true,
        dots: false,
        navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>']
    });
  });

  /*==Responsive Tabs==*/

$(function() { 
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
 });

 /*==Partners Section==*/
$(function() { 
     $('#partners-list').owlCarousel({
         items: 5,
         autoplay:false,
         smartSpeed: 700,
         loop: true,
         autoplayHoverPause: true,
         nav:true,
         dots:false,
         navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>']
     });
  });

 /*==NEW ZEALAND MAP==

$(window).on('load', function(){
     //Map Variables
     var addressString = "169 Madras St, Christchurch, New Zealand";
     var myLating = {lat: -43.537390, lng: 172.642480 };

     //Render google map
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 11,
        center: myLating
    });

    //Add Marker
    var marker = new google.maps.Marker({
        position: myLating,
        map : map,
        title: "Tamariki Marae!",
    });5
 });

 /*==AUSTRALIA MAP
 $(window).on('load', function(){
    //Map Variables
    var addressString = "3 Darling St, Canberra ACT ACT 2600, Australia";
    var myLating = {lat: -35.310040, lng: 149.132030};

    //Render google map
   var map = new google.maps.Map(document.getElementById("map-2"),{
       zoom: 11,
       center: myLating
   });

   //Add Marker
   var marker = new google.maps.Marker({
       position: myLating,
       map : map
   });
}); */


//Show back to top button
$(function () {
    showHideNav();
    $(window).scroll(function(){
        showHideNav();
    });

    function showHideNav(){
        if($(window).scrollTop() > 100){
            $('#back-to-top').fadeIn();
        }  else {
            $('#back-to-top').fadeOut();
        };
    };
});





















