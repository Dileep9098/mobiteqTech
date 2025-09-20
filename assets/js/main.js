/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : AbyM Technology - It Solution Template
    Version         : 1.0
    
* ================================================================= */
(function ($) {
	"use strict";

	$(document).ready(function () {
		/* ==================================================
            # Wow Init
         ===============================================*/
		var wow = new WOW({
			boxClass: "wow", // animated element css class (default is wow)
			animateClass: "animated", // animation css class (default is animated)
			offset: 0, // distance to the element when triggering the animation (default is 0)
			mobile: true, // trigger animations on mobile devices (default is true)
			live: true, // act on asynchronously loaded content (default is true)
		});
		wow.init();

		/* ==================================================
            # Tooltip Init
        ===============================================*/
		$('[data-toggle="tooltip"]').tooltip();

		/* ==================================================
            # Youtube Video Init
         ===============================================*/
		$(".player").mb_YTPlayer();

		/* ==================================================
            # Slide Animated Button
        ===============================================*/
		var $slideLink = $(".text-slide"),
			slideLinkText = $slideLink.find("span")[0];

		$slideLink.on("mouseenter", linkOver);

		function linkOver() {
			TweenLite.to(slideLinkText, 0.3, {
				y: -25,
				ease: Cubic.easeIn,
				onComplete: function () {
					TweenLite.fromTo(
						slideLinkText,
						0.3,
						{
							y: 25,
						},
						{
							y: 0,
							ease: Cubic.easeOut,
						}
					);
				},
			});
		}

		/* ==================================================
            # Scrolla active
        ===============================================*/
		$(".animate").scrolla();

		/* ==================================================
            # imagesLoaded active
        ===============================================*/
		$("#gallery-masonary,.blog-masonry").imagesLoaded(function () {
			/* Filter menu */
			$(".mix-item-menu").on("click", "button", function () {
				var filterValue = $(this).attr("data-filter");
				$grid.isotope({
					filter: filterValue,
				});
			});

			/* filter menu active class  */
			$(".mix-item-menu button").on("click", function (event) {
				$(this).siblings(".active").removeClass("active");
				$(this).addClass("active");
				event.preventDefault();
			});

			/* Filter active */
			var $grid = $("#gallery-masonary").isotope({
				itemSelector: ".gallery-item",
				percentPosition: true,
				masonry: {
					columnWidth: ".gallery-item",
				},
			});

			/* Filter active */
			$(".blog-masonry").isotope({
				itemSelector: ".blog-item",
				percentPosition: true,
				masonry: {
					columnWidth: ".blog-item",
				},
			});
		});

		/* ==================================================
            # Fun Factor Init
        ===============================================*/
		$(".timer").countTo();
		$(".fun-fact").appear(
			function () {
				$(".timer").countTo();
			},
			{
				accY: -100,
			}
		);

		/* ==================================================
            # Hover Active Init
        ===============================================*/
		$(".style-one-item").on("mouseenter", function () {
			$(this)
				.addClass("active")
				.parent()
				.siblings()
				.find(".style-one-item")
				.removeClass("active");
		});

		$(".gallery-mixed-item").on("mouseenter", function () {
			$(this)
				.addClass("active")
				.parent()
				.siblings()
				.find(".gallery-mixed-item")
				.removeClass("active");
		});

		/* ==================================================
            # Magnific popup init
         ===============================================*/
		$(".popup-link").magnificPopup({
			type: "image",
			// other options
		});

		$(".popup-gallery").magnificPopup({
			type: "image",
			gallery: {
				enabled: true,
			},
			// other options
		});

		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
		});

		$(".magnific-mix-gallery").each(function () {
			var $container = $(this);
			var $imageLinks = $container.find(".item");

			var items = [];
			$imageLinks.each(function () {
				var $item = $(this);
				var type = "image";
				if ($item.hasClass("magnific-iframe")) {
					type = "iframe";
				}
				var magItem = {
					src: $item.attr("href"),
					type: type,
				};
				magItem.title = $item.data("title");
				items.push(magItem);
			});

			$imageLinks.magnificPopup({
				mainClass: "mfp-fade",
				items: items,
				gallery: {
					enabled: true,
					tPrev: $(this).data("prev-text"),
					tNext: $(this).data("next-text"),
				},
				type: "image",
				callbacks: {
					beforeOpen: function () {
						var index = $imageLinks.index(this.st.el);
						if (-1 !== index) {
							this.goTo(index);
						}
					},
				},
			});
		});

		/* ==================================================
            Nice Select Init
         ===============================================*/
		$(".consultation-form select").niceSelect();
		$(".appoinment-style-two select").niceSelect();

		/* ==================================================
            _Progressbar Init
         ===============================================*/
		function animateElements() {
			$(".progressbar").each(function () {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find(".circle").attr("data-percent");
				var animate = $(this).data("animate");
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data("animate", true);
					$(this)
						.find(".circle")
						.circleProgress({
							// startAngle: -Math.PI / 2,
							value: percent / 100,
							size: 160,
							thickness: 13,
							lineCap: "round",
							emptyFill: "rgba(255, 255, 255, 1)",
							fill: {
								gradient: ["#104cba", "#00ccff"],
							},
						})
						.on(
							"circle-animation-progress",
							function (event, progress, stepValue) {
								$(this)
									.find("strong")
									.text((stepValue * 100).toFixed(0) + "%");
							}
						)
						.stop();
				}
			});
		}

		animateElements();
		$(window).scroll(animateElements);

		/* ==================================================
            Contact Form Validations
        ================================================== */
	}); // end document ready function

	/* ==================================================
        Preloader Init
     ===============================================*/
	 $(document).ready(function () {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");
	  });
	  
})(jQuery); // End jQuery

