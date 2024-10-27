
(function($){
	$(function(){


        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });



        $('.mega-menu').click(function () {
            $("body").toggleClass("btnShown");
        });
    
        // Iterate over each 'li' that contains a '.sub_menu'
        $(".sub-nav").each(function () {
            var $$this = $(this);
    
            // On click of the sub-nav link, toggle 'has-sub-nav' class and the sub menu
            $$this.find('.menu-link').click(function (e) {
                e.preventDefault();
                
                // Toggle 'has-sub-nav' class dynamically on each click
                $$this.toggleClass('has-sub-nav');
                
                // Toggle visibility of the sub_menu with slide effect
                $$this.find('.sub_menu').slideToggle();
            });
        });






        //FAQs Accordion Function
    
        

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
        


        
        $('.thumbnail:first').addClass('selected');
    
        // Change main image on click
        $('.thumbnail').on('click', function(e) {
            e.preventDefault(); // Prevent default action
            
            var clicked = $(this);
            var newSelection = clicked.data('big'); // Get the new image path
            var $img = $('<img>', { src: newSelection }); // Create a new image element
            
            // Change selected state
            clicked.siblings().removeClass('selected');
            clicked.addClass('selected');
            
            // Update the primary image
            $('.primary').empty().append($img.hide().fadeIn('slow'));
        });
        



        if ($('#home-product-container').length) {
            $('#home-product-container').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                dots: true,   
                navigator:true,
                responsive: [
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 500,
                            swipe: true,
                            arrows: false,

                        }
                    },
                    {
                            breakpoint: 780,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                autoplay: false,
                                speed: 500,
                                swipe: true,
                                arrows: false,
    
                            }
                    },
                    {
                            breakpoint: 991,
                            settings: 'unslick'
                    }
                ]
            })
        
            $(window).on('resize', function () {
                $('#home-product-container').slick('resize');
                });
        }

        if ($('.partner-items').length) {
            $('.partner-items').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                dots: true, 
                navigator:true,
                responsive: [
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 500,
                            swipe: true,
                            arrows: false,

                        }
                    },
                    {
                            breakpoint: 780,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                autoplay: false,
                                speed: 500,
                                swipe: true,
                                arrows: false,
    
                            }
                    },
                    {
                            breakpoint: 991,
                            settings: 'unslick'
                    }
                ]
            })
        
            $(window).on('resize', function () {
                $('.partner-items').slick('resize');
                });
        }




        if ($('.history-slider').length) {
            function initSlickSlider() {
                if ($(window).width() > 1024) {  // Only initialize slider on screens wider than 1024px
                    if (!$('.history-slider').hasClass('slick-initialized')) {  // Prevent multiple initializations
                        $('.history-slider').slick({
                            slidesToShow: 4,  // Show 3 slides
                            slidesToScroll: 1,  // Scroll 1 slide at a time
                            dots: false,  // Disable dots navigation
                            arrows: true,  // Enable navigation arrows
                            mobileFirst: true
                        });
                    }
                } else {
                    if ($('.history-slider').hasClass('slick-initialized')) {
                        $('.history-slider').slick('unslick');  // Destroy the slider on screens smaller than 1024px
                    }
                }
            }
        
            // Initialize slider on document ready
            $(document).ready(function() {
                initSlickSlider();
            });
        
            // Reinitialize slider on window resize
            $(window).on('resize', function () {
                initSlickSlider();
            });
        }
        

        $('.sub-item > a').click(function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            $(this).next('.mega-menu').slideToggle(); // Toggle the mega menu
        });








    }); //end ready funtion

    
  

   
    

	

})(jQuery)

