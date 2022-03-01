$("#footer .up i").click(function(){
  $("html,body").animate({
    scrollTop: 0
  })
})
    var typed = new Typed('.ami', {
        /**
         * @property {array} strings strings to be typed
         * @property {string} stringsElement ID of ami containing string children
         */
        strings: [
          'Expert Web design',
          'Expert Web development',
          'Expert Figma Design',
          'Expert PSD To html Design',
          'Have a great day!'
        ],
        typeSpeed: 90,
        smartBackspace: true,  
        loop: true,
        loopCount: Infinity, 
        backSpeed: 0,
    });

    $(document).ready(function(){
      // set up hover panels
      // although this can be done without JavaScript, we've attached these events
      // because it causes the hover to be triggered when the element is tapped on a touch device
      $('.hover').hover(function(){
        $(this).addClass('flip');
      },function(){
        $(this).removeClass('flip');
      });
    });

    $(window).scroll(function(){
      if($(window).scrollTop() > 300){
        $("nav").addClass("fix");
      }else{
        $("nav").removeClass("fix");
      }
    })