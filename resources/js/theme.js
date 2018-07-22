(function($,window,undefined) {

    let mobileNavToggle = $('.toggle-nav');
    let navigation = $('#navigation');

    function toggleNav() {
        navigation.slideToggle();
    }

    function resetNavState() {
        if (window.innerWidth >= 768) {
            navigation.show();
        } else {
            navigation.hide();
        }
    }

    $(window).resize(resetNavState);
    mobileNavToggle.on('click', toggleNav);

})(jQuery,window);