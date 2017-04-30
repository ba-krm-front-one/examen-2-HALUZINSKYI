
;(function ($) {

    $(function () {
        $('.slider').slick({
                autoplay: false,
                dots: true,
                speed: 800,
                arrows: false
            }
        );

    });
    $(function () {
        $('.slider-infinite').slick({
                autoplay: true,
                infinite: true,
                dots: true,
                speed: 800,
                autoplaySpeed: 4000,
                arrows: false
            }
        );

    });
})(jQuery);


;(function ($) {

    $(document).ready(function () {
        $("#upMenu").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

})(jQuery);

;(function ($) {

    $(document).ready(function () {
        $("#socialBut").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

})(jQuery);

;(function ($) {

    $(document).ready(function () {
        $("#ALREADY").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

})(jQuery);

;(function ($) {

    $(document).ready(function () {
        $("#scroll").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

})(jQuery);


$(document).ready(function () {
    var $container = $('.isotope');
    // filter buttons
    $('#filters button').click(function () {
        var $this = $(this);
        // don't proceed if already selected
        if (!$this.hasClass('is-checked')) {
            $this.parents('#options').find('.is-checked').removeClass('is-checked');
            $this.addClass('is-checked');
        }
        var selector = $this.attr('data-filter');
        $container.isotope({itemSelector: '.item', filter: selector});
        return false;
    });

});


;(function () {
    window.onload = function () {
        var map,
            point = {lat: 55.75, lng: 37.61},
            point2 = {lat: 55.755366, lng: 37.617845},
            iv1Content = document.querySelector('.info-window-1'),
            iv2Content = document.querySelector('.info-window-2');

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: point,
                zoom: 9,
                disableDefaultUI: true
            });
            var image = {
                url: 'images/Cotton.jpg',
                size: new google.maps.Size(90, 24)
            };
            var marker = new google.maps.Marker({
                position: point,
                map: map,
                icon: image,
            });
            var marker2 = new google.maps.Marker({
                position: point2,
                map: map,
                icon: 'icon2.png',
            });
            var infowindow = new google.maps.InfoWindow({
                content: iv1Content
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
                iv1Content.style.opacity = 1;
            });
            var infowindow2 = new google.maps.InfoWindow({
                content: iv2Content
            });
            marker2.addListener('click', function () {
                infowindow2.open(map, marker2);
                iv2Content.style.opacity = 1;
            });
        }

        initMap();
    }
})();