//这是我写的11
var is = true;
$('.bl').click(function () {
    if (is) {
        is = false;
        $('.ce').stop().slideDown();
    } else if (is == false) {
        $('.ce').stop().slideUp();
        is = true;
    }
});
//这也是我写的
var flag;
$('.one').mouseenter(function () {
    var that = this;
    var a = true;
    flag = setInterval(function () {

        if (a) {

            $(that).stop().animate({
                'top': 133
            }, 250);
            a = false;
        } else if (a == false) {
            $(that).stop().animate({
                'top': 135
            }, 250);
            a = true;
        }
    }, 250);
});
$('.one').mouseleave(function () {
    clearInterval(flag);
    $(this).css('top', 135);
});
$('.tre').mouseenter(function () {
    var that = this;
    var a = true;
    flag = setInterval(function () {

        if (a) {

            $(that).stop().animate({
                'top': 137
            }, 250);
            a = false;
        } else if (a == false) {
            $(that).stop().animate({
                'top': 139
            }, 250);
            a = true;
        }
    }, 250);
});
$('.tre').mouseleave(function () {
    clearInterval(flag);
    $(this).css('top', 139);
});
var a = $('.im').offset().top;
console.log(a);
var f = $('html,body').scrollTop();
console.log(f);
if (f == 0) {
    $('ul').css({
        'position': 'fixed',
        'bottom': 0
    });
    $('.im').css({
        'top': 205
    })
    $('.h').eq(0).mouseenter(function () {
        // var index=$(this).index();
        // console.log(index)
        $('.im').eq(0).stop().animate({
            'top': 17
        })
    });
    $('.h').mouseleave(function() {
        $('.im').stop().animate({
            'top': 205
        })
    });
    $('.h').eq(1).mouseenter(function () {
        // var index=$(this).index();
        // console.log(index)
        $('.im').eq(1).stop().animate({
            'top': 17
        })
    });
    $('.h').eq(2).mouseenter(function () {
        // var index=$(this).index();
        // console.log(index)
        $('.im').eq(2).stop().animate({
            'top': 17
        })
    });
}
$(window).scroll(function () {
    var t = $('html,body').scrollTop();
    if (t == 0) {
        $('ul').css({
            'position': 'fixed',
            'bottom': 0
        })
        $('.im').css({
            'top': 205
        })
        $('.h').eq(0).mouseenter(function () {
            // var index=$(this).index();
            // console.log(index)
            $('.im').eq(0).stop().animate({
                'top': 17
            })
        });
        $('.h').mouseleave(function() {
            $('.im').stop().animate({
                'top': 205
            })
        });
        $('.h').eq(1).mouseenter(function () {
            // var index=$(this).index();
            // console.log(index)
            $('.im').eq(1).stop().animate({
                'top': 17
            })
        });
        $('.h').eq(2).mouseenter(function () {
            // var index=$(this).index();
            // console.log(index)
            $('.im').eq(2).stop().animate({
                'top': 17
            })
        });
    } else if (t != 0) {
        $('ul').css({
            'position': 'absolute',
            'bottom': 60
        })
        $('.im').css({
            'top': 17
        })
        $('.h').off('mouseenter');
        $('.h').off('mouseleave');
    }
});
console.log($('.h'))
