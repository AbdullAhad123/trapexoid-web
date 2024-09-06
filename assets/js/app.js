$(window).on('load scroll', function () {
    const scrolled = $(window).scrollTop();
    if (scrolled > 99) {
        $("#navbar").addClass('bg_navbar');
    } else {
        $("#navbar").removeClass('bg_navbar');
    }
});