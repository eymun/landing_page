 $(function(){

    'use strict';

    /**********************************************************/
    /*  MAP BUTTON  (CLICK AND SHOW MAP) */
    /**********************************************************/
    window['changeImage'] = function() {
        var width = $(window).width();
        //if(width < 768){
        //    return;
        //}
        $('#contact_background').slideToggle('show');

        var image = document.getElementById('myMap');

        if (image.src.match("map")) {
            image.src = "images/exit.png";
        }
        else {
            image.src = "images/map.png";
        }
    }




    /***************************************************************************/
    /* FULLSCREEN HOME SECTION */
    /***************************************************************************/
    var fullscreen_home = function(){
      if(matchMedia( "(min-width: 768px) and (min-height: 500px)" ).matches) {
          var height = $(window).height() + "px";
          $(".header-overlay").css('min-height', height);
      }
    }




    /**********************************************************/
    /*  STICKY NAVBAR */
    /**********************************************************/
    if ( matchMedia( 'only screen and (min-width: 768px)' ).matches ) {
       $(document).on('scroll', function() {
          var scrollPos = $(this).scrollTop();

          if( scrollPos > 150 ) {
             $('.navbar-fixed-top').removeClass('navbar-home');
          }
          else {
             $('.navbar-fixed-top').addClass('navbar-home');
          }
       });
    }




    /**************************************
       PRELOADER
    ***************************************/
    // makes sure the whole site is loaded
    $(window).load(function() {
        // will first fade out the loading animation
        $(".bubblingG").fadeOut();
        //then background color will fade out slowly
        $(".spinner-wrapper").delay(200).fadeOut("slow");
    });




    $(window).resize(function(){
        fullscreen_home();
    });



    $(document).ready(function() {
        fullscreen_home();
        var top = Math.max($(window).height() / 2 - $("#header_body")[0].offsetHeight / 2, 0);
        $("#header_body").css('padding-top', top + "px").css('padding-bottom', top + "px");
        $("#header_body").css('position', 'relative');


        /**********************************************************/
        /* CAROUSEL SLIDER -APP SCREENS */
        /**********************************************************/
        var owl = $("#slider");

        /* TESTIMONIAL SYNC WITH CLIENTS */
        owl.owlCarousel({
            items : 5, //10 items above 1000px browser width
            itemsDesktop : [1200, 4], //5 items between 1000px and 901px
            itemsDesktopSmall     : [992,3], // 3 items betweem 992px and 769px
            itemsTablet       : [768,2], // 3 items between 768 and 601
            itemsTabletSmall       : [480,1], // 2 items in widen mobile device
            itemsMobile       : [320,1], // 1 items in any small mobile device
            pagination:true,
            responsiveRefreshRate : 100
        });




        /**********************************************************/
        /* CAROUSEL SLIDER - FOR OUR TEAM */
        /**********************************************************/
        var owl = $("#our-team");

        /* TESTIMONIAL SYNC WITH CLIENTS */
        owl.owlCarousel({
            items : 5, //10 items above 1000px browser width
            itemsDesktop : [1200, 4], //5 items between 1000px and 901px
            itemsDesktopSmall     : [992,3], // 3 items betweem 992px and 769px
            itemsTablet       : [768,2], // 3 items between 768 and 601
            itemsTabletSmall       : [480,1], // 2 items in widen mobile device
            itemsMobile       : [320,1], // 1 items in any small mobile device
            pagination:true,
            responsiveRefreshRate : 100
        });






        /**********************************************************/
        /*    MAP HEIGHT   */
        /**********************************************************/
        var mapHeight = $('.contact_background').height();
        $("#map").css('min-height', mapHeight);
        $(".contact_background").css('margin-top', -Math.abs(mapHeight));
        $(".btn-cd-top").css('margin-top', -Math.abs(mapHeight+35));





        /**********************************************************/
        /*   FANCY BOX  */
        /**********************************************************/
        $(".fancybox-thumbs").fancybox();

        /*
         *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
         */

        $('.fancybox-thumbs').fancybox({
            prevEffect : 'none',
            nextEffect : 'none',

            closeBtn  : false,
            arrows    : false,
            nextClick : true,

            helpers : {
                thumbs : {
                    width  : 50,
                    height : 50
                }
            }
        });

        /*
         *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
        */
        $('.fancybox-media').
        attr('rel', 'media-gallery').
        fancybox({
            openEffect : 'none',
            closeEffect : 'none',
            prevEffect : 'none',
            nextEffect : 'none',

            arrows : false,
            helpers : {
                media : {},
                buttons : false
            }
        });





        /* =================================
        ===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
        =================================== */
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var msViewportStyle = document.createElement('style')
            msViewportStyle.appendChild(
                document.createTextNode(
                    '@-ms-viewport{width:auto!important}'
                )
            )
            document.querySelector('head').appendChild(msViewportStyle);
        }

    });





    /***************************************************************************/
    /* PARALLAX */
    /***************************************************************************/
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });




    /***************************************************************************/
    /* CUSTOMIZABLE SCROLLBAR */
    /***************************************************************************/
    $("html").niceScroll({
        mousescrollstep: 40,
        cursorcolor: "#00B3FE",
        zindex: 9999,
        cursorborder: "none",
        cursorwidth: "6px",
        cursorborderradius: "none"
    });


    /* SUBCRIBE  BUTTON SCROLL FROM HOME PAGE */
    $('.btn-scroll').localScroll({
        offset: 0 //Height of Navigation Bar
    });

 

    /***************************************************************************/
    /* MAILCHIMP ES NEWSLETTER SUBSCRIPTION */
    /***************************************************************************/
    $(".mailchimp-es-subscribe").ajaxChimp({
        callback: mailchimpCallback,
        url: "http://eymun.us14.list-manage.com/subscribe/post?u=5c795cae9235fd09d97fc7e90&amp;id=0d0c99d589" // Replace your mailchimp post url inside double quote "".
    });

    function mailchimpCallback(resp) {
         if(resp.result === 'success') {
            $('.subscription-success')
                .html('<i class="fa fa-check"></i>' + "&nbsp;" + resp.msg)
                .delay(500)
                .fadeIn(1000);

            $('.subscription-failed').fadeOut(500);

        } else if(resp.result === 'error') {
            $('.subscription-failed')
                .html('<i class="fa fa-close"></i>' + "&nbsp;" + resp.msg)
                .delay(500)
                .fadeIn(1000);

            $('.subscription-success').fadeOut(500);
        }
    };


    // Function for email address validation
    function isValidEmail(emailAddress) {

    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        return pattern.test(emailAddress);

    };



    /***************************************************************************/
    /* LOCAL NEWSLETTER SUBSCRIPTION */
    /***************************************************************************/
    $("#local-subscribe").submit(function(e) {
        e.preventDefault();
        var data = {
            email: $("#subscriber-email").val()
        };

        if ( isValidEmail(data['email']) ) {
            $.ajax({
                type: "POST",
                url: "subscribe/subscribe.php",
                data: data,
                success: function() {
                    $('.subscription-success').fadeIn(1000);
                    $('.subscription-failed').fadeOut(500);
                }
            });
        } else {
            $('.subscription-failed').fadeIn(1000);
            $('.subscription-success').fadeOut(500);
        }

        return false;
    });



    /***************************************************************************/
    /* CONTACT FORM */
    /***************************************************************************/
    $("#contact").submit(function(e) {
        e.preventDefault();
        var data = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val()
        };

        if ( isValidEmail(data['email']) && (data['message'].length > 1) && (data['name'].length > 1) ) {
            $.ajax({
                type: "POST",
                url: "https://formspree.io/eymunapp@eymun.com",
                data: data,
                dataType: "json",
                success: function() {
                    $('.email-success').delay(500).fadeIn(1000);
                    $('.email-failed').fadeOut(500);
                }
            });
        } else {
            $('.email-failed').delay(500).fadeIn(1000);
            $('.email-success').fadeOut(500);
        }

        return false;
    });



    /***************************************************************************/
    /* WOW ANIMATION */
    /***************************************************************************/
    var wow = new WOW({ mobile: false });

    wow.init();



    /***************************************************************************/
    /* SCREENSHOT SLIDER */
    /***************************************************************************/
    var screenshots = $("#owl-screenshots");

    screenshots.owlCarousel({
        items : 4, // 4 items above 1201px browser width
        itemsDesktop : [1200,4], // 4 items between 1200px and 993px
        itemsDesktopSmall : [992,3], // 3 items betweem 992px and 769px
        itemsTablet: [768,3], // 3 items between 768 and 601
        itemsTabletSmall : [480,2], // 2 items in widen mobile device
        itemsMobile : [320,1] // 1 items in any small mobile device
    });





    /**********************************************************/
    /* COUNT DOWN */
    /**********************************************************/

    $('.count_down').countdown({
        end_time: "2016/06/21 14:27:28 +0600",
        wrapper: function(unit){
            var wrpr = $('<div></div>').
                addClass(unit.toLowerCase()+'_wrapper').
                addClass('col-sm-3').
                addClass('col-xs-6').
                addClass('col-md-3');
            var background = $('<div></div>').
                addClass('background').
                addClass('time').
                appendTo(wrpr);

            $('<span class="counter style_all"></span>').appendTo(background);
            $('<span class="title">'+unit+'</span>').appendTo(background);
            return wrpr;
        }
    });





    /***************************************************************************/
    /* COLLAPSE ICON CHANGE */
    /***************************************************************************/
    var link = $('.panel-heading .panel-title a'),
    r = $('.panel:first-child .panel-heading .panel-title a');
    r.addClass('rotate');
    link.click(function(){

        if($(this).hasClass('rotate')){
            $(this).removeClass('rotate');
        }
        else{
            link.removeClass('rotate');
            $(this).addClass('rotate');
        }

    });






    /**********************************************************/
    /*   GOOGLE MAP  */
    /**********************************************************/
    function init_map() {
        var myLocation = new google.maps.LatLng(-22.9111721,-43.5884176);

        var mapOptions = {
          center: myLocation,
          zoom: 7,
          mapTypeId: 'hybrid',
          mapTypeControl: true,  /*This option will hide map type.*/
          draggable: true,   /*This option is used for disabling drag.*/
          scaleControl: false,   /*This option is used for disable zoom by scale.*/
          scrollwheel: false,   /*This option is used for disable zoom on mouse.*/
          navigationControl: true,   /**/
          streetViewControl: true   /**/

        };

        // var marker = new google.maps.Marker({
        //     position: myLocation,
        //     title:"Curicó"});

        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        //marker.setMap(map);
    }
    google.maps.event.addDomListener(window, 'load', init_map);



});
