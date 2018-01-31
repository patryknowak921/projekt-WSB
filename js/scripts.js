var jump = function(e) {
    e.preventDefault();

    var target = $(this).attr("href");
    $('html,body').animate({
        scrollTop: $(target).offset().top
    }, 2000, function() {
        location.hash = target;
    });

}

$(document).ready(function() {
    $('a[href*=#]').bind("click", jump);
    return false;
});