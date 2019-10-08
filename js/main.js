$('.scroll-top').hide();

setTimeout(function () {
	$('.loader').hide();
}, 300);

$(document).on('scroll', function () {
	if ($(this).scrollTop() > 100) {
		$('.nav-links').addClass('nav-active');
		$('.scroll-top').show();
	} else if ($(this).scrollTop() < 100) {
		$('.nav-links').removeClass('nav-active');
		$('.scroll-top').hide();
	}
});

$('.scroll-top').on('click', function () {
	$(document).scrollTop(0);
});

$('.search-form').hide();

$('.search-btn').on('click', function () {
	$('.search-form').fadeToggle('fast');
});

$('.close-form').on('click', function () {
	$(this).parents('.search-form').fadeOut('fast');
});

$('.breaking').owlCarousel({
	loop: true,
	autoplay: 1,
	responsive: {
		0: {
			items: 1
		}
	}
});