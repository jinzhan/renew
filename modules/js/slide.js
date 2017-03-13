var $ = require('/modules/lib/jquery.js');
var goToSection = {
    paddingTop: $('#nav').height() + 1,
    rang: ['home', 'about', 'course', 'contact'],
    highLight: function () {
        var stop = $(document).scrollTop() + this.paddingTop + 1;
        for (var len = this.rang.length - 1, i = len; i >= 0; i--) {
            var top = $('#' + this.rang[i] + '-section').offset().top;
            if (stop > top) {
                $('#nav').find('a').parent().removeClass('current');
                $('.nav-' + this.rang[i]).parent().addClass('current');
                break;
            }
        }

        var opacity = $(document).scrollTop() > 200 ? 0.8 : 0;
        $('#nav').find('.nav-bg').stop().animate({
            opacity: opacity
        }, {
            duration: 100
        });

        this.$mouse.stop().animate({
            opacity: $(document).scrollTop() + $(window).height() > 900 ? 0 : 1
        }, {
            duration: 100
        });
    },
    scroll: function (distance) {
        $(document.body).animate({
            scrollTop: distance
        }, {
            duration: 500
        });
    },
    bindEvents: function () {
        var me = this;
        $(window).on('resize', function () {
            $(window).width() > 900 &&
            $('#nav').find('ul.nav-ul').removeClass('on-active');
            me.paddingTop = $('#nav').height() + 1;
        });

        $('#nav').on('click', 'a', function (e) {
            var ele = $(this).attr('href');
            (ele && ele.charAt(0) === '#') && goToSection.scroll($(ele).offset().top - goToSection.paddingTop);
            e.preventDefault();
        })
            .on('click', '.navbar-toggle', function () {
                $('#nav').find('ul.nav-ul').toggleClass('on-active');
            })
            .on('click', '.nav-ul li', function () {
                $('#nav').find('ul.nav-ul').removeClass('on-active');
            });
        var me = this;
        $(window).on('scroll', function () {
            me.highLight();
        });
    },
    init: function () {
        this.$mouse = $('#home-section').find('.mouse');
        this.highLight();
        this.bindEvents();
    }
};

$(function () {
    goToSection.init();
});