var navbar = document.getElementById('nav-wrapper');
var nav_menu = document.querySelector('#nav-wrapper .nav-menu');
var nav_items = document.querySelectorAll('#nav-wrapper .nav-menu a');
var logo = document.getElementById('logo');
let scrolled = false;
let toggler = false;
// $('.toggler').on('click', function () {
//     if (toggler === false) {
//         toggler = true;
//         console.log('in')
//         $('#nav-wrapper .navbar .nav-menu ul').addClass('slide-in');
//         $('#nav-wrapper .navbar .nav-menu ul').removeClass('slide-out');
//     }
//     else {
//         toggler = false;
//         console.log('out')
//         $('#nav-wrapper .nav-menu ul').addClass('slide-in');
//         $('#nav-wrapper .nav-menu ul').removeClass('slide-out');

//     }
// });
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        navbar.classList.remove('bg-trans');
        logo.classList.remove('hide');
        if (!scrolled) {
            navbar.style.transform = 'translateY(-80px)';
        }
        setTimeout(function () {
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
        }, 200);
    } else {
        navbar.classList.add('bg-trans');
        logo.classList.add('hide');
        scrolled = false;
    }
};
// Smooth Scrolling
$('#nav-wrapper a, .show_about').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 70,
            },
            800
        );
    }
});


// NAV POSITION
$(window).on('scroll', function () {
    var pos = $(window).scrollTop();
    var pos_calc = pos + 200;
    // Link Highlighting
    if (pos_calc > $('#home').offset().top) {
        highlightLink(0);
    }
    if (pos_calc > $('#about').offset().top) {
        highlightLink(1);
    }
    if (pos_calc > $('#work').offset().top) {
        highlightLink(2);
    }
    if (
        pos_calc > $('#contact').offset().top ||
        pos_calc + $(window).height() >= $(document).height()
    ) {
        highlightLink(3);
    }

});

function highlightLink(item) {
    $('#nav-wrapper .nav-menu .current').removeClass('current');
    nav_items[item].classList.add('current');
}
