var audio = new Audio('audio/office.mp3');
audio.play();

$('.sound-player').on('click', function () {
    if ($(this).hasClass('fa-volume-up')) {
        $(this).removeClass('fa-volume-up')
               .addClass('fa-volume-down');
        audio.volume = 0.25;
    } else if (($(this).hasClass('fa-volume-down'))) {
        $(this).removeClass('fa-volume-down')
               .addClass('fa-volume-off');
        audio.volume = 0;
    } else if (($(this).hasClass('fa-volume-off'))) {
        $(this).removeClass('fa-volume-off')
               .addClass('fa-volume-up');
        audio.volume = 1;
    }
});

var elementPosition = $('#sticky-nav').offset();

$(document).scroll(function() {
    if($(window).scrollTop() > elementPosition.top){
        //$('#sticky-nav').css('position','fixed').css('top','0');
        $('#sticky-nav').addClass('navbar-fixed-top');
    } else {
        //$('#sticky-nav').css('position','static');
        $('#sticky-nav').removeClass('navbar-fixed-top');
    }
});

