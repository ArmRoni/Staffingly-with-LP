jQuery(window).scroll(function(){
  if (jQuery(this).scrollTop() > 150) {
     jQuery('.header').addClass('header-position');
  } else {
     jQuery('.header').removeClass('header-position');
  }
});

jQuery(function(){
  jQuery('#menu-nav').slicknav({
    label: '',
    allowParentLinks:false,
    openedSymbol:"",
    closedSymbol:"",
    prependTo:'#menu_holder'
  });
});
(jQuery); 

jQuery(".nav-toggler ").click(function(){
  jQuery(this).toggleClass("active");
  jQuery("#menu_holder").toggleClass("mobile-menu-open");
  jQuery(".header").toggleClass("header-bg");
  jQuery("body").toggleClass("overflow-hidden");

});

  jQuery('.our-employes-slider').owlCarousel({
        loop:true,
        responsiveClass:true,
        autoplay:true,
        margin:30,
        nav:false,
        dots:false,
        autoplayTimeout:5000,
          responsive:{
              0:{
                items:1,
              },
              500:{
                items:3,
              },
              991:{
                items:5,
              },
              1366:{
                items:6,
              },
              1480:{
                items:8,
              }
          }
        });

        jQuery('.employes-slider-2').owlCarousel({
          loop:true,
          responsiveClass:true,
          autoplay:true,
          margin:30,
          nav:false,
          dots:false,
          autoplayTimeout:5000,
            responsive:{
                0:{
                  items:1,
                },
                500:{
                  items:3,
                },
                991:{
                  items:5,
                },
                1366:{
                  items:6,
                },
                1480:{
                  items:7,
                }
            }
          });

        jQuery('.vidoe-slider').owlCarousel({
          loop:true,
          responsiveClass:true,
          autoplay:true,
          margin:30,
          nav:true,
          dots:false,
          autoplayTimeout:5000,
            responsive:{
                0:{
                  items:1,
                },
                768:{
                  items:2,
                },
                1200:{
                  items:3,
                }
            }
          });


          jQuery('.seenon-slider').owlCarousel({
            loop:true,
            responsiveClass:true,
            autoplay:true,
            margin:30,
            nav:true,
            dots:false,
            autoplayTimeout:4000,
              responsive:{
                  0:{
                    items:1,
                  },
                  768:{
                    items:2,
                  },
                  1200:{
                    items:3,
                  }
              }
            });

            jQuery(document).ready(function() {
              var owl = jQuery('.authorization-slider').owlCarousel({
                  loop: true,
                  responsiveClass: true,
                  autoplay: true,
                  animateOut: 'fadeOut',
                  animateIn: 'fadeIn',
                  margin: 1,
                  nav: false,
                  dots: false,
                  touchDrag : false,
                   mouseDrag : false,
                  autoplayTimeout: 4000,
                  responsive: {
                      0: {
                          items: 1
                      }
                  }
              });
          
              // Trigger 'next' on carousel when clicking the prior-authorization-button div
              jQuery('.prior-authorization-button').click(function(e) {
                  e.preventDefault(); // Prevent default anchor behavior
                  owl.trigger('next.owl.carousel');
              });
				
			  jQuery('.service-contnet-wrap p iframe').parent('p').addClass('cus-youtube-video');
          });
          
  

jQuery(document).ready(function() {
  // Function to animate the counters
  function animateCounters() {
      jQuery('h2 span').each(function() {
          var $this = jQuery(this),
              target = +$this.text(); // Get the current number inside the <span>
          $this.text(0); // Set the initial counter value to 0
          
          jQuery({ countNum: 0 }).animate({
              countNum: target
          },
          {
              duration: 2000, // Duration in milliseconds
              easing: 'swing',
              step: function() {
                  $this.text(Math.floor(this.countNum)); // Update the number
              },
              complete: function() {
                  $this.text(target); // Ensure the final value is the target number
              }
          });
      });
  }

  // Set up the Intersection Observer
  const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounters(); // Start counting when the div is in view
              observer.unobserve(entry.target); // Stop observing once animation starts
          }
      });
  });

  // Observe the project counter div
  const targetDiv = document.querySelector('.project-complated-counter');
  if (targetDiv) {
      observer.observe(targetDiv);
  }
});



jQuery('.used-software-slider').owlCarousel({
  loop:true,
  responsiveClass:true,
  autoplay:true,
  margin:40,
  dots:false,
  nav:false,
  autoplayTimeout:5000,
    responsive:{
        0:{
          items:1,
        },
        768:{
          items:3,
        },
        1200:{
          items:2,
        },
        1300:{
          items:3,
        },
        1400:{
          items:4,
        }
    }
  });


  jQuery('.client-video-slider').owlCarousel({
    loop:true,
    responsiveClass:true,
    autoplay:true,
    margin:10,
    dots:false,
    nav:true,
    autoplayTimeout:5000,
      responsive:{
          0:{
            items:1,
          },
          768:{
            items:2,
          }    
        }
    });


  jQuery('.pepole-reviw-slider').owlCarousel({
    loop:true,
    responsiveClass:true,
    autoplay:true,
    margin:10,
    dots:false,
    nav:true,
    autoplayTimeout:5000,
      responsive:{
          0:{
            items:1,
          },
          768:{
            items:1,
          }    
       }
    });
  
  
// counter js ================

