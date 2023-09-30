$(document).ready(function () {
	$('.carousel__inner').slick({
		speed: 500,
		// autoplay: true,
		// autoplaySpeed: 2000,
		// adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../img/leftArrow.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../img/rightArrow.png"></button>',
		responsive: [
			{
				breakpoint: 992, //брейкпоинт пикселей (0-1024)
				settings: {
					slidesToShow: 1,
					infinite: true,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 752, 
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false
				}
			},
		]
	});
	//табы
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
	//после нажатия кнопки ПОДРОБНЕЕ в айтеме
	$('.catalog-item__link').each(function(i) { //ищем все ссылки ПОДРОБНЕЕ в html-doc (и перебираем через each)
		$(this).on('click', function(e){
			e.preventDefault(); //при клике на ссылку мы говорим чтобы браузер не переходил по адрессу этой ссылки
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active'); //toggleClass - если класса нет, он добавляеться, если есть - переключаеться на тот что слева от этой ф-ции.
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		}); //ссылаемся на каждый элемент который перебираеться (на каждую ссылку)
	});
	//Modal
	$('[data-modal=mod_consultation]').on('click', function(){
			$('.overlay, #mod_consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function(){
		$('.overlay, #mod_consultation, #mod_thanks, #mod_order').fadeOut('slow');
	});
	$('.button_mini').each(function(i){
		$(this).on('click', function(){
			$('#mod_order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()); //text() - getter, 
			//text('example') - setter.
			$('.overlay, #mod_order').fadeIn('slow');
		});
	});
	$('#consultation_form').validate({
		rules: {
			name: "required",
			phone: "required",
			email: {
				required: true,
				email: true
				}
			},
			messages: {
					name: "Пожалуйста, введите своё имя",
					phone: "Пожалуйста, введите свой телефон",
					email: {
					required: "Пожалуйста, введите свою почту",
					email: "Ваш e-mail адрес должен быть в виде name@domain.com"
    	}
		}
	});
	$('#mod_consultation form').validate({
		rules: {
			name: "required",
			phone: "required",
			email: {
				required: true,
				email: true
				}
			},
			messages: {
					name: "Пожалуйста, введите своё имя",
					phone: "Пожалуйста, введите свой телефон",
					email: {
					required: "Пожалуйста, введите свою почту",
					email: "Ваш e-mail адрес должен быть в виде name@domain.com"
    	}
		}
	});
	$('#mod_order form').validate({
		rules: {
			name: "required",
			phone: "required",
			email: {
				required: true,
				email: true
				}
			},
			messages: {
					name: "Пожалуйста, введите своё имя",
					phone: "Пожалуйста, введите свой телефон",
					email: {
					required: "Пожалуйста, введите свою почту",
					email: "Ваш e-mail адрес должен быть в виде name@domain.com"
    	}
		}
	});

	//scroll for pageUp
	$(window).scroll(function() {
		if($(this).scrollTop() > 1600) {
			$('.pageUp').fadeIn();
		} else{
			$('.pageUp').fadeOut();
		}
		if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
	});
});

//document - html документ (наш)
//$ - библиотека jQuery
//slick() - метод, вызывающий слик-слайдер

