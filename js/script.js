$(function(){
var right = 0;
var ButtonPad = 0;

function SliderMovingLeft(){	
	right = right - 400;
		if (right < -800) {
			right = 0;
		}
	$('.slider__list').css('margin-left', right + 'px');
}

$(document).ready(function() {
  	$(window).on('resize', function() { 
    	$('.slider__list').css('margin-left', 0 + 'px');
})
});

function SliderMovingRight(){
	if (right < 0) {
		right = right + 400;
	}
	$('.slider__list').css('margin-left', right + 'px');
}

$('.slider__button--right').click(function(){
	SliderMovingLeft(); 
	console.log(right);
});

$('.slider__button--left').click(function(){
	SliderMovingRight();
	console.log(right);  
});

function PadMovingButton3(){
	right = 0;
	if(window.matchMedia('(max-width: 989px)').matches){
		right = right - 730;
		$('.slider__list').css('margin-left', right + 'px');
	} else {
		right = right - 1780;
		$('.slider__list').css('margin-left', right + 'px');
	}
}

$('.control__item:nth-child(3)').on('click', function(){
	PadMovingButton3(); 
	console.log(right);
	right = 0;
});

function PadMovingButton2(){
	right = 0;
	if(window.matchMedia('(max-width: 989px)').matches){
		right = right - 360;
		$('.slider__list').css('margin-left', right + 'px');
	} else {
		right = right - 890;
		$('.slider__list').css('margin-left', right + 'px');
	}
}

$('.control__item:nth-child(2)').on('click', function(){
	PadMovingButton2(); 
	console.log(right);
	right = 0;
});

function PadMovingButton1(){
	right = 0;
	$('.slider__list').css('margin-left', right + 'px');
}

$('.control__item:nth-child(1)').on('click', function(){
	PadMovingButton1(); 
	console.log(right);
});

});