document.addEventListener('DOMContentLoaded', function () {
  // var waypoint = new Waypoint({
  //     element: document.getElementById('counterTrigger'),
  //     handler: function(direction) {
  //         // Customer counter
  //         const customerCounter = document.getElementById('customerCounter');
  //         const customerIncPerDay = 2000; // Adjusted increment
  //         const customerFromDate = '10/10/2024'; // Adjusted start date
  //         startCounting(customerCounter, countTotalNumber(customerFromDate, customerIncPerDay, customerCounter));

  //         // Prior Authorization counter
  //         const priorCounter = document.getElementById('PriorCounter');
  //         const priorIncPerDay = 100; // Adjusted increment
  //         const priorFromDate = '10/25/2024'; 
  //         startCounting(priorCounter, countTotalNumber(priorFromDate, priorIncPerDay, priorCounter));

  //         // Data Entry counter
  //         const dataCounter = document.getElementById('DataCounter');
  //         const dataIncPerDay = 2000; // Adjusted increment
  //         const dataFromDate = '10/10/2024'; 
  //         startCounting(dataCounter, countTotalNumber(dataFromDate, dataIncPerDay, dataCounter));

  //         // Medical Billing counter
  //         const medicalCounter = document.getElementById('MedicalCounter');
  //         const medicalIncPerDay = 2500; // Adjusted increment
  //         const medicalFromDate = '10/25/2024'; 
  //         startCounting(medicalCounter, countTotalNumber(medicalFromDate, medicalIncPerDay, medicalCounter));

  //         // Administrative counter
  //         const administrativeCounter = document.getElementById('AdministrativeCounter');
  //         const administrativeIncPerDay = 3000; // Adjusted increment
  //         const administrativeFromDate = '10/10/2024'; 
  //         startCounting(administrativeCounter, countTotalNumber(administrativeFromDate, administrativeIncPerDay, administrativeCounter));
  //     }
  // });



  const counterTrigger = document.getElementById('counterTrigger');

  if (counterTrigger) { // Check if element exists
    var waypoint = new Waypoint({
      element: counterTrigger,
      handler: function (direction) {
        // Customer counter
        const customerCounter = document.getElementById('customerCounter');
        const customerIncPerDay = 2000; 
        const customerFromDate = '10/10/2024';
        startCounting(customerCounter, countTotalNumber(customerFromDate, customerIncPerDay, customerCounter));

        // Prior Authorization counter
        const priorCounter = document.getElementById('PriorCounter');
        const priorIncPerDay = 100;
        const priorFromDate = '10/25/2024';
        startCounting(priorCounter, countTotalNumber(priorFromDate, priorIncPerDay, priorCounter));

        // Data Entry counter
        const dataCounter = document.getElementById('DataCounter');
        const dataIncPerDay = 2000;
        const dataFromDate = '10/10/2024';
        startCounting(dataCounter, countTotalNumber(dataFromDate, dataIncPerDay, dataCounter));

        // Medical Billing counter
        const medicalCounter = document.getElementById('MedicalCounter');
        const medicalIncPerDay = 2500;
        const medicalFromDate = '10/25/2024';
        startCounting(medicalCounter, countTotalNumber(medicalFromDate, medicalIncPerDay, medicalCounter));

        // Administrative counter
        const administrativeCounter = document.getElementById('AdministrativeCounter');
        const administrativeIncPerDay = 3000;
        const administrativeFromDate = '10/10/2024';
        startCounting(administrativeCounter, countTotalNumber(administrativeFromDate, administrativeIncPerDay, administrativeCounter));
      }
    });
  } 

  // Counter function
  function startCounting(counter, totalCount) {
      const updateCount = () => {
          const target = +totalCount;
          const count = +counter.innerText;
          const inc = target / 600;

          if (count < target) {
              splitCounter(counter, Math.round(count + inc));
              setTimeout(updateCount, 1);
          } else {
              splitCounter(counter, Math.round(target));
          }
      };
      updateCount();
  }

  function splitCounter(counter, target) {
      var targetSplit = target.toString().split("");
      counter.innerHTML = '<span>' + targetSplit.join('</span><span>') + '</span>';
  }

  function getTotalNumbersOfDays(fromDate) {
      const oneDay = 24 * 60 * 60 * 1000;
      const firstDate = new Date(fromDate);
      const secondDate = new Date();
      return Math.abs((firstDate - secondDate) / oneDay);
  }

  function countTotalNumber(fromDate, incPerDay, counter) {
      let countFromDate = parseFloat(getTotalNumbersOfDays(fromDate)) * parseInt(incPerDay);
      let currentDate = new Date();
      let todayPastMinute = (currentDate.getHours() * 60) + currentDate.getMinutes();
      countFromDate = countFromDate + Math.ceil((incPerDay / 1440) * todayPastMinute);
      return Math.round(countFromDate + parseInt(counter.getAttribute('data-target')));
  }
});



// lp page and main page faq accordion js same
// ==========accordion js=============
jQuery(document).ready(function () {
  jQuery(".accordion-box").each(function () {
     jQuery(this).find(".accordion-item:first-child .accordion-header").addClass("active");
     jQuery(this).find(".accordion-item:first-child .accordion-content").show();
  });

  jQuery(".accordion-header").click(function () {
     const parentAccordionBox = jQuery(this).closest(".accordion-box");
     const clickedContent = jQuery(this).next();
     const isContentVisible = clickedContent.is(":visible");
     parentAccordionBox.find(".accordion-content").not(clickedContent).slideUp();
     parentAccordionBox.find(".accordion-header").not(jQuery(this)).removeClass("active");
     clickedContent.slideToggle({
        duration: 400,
        complete: () => {
           const headerTop = jQuery(this).offset().top;
           const viewportTop = jQuery(window).scrollTop();
           const viewportBottom = viewportTop + jQuery(window).height();
           if (headerTop < viewportTop || headerTop > viewportBottom) {
              jQuery('html, body').animate({ scrollTop: headerTop - 70 }, 500);
           }
        }
     });
     jQuery(this).toggleClass("active");
  });
});