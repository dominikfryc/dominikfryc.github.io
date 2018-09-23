$(document).ready(function() {

    // FancyBox
    $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],.fancybox").attr('rel', 'gallery').fancybox({
        padding : 0,
        openEffect	: 'elastic',
        closeEffect	: 'elastic',
        openSpeed	: 'fast',
        closeSpeed	: 'fast',
        beforeShow : function() {
            var alt = this.element.find('img').attr('alt');
            this.inner.find('img').attr('alt', alt);
            this.title = alt;

            /* Add watermark */
            $('<div class="watermark"></div>')
                .bind("contextmenu", function (e) {
                    return false; /* Disables right click */
                })
                .prependTo( $.fancybox.inner );

            /* Disable right click */
            $.fancybox.wrap.bind("contextmenu", function (e) {
                return false;
            });
        },
        helpers : {
            title: {
                type: 'outside'
            }
        }
    });

    // Preload watermark image
    new Image().src = 'https://dominikfryc.github.io/img/logo.svg';

    // Scroll to top
    $("footer .logo").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    // Scroll to comments
    $("a[href$='#comments']").click(function() {
        $("html, body").animate({ scrollTop: $("#comments").offset().top }, "slow");
    });

    // Hamburger menu
    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
    });
});