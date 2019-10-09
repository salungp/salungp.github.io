var right = $('.dropdown-inside').width()-$('.dropdown-inside-link').width();
var rightFinal = $('.dropdown-inside').width()-right;
$('.dropdown-inside-link').css({ 'right' : '-'+rightFinal+'px' });


$('.scroll-top').hide();

$('.nav-dropdown').hide();

$('.dropdown-inside-link').hide();

$('.news').on('click', function (e) {
	e.preventDefault();
	$('.nav-dropdown').slideToggle();
});

$('.dropdown-inside-btn').on('click', function (e) {
	e.preventDefault();
	$(this).next().slideToggle();
});

setTimeout(function () {
	$('.loader').hide();
}, 300);

$(document).on('scroll', function () {
	if ($(this).scrollTop() > 100) {
		$('.nav-links').addClass('nav-active');
		$('.nav-dropdown').addClass('nav-active-link');
		$('.scroll-top').show();
	} else if ($(this).scrollTop() < 100) {
		$('.nav-links').removeClass('nav-active');
		$('.scroll-top').hide();
		$('.nav-dropdown').removeClass('nav-active-link');
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