$(document).ready(function () {
	$(".one").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
});

$(".naccs .menu div").click(function () {
	var $this = $(this);
	$this.parent().find("div").removeClass("active");
	$this.addClass("active");
});

// $(document).ready(function(){
//     $(".widget-title").click(function(){
//         $(this).toggleClass("active-new");
//       $(".f-item ul").toggle();
//     });
//   });

$(document).ready(function () {
	if (window.outerWidth < 425) {
		$(".widget-title").on("click", function () {
			$(this).toggleClass("active");
			$(this).next().slideToggle(200);
		});
	}
});
$(document).ready(function () {
		$(".widget-title2").on("click", function () {
			$(this).toggleClass("active");
			$(this).next().slideToggle(200);
		});
});

/* portfolio section */
$(document).ready(function () {
	var curPage = 1;
	var numOfPages = $(".skw-page").length;
	var animTime = 1000;
	var scrolling = false;
	var pgPrefix = ".skw-page-";

	function pagination() {
		scrolling = true;

		$(pgPrefix + curPage)
			.removeClass("inactive")
			.addClass("active");
		$(pgPrefix + (curPage - 1)).addClass("inactive");
		$(pgPrefix + (curPage + 1)).removeClass("active");

		setTimeout(function () {
			scrolling = false;
		}, animTime);
	}

	function navigateUp() {
		if (curPage === 1) return;
		curPage--;
		pagination();
	}

	function navigateDown() {
		if (curPage === numOfPages) return;
		curPage++;
		pagination();
	}

	$(document).on("mousewheel DOMMouseScroll", function (e) {
		if (scrolling) return;
		if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
			navigateUp();
		} else {
			navigateDown();
		}
	});

	$(document).on("keydown", function (e) {
		if (scrolling) return;
		if (e.which === 38) {
			navigateUp();
		} else if (e.which === 40) {
			navigateDown();
		}
	});
	$(".skw-page").on("mousewheel DOMMouseScroll", function (e) {
		var e0 = e.originalEvent,
			delta = e0.wheelDelta || -e0.detail;

		this.scrollTop += (delta < 0 ? 1 : -1) * 30;
		e.preventDefault();
	});
});
$("#scrollthere").click(function () {
	$("html, body").animate(
		{
			scrollTop: $("#stophere").offset().top,
		},
		0
	);
});

