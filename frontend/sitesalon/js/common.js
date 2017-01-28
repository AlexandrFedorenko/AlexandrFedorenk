$(document).ready(function () {
    //ля меню мобильного
    $(".btn-nav").click(function () {
        $(".menu a").slideToggle();
    });


   


    $(function () {
        $('.tab-nav li:first').addClass('select');                // Первой вкладке добавляетсякласс select
        $('.tab-panels>div').hide().filter(':first').show();      // Скрываются все блоки с описанием вкладок кроме первого
        $('.tab-nav a').click(function () {                         // При клике на вкладку
            $('.tab-panels>div').hide().filter(this.hash).show();   // - показывается блок с описанием текущей вкладки
            $('.tab-nav li').removeClass('select');                 // - удаляется класс 'select' у активной ранее вкладки
            $(this).parent().addClass('select');                    // - добавляется класс 'select' для выбранной вкладки
            return (false);                                         // - прерывается обработка события onClick
        })
    });
// слик слайдер
    $('.multiple-slide ').slick({
        infinite: true,
        slidesToShow: 3,
        //количество слайдов, которые выводятся на экране
        slidesToScroll: 2,
        pauseOnHover: true,
        arrows: true,
        centerMode: true,
        centerPadding: '50px',
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    autoplay: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    autoplay: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1,
                    autoplay: true
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '5px',
                    slidesToShow: 1,
                    autoplay: true
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 1,
                    autoplay: true
                }
            }

        ]


    });
    //Каруселька
    //Документация: http://owlgraphic.com/owlcarousel/
    var owl = $(".carousel");
    owl.owlCarousel({
        items: 3,
        loop: true,
        itemsDesktop: [1920, 3],
        itemsDesktopSmall: [980, 2],
        itemsScaleUp: true,

        // Навигация
        navigation: true,
        navigationText: ['<i class="fa fa-chevron-left" aria-hidden="true">', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        rewindNav: true,
        scrollPerPage: false,

        // Пагинация
        pagination: false,
        paginationNumbers: false

    });
    owl.on("mousewheel", ".owl-wrapper", function (e) {
        if (e.deltaY > 0) {
            owl.trigger("owl.prev");
        } else {
            owl.trigger("owl.next");
        }
        e.preventDefault();
    });
    $(".next_button").click(function () {
        owl.trigger("owl.next");
    });
    $(".prev_button").click(function () {
        owl.trigger("owl.prev");
    });


    //Таймер обратного отсчета
    //Документация: http://keith-wood.name/countdown.html
    //<div class="countdown" date-time="2015-01-07"></div>
    var austDay = new Date($(".countdown").attr("date-time"));
    $(".countdown").countdown({until: austDay, format: 'yowdHMS'});

    //Попап менеджер FancyBox
    //Документация: http://fancybox.net/howto
    //<a class="fancybox"><img src="image.jpg" /></a>
    //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
    $(".fancybox").fancybox(
        {
            "centerOnScroll": true
        }
    );

    //Навигация по Landing Page
    //$(".top_mnu") - это верхняя панель со ссылками.
    //Ссылки вида <a href="#contacts">Контакты</a>
    $(".menu").navigation();
    $(".btn-2").navigation();

    //Добавляет классы дочерним блокам .block для анимации
    //Документация: http://imakewebthings.com/jquery-waypoints/
    $(".block").waypoint(function (direction) {
        if (direction === "down") {
            $(".class").addClass("active");
        } else if (direction === "up") {
            $(".class").removeClass("deactive");
        }
        ;
    }, {offset: 100});

    //Плавный скролл до блока .div по клику на .scroll
    //Документация: https://github.com/flesler/jquery.scrollTo
    $("a.scroll").click(function () {
        $.scrollTo($(".div"), 800, {
            offset: -90
        });
    });

    //Каруселька
    //Документация: http://owlgraphic.com/owlcarousel/

    var owl = $(".carousel");
    owl.owlCarousel({
        items: 3
    });
    owl.on("mousewheel", ".owl-wrapper", function (e) {
        if (e.deltaY > 0) {
            owl.trigger("owl.prev");
        } else {
            owl.trigger("owl.next");
        }
        e.preventDefault();
    });
    $(".next_button").click(function () {
        owl.trigger("owl.next");
    });
    $(".prev_button").click(function () {
        owl.trigger("owl.prev");
    });

    //Кнопка "Наверх"
    //Документация:
    //http://api.jquery.com/scrolltop/
    //http://api.jquery.com/animate/
    $("#top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("form").submit(function () {
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("form").serialize()
        }).done(function () {
            alert("Спасибо за заявку!");
            setTimeout(function () {
                $.fancybox.close();
            }, 1000);
        });
        return false;
    });

});
$(document).ready(function () {
    $('.overlay').click(function () {
        $(this).remove();
    });
});