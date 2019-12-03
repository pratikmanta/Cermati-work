$(document).ready(() => {
    $(window).scroll(() => {
        $('.newsletter-card').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_object > bottom_of_window) {
                $(this).animate({ bottom: 0 }, 500);
            }
        });
    });
    $('.notification-btn').click(() => {
        $('.notification-container').slideUp();
    })
    $('.close-icon').click(() => {
        $('.newsletter-card').animate({ bottom: '-500px' }, 500);
        setTimeout(() => {
            $('.newsletter-card').addClass("hidden");
        },1000)
        
    })
});