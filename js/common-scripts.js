
(function($){
	$(function(){


        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });




        $('.mega-menu').click(function () {
            $("body").toggleClass("btnShown");
        });

        $(".sub_menu").parent("li").addClass("has-sub-nav");
        $(".has-sub-nav").each(function () {
            var $$this = $(this);
            
            if ($(window).width() > 1024) {
                $$this.find('> a').mouseenter(function () {
                    $$this.find('.sub_menu').fadeIn();
                })
                $$this.mouseleave(function () {
                    $('.sub_menu').fadeOut();
                })
            }
            if ($(window).width() < 1025) {
                $$this.find('> a').click(function (e) {
                    e.preventDefault();
                    $$this.find('.sub_menu').slideToggle();
                })
               
            }
            
            
        })









        //FAQs Accordion Function
        $(".accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > h5").on("click touch", function(){
                $(".accordion-item").removeClass("active")
                $(".accordion-item .accordion-content").slideUp();
                if($this.find(".accordion-content:visible").length){
                    $(".accordion-item").removeClass("active")
                    $(".accordion-item .accordion-content").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".accordion-item .accordion-content").slideUp();
                    $this.find(" > .accordion-content").slideDown();
                }
            })
        })
        

        // Tab 
        $('.tab-wrap .tab-items').hide();
        $('.tab-wrap .tab-items:first').show();
        $('.tabs-nav li:first').addClass('tab-active');
        
        // Change tab class and display content
        $('.tabs-nav a').on('click', function(event){
          event.preventDefault();
          $('.tabs-nav li').removeClass('tab-active');
          $(this).parent().addClass('tab-active');
          $('.tab-wrap .tab-items').hide();
          $($(this).attr('href')).show();
        });


       
   
              
        if ($(window).width() < 767) {
            $('.best-sellers-slider').slick({
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
                navigation: false,
                speed: 300,
                dots: true,
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
        


        if ($(window).width() < 767) {
            $('.reviews-slider').slick({
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
                dots: true,
                arrows:false,
                navigation: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
        


        
  
        $('.cart-trigger').click(function (e) {
            e.preventDefault()
            $("body").toggleClass("cartShown");
            $("html").toggleClass("scrollOff");

            $('.cart-close').click(function () {
                $("body").removeClass("cartShown");
                $("html").removeClass("scrollOff");
            });
        });

        $('.cart').click(function () {
            $("body").removeClass("cartShown");
            $("html").removeClass("scrollOff");
        });
        $('.cart-inner').click(function (e) {
            e.stopPropagation();
        });
        

  



    }); //end ready funtion

    
  
      
    document.addEventListener("DOMContentLoaded", function() {
        // Get video elements
        var thumbnail = document.querySelector('.play-icn');
        var video = document.querySelector('.video-player');
    
        // Hide video initially
        video.style.display = 'none';
    
        // Add click event listener to thumbnail
        thumbnail.addEventListener('click', function() {
            // Toggle video display
            if (video.style.display === 'none' || video.style.display === '') {
                video.style.display = 'block';
                // Play video
                video.play();
            } else {
                // Pause video
                video.pause();
            }
        });
    });
    

	

})(jQuery)

