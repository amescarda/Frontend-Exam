$(document).ready(function() {
	var imageBox   = $('.slider__ul'),
	 	width 	   = $('.slider .slider__ul .slider__li').first('img').width(),
	 	numImg     = $('.slider__ul').children('.slider__li').length,
		currentImg = 1;
		
		console.log(width)

		imageBox.css('width', width*numImg)

	$('.slider__navigation').on('click', function() {
		var nav = $(this).attr('data')

		if(nav === 'next') {
			if(currentImg === numImg) {
				currentImg = 1; //back to first picture
				transition()
			} else {
				currentImg++;
				transition()
			}
		}
		else if(nav === 'prev') {
			if(currentImg === 1) {
				currentImg = numImg;
				transition()
			} else {
				currentImg--;
				transition()
			}

		}

		function transition() {
			var imgSize = -(currentImg - 1) * width 
			imageBox.animate({
				'left': imgSize
			})
		}
	})
})
