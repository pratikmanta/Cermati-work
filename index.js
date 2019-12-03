$(document).ready(() => {
    $(window).scroll(() => {
        var news_hidden = $('#newsletter').hasClass("hidden")
        $('.newsletter-card').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            if (bottom_of_object && !news_hidden) {
                $(this).animate({ bottom: 0 }, 500);
            }
            if(news_hidden) {
                setTimeout(() => {
                    $('.newsletter-card').removeClass("hidden");
                },600000)
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