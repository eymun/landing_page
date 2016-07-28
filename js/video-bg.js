$(function(){

  'use strict';

  /***************************************************************************/
  /* VIDEO BACKGROUND */
  /***************************************************************************/
  var bgVideo= function(){
    if(matchMedia('(max-width: 639px)').matches) {
      $('#video_background').hide();
    }
    else{
      $('#video_background').show();
    }
  }



  $(window).resize(function(){

    /* VIDEO BACKGROUND */
    bgVideo();

  });

  $(document).ready(function() {
    $('body').css({
      "background"        : "url('video/bg_video.jpg') center fixed",
      "background-repeat" : "no-repeat",
      "background-size"   : "cover"
    });

    if(matchMedia('(min-width: 640px)').matches) {
      var videobackground = new $.backgroundVideo($('body'), {
          "align": "centerXY",
          "width": 1280,
          "height": 720,
          "path": "video/",
          "filename": "bg_video",
          "types": ["mp4","ogv","webm"]
      });
    }
    
    /* VIDEO BACKGROUND */
    bgVideo();

  });
});
