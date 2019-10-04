$(document).ready(function() {
	var imageBox   = $('.slider__ul'),
	 	width 	   = $('.slider .slider__ul .slider__li'),
	 	numImg     = $('.slider__ul').children('.slider__li').length,
	 	sliderDot  = $('.slider__dot'),
		numDot	   = sliderDot.length,
		currentImg = 1;
		currentDot = 1;

		sliderDot.first().addClass('active')
		var s = imageBox.width((100 * numImg) + '%')
		var r = width.width((100 / numImg) + '%')

	$('.slider__navigation').on('click', function() {
		var nav = $(this).attr('data')

		if(nav === 'next') {
			if(currentImg === numImg) {
				currentImg = 1; //back to first picture
				slide = 0
				transition(slide)

			} else {
				dot = currentImg++;
				transition(dot)
			}
		}
		else if(nav === 'prev') {
			if(currentImg === 1) {
				currentImg = numImg
				slide = currentImg
				transition(slide)

			} else {
				dot = currentImg--;
				transition(dot)
			}

		}
	})

	function transition(dot) {
		image = dot
		console.log(dot)
			imageBox.animate({
			left: (image * -100) + '%'
		})
		sliderDot.removeClass('active').eq(dot).addClass('active');
	}

	function transition(slide) {
		console.log('slide',slide)
		image = slide
			imageBox.animate({
			left: (image * -100) + '%'
		})
		sliderDot.removeClass('active').eq(slide).addClass('active');
	}

	$('.slider__dot').on('click', function() {
		if(!$(this).hasClass('active')) {
			dot = $(this).index()
			console.log(dot)
			transition(dot)
		}
	})

	$('#scroll-top-btn').on('click', function() {
		$('body, html').animate({
			scrollTop: 0,
		}, 'slow')
	})
})
