$(document).ready(function() {

    $('.fancybox').fancybox();

    // FancyBox
    $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],.fancybox").fancybox({
        padding : 0,
        openEffect	: 'elastic',
        closeEffect	: 'elastic',
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
        },
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(31, 36, 42, 1)',
                    'transition' : 'all .5s linear'
                }
            },
            title: {
                type: 'outside'
            }
        }
    });

    // Preload watermark image
    new Image().src = 'img/logo.svg';

});