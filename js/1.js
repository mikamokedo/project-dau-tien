jQuery(document).ready(function($) {
var myVideo = $('.videonen #video1');
var	flagslide = true; 
	$('.play').on('click', function(event) {
		event.preventDefault();
if(flagslide){
		$('.slide').addClass('bienmatplay');
		flagslide = false;
		myVideo.get(0).play();

		}
		else{
			$('.slide').removeClass('bienmatplay');
			flagslide = true;
			myVideo.get(0).pause();
		}


		

	});

new WOW().init();

	danang = $('.hinhtron.danang');
	hoian = $('.hinhtron.hoian');
	hue = $('.hinhtron.hue');
	canhsac = $('.canhsac').offset().top;
	$(window).on('scroll', function(event) {
		event.preventDefault();
		pagey=	$(window).scrollTop();
		if(pagey > canhsac){
			danang.addClass('xoaytron');
			hoian.addClass('xoaytron');
			hue.addClass('xoaytron');	
		}







	});


	anhden = $('.anhden');
	sukien = $('.sukien').offset().top;
	$(window).on('scroll', function(event) {
		event.preventDefault();
		pagey=	$(window).scrollTop();
		if(pagey > sukien){
			anhden.addClass('chaylungtung');

		}
	
});





});