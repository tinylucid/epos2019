
$(function() {
    var width = 720;
    var animationSpeed = 5000;
    var pause = 0;
    var currentSlide = 1;

    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});

function newsletter(){
        var email = document.getElementById('mejl');
    	var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    	if (!filter.test(email.value)) {
   	alert('Ukucajte ispravnu email adresu');
    	email.focus();
    	return false;
	}
	
	alert('Uspesno ste se prijavili');
        return true;
}