$(function(){
    // nav Slide Toggle
    $(".menu_button").click(function(){
        if(window.innerWidth<=768) {
            $(".nav").slideToggle(600);
        }
    });

    $(".menu_button").click(function(){
        if(window.innerWidth>768) {
            $(".user_menu").slideToggle(400);
        }
    });

    $(window).resize(function(){
        if(window.innerWidth<=768) {
            $(".nav").hide();
            $(".user_menu").hide();
        }

        if(window.innerWidth>768) {
            $(".nav").show();
        }
    });

    // nav_under Scroll Up
    $(".nav_under_top").click(function(){
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

    // Game Cateogory List Btn Effects
    $('.btn_left').click(function(){
        $('.gamegenre .genre_list > li').stop().animate({
            left: '0%'
        })
    })

    $('.btn_right').click(function(){
        $('.gamegenre .genre_list > li').stop().animate({
            left: '-80%'
        })
    })

    // Top Bar PAGE Click Events
    $('.page_name').click(function(){
        $('.page_menu').slideToggle(500);
    })
});