$("#owl-carousel-banner").owlCarousel({
	loop: true,
	margin: 0,
	dots: true,
	nav: false,
	items: 1,
	autoplay: true,
	slideTransition: "linear",
	autoplayTimeout:4000,
	autoplaySpeed: 3000,
});
$("#owl-carousel-client").owlCarousel({
	loop: true,
	margin: 30,
	dots: false,
	nav: false,
	items: 4,
	autoplay: true,
	slideTransition: "linear",
	autoplayTimeout:1000,
	autoplaySpeed: 500,
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 2,
		},
		900: {
			items: 4,
		},
	},
});
$("#owl-carousel-tool").owlCarousel({
	loop: true,
	margin: 0,
	dots: false,
	nav: false,
	items: 6,
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 2,
		},
		900: {
			items: 6,
		},
	},
});
$("#owl-carousel-startup").owlCarousel({
	loop: true,
	margin: 0,
	dots: false,
	nav: false,
	items: 4,
	autoplay: true,
	slideTransition: "linear",
	autoplayTimeout:1000,
	autoplaySpeed: 500,
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 2,
		},
		900: {
			items: 4,
		},
	},
});
$("#owl-carousel-test").owlCarousel({
	loop: true,
	margin: 30,
	dots: false,
	nav: true,
	items: 1,
	autoplay: true,
	slideTransition: "linear",
	autoplayTimeout:3000,
	autoplaySpeed: 2000,
	navText: [
		"<div class='nav-btn swiper-button-prev'></div>",
		"<div class='nav-btn swiper-button-next'></div>",
	],
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		600: {
			items: 1,
			nav: false,
		},
		900: {
			items: 1,
		},
	},
});

$("#owl-carousel-project-flow").owlCarousel({
	loop: true,
	margin: 0,
	dots: true,
	nav: false,
	items: 1,
});

$("#owl-carousel-clientproject").owlCarousel({
	loop: true,
	margin: 0,
	dots: true,
	nav: false,
	items: 1,
	autoplay: true,
	slideTransition: "linear",
	autoplayTimeout:4000,
	autoplaySpeed: 3000,
});

$(".counting").each(function () {
	var $this = $(this),
		countTo = $this.attr("data-count");

	$({ countNum: $this.text() }).animate(
		{
			countNum: countTo,
		},

		{
			duration: 3000,
			easing: "linear",
			step: function () {
				$this.text(Math.floor(this.countNum));
			},
			complete: function () {
				$this.text(this.countNum);
				//alert('finished');
			},
		}
	);
});


$("#owl-carousel-blog-sec").owlCarousel({
	loop: true,
	margin: 30,
	dots: false,
	nav: false,
	items: 3,
	autoplay: true,
	slideTransition: "linear",
	autoplayTimeout:1500,
	autoplaySpeed: 800,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		900: {
			items: 3,
		},
	},
});

$(function () {
	$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if (scroll >= 57) {
	$('.dropdown-wrapper').hide()
	}
	});
	})

	$(document).ready(function () {
        $(".btn-blue").click(function () {
            var searchTerm = $("#searchTerm").val().toLowerCase();
            
            $(".card").each(function () {
                var cardTitle = $(this).find(".card-title").text().toLowerCase();
                
                if (cardTitle.includes(searchTerm)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });

            // Update the "Showing X positions" based on visible cards
            var visibleCardCount = $(".card:visible").length;
            $(".showin-result p").text("Showing " + visibleCardCount + " positions");
        });
    });

	$("#owl-carousel-abdm-banner").owlCarousel({
		loop: true,
		margin: 0,
		dots: true,
		nav: false,
		items: 1,
		autoplay: true,
		slideTransition: "linear",
		autoplayTimeout:4000,
		autoplaySpeed: 3000,
	});
	
	
	$("#owl-carousel-abdm-toolkit").owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		nav: true,
		items: 4,
		autoplay: true,
		slideTransition: "linear",
		autoplayTimeout:3000,
		autoplaySpeed: 2000,
		navText: [
			"<div class='nav-btn abdm-button-prev'></div>",
			"<div class='nav-btn abdm-button-next'></div>",
		],
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			600: {
				items: 1,
				nav: false,
			},
			900: {
				items: 1,
			},
		},
	});
	$("#owl-carousel-health-care-marketing").owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		nav: false,
		items: 4,
		autoplay: true,
		slideTransition: "linear",
		autoplayTimeout:1000,
		autoplaySpeed: 500,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			900: {
				items: 4,
			},
		},
	});

	document.getElementById("current-year").textContent = new Date().getFullYear();


  $(document).ready(function(){
    var owl = $(".portfolio-carousel");

    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: false
    });

    // Custom navigation
    $(".nav-btn.next").click(function(){
      owl.trigger("next.owl.carousel");
    });

    $(".nav-btn.prev").click(function(){
      owl.trigger("prev.owl.carousel");
    });
  });
