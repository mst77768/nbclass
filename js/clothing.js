$(function() {
    // 搜索框自动清除,each遍历文本框
    $(".sf").each(function() {
            //保存当前文本框的值
            var vdefault = this.value;
            //获得焦点时，如果值为默认值，则设置为空
            $(this).focus(function() {
                    if (this.value == vdefault) {
                        this.value = "";
                    }
                })
                //失去焦点时，如果值为空，则设置为默认值
            $(this).blur(function() {
                if (this.value == "") {
                    this.value = vdefault;
                }
            })
        })
        //购物车
    $('.head-cart').hover(function() {
        $(this).css('border-bottom', '2px solid #fff')
        $('.nogoods').css('display', 'block')
    }, function() {
        $(this).css('border-bottom', '1px solid #ccc')
        $('.nogoods').css('display', 'none')
    })
    $('.nogoods').hover(function() {
        $('.head-cart').css('border-bottom', '2px solid #fff')
        $('.nogoods').css('display', 'block')
    }, function() {
        $('.head-cart').css('border-bottom', '1px solid #ccc')
        $('.nogoods').css('display', 'none')
    })

    // 二级导航
    // 鼠标放到列表上，二级显示
    $(".clothes li").hover(function() {
            $(this).addClass('clo-act').siblings('li').removeClass('clo-act');
            $(".cloth-all ul").eq($(this).index()).show().siblings('ul').hide()
            $('.cloth-all').css('display', 'block')
        }, function() {
            // 鼠标移出，二级消失
            $('.cloth-all').css('display', 'none')
            $('.clothes li').removeClass('clo-act');
        })
        // 鼠标放到二级上，二级显示
    $(".cloth-all").hover(function() {
        $('.cloth-all').css('display', 'block')
    }, function() {
        //鼠标移出二级，二级消失，li上的效果消失
        $('.cloth-all').css('display', 'none')
        $('.clothes li').removeClass('clo-act');
    })


    //banner图部分
    var index = 0;

    function autoplay() {
        $(function() {
            index++
            if (index > $('.banner-img li').length - 1) {
                index = 0
            }
            antimateImg()
        })
    }
    var timer = setInterval(function() {
        autoplay()
    }, 3000)

    function antimateImg() {
        $('.banner-img li').eq(index).fadeIn(600).siblings('li').fadeOut(100)
        $('.dots li').eq(index).addClass('dot-active').siblings('li').removeClass('dot-active')
    }
    //移入小圆点
    $('.dots li').mouseover(function() {
            index = $(this).index()
            antimateImg()
        })
        //移入banner图，清除自动轮播
    $('.banner').mouseover(function() {
            clearInterval(timer)
        })
        //移除banner图，调用自动轮播
    $('.banner').mouseleave(function() {
        timer = setInterval(function() {
            autoplay()
        }, 3000)
    })


    // 限时抢购，鼠标放上去上移效果
    $('.pur-bot li').hover(function() {
            $(this).css({
                'transform': 'translate3d(0,-3px,0)',
                'box-shadow': '0 0 10px 0 rgba(0,0,0,0.15)'
            })
        }, function() {
            $(this).css({
                'transform': "none",
                'box-shadow': 'none'
            })
        })
        //女装部分，鼠标移入
    $('.women-list li').hover(function() {
            $(this).addClass('n-active').siblings('li').removeClass('n-active')
            $('.skirt-list ul').eq($(this).index()).fadeIn(600).siblings('ul').fadeOut(300)
        })
        //男装部分，鼠标移入
    $('.men-list li').hover(function() {
            $(this).addClass('m-active').siblings('li').removeClass('m-active')
            $('.trousers-list ul').eq($(this).index()).fadeIn(600).siblings('ul').fadeOut(300)
        })
        //服装配饰部分，鼠标移入
    $('.parts-list li').hover(function() {
            $(this).addClass('p-active').siblings('li').removeClass('p-active')
            $('.eye-list ul').eq($(this).index()).fadeIn(600).siblings('ul').fadeOut(300)
        })
        //内衣部分，鼠标移入
    $('.wear-list li').hover(function() {
            $(this).addClass('w-active').siblings('li').removeClass('w-active')
            $('.wear-clothing ul').eq($(this).index()).fadeIn(600).siblings('ul').fadeOut(300)
        })
        // 户外运动
    $('.outdoors-list li').hover(function() {
            $(this).addClass('o-active').siblings('li').removeClass('o-active')
            $('.outdoors-clothing ul').eq($(this).index()).fadeIn(600).siblings('ul').fadeOut(300)
        })
        //随手购
        //左右两个小按钮出现
    $('.casual-list li').hover(function() {
        $(this).addClass('c-active').siblings('li').removeClass('c-active')
    })
    $('.casual').hover(function() {
        $('.next').fadeIn(300)
        $('.prev').fadeIn(300)
    }, function() {
        $('.next').fadeOut(100)
        $('.prev').fadeOut(100)
    })

    //鼠标放上去时，下面跟着移动
    var oUl = $('.bot-con ul')
    var num = $('.casual-list li').mouseover(function() {
            var num = $(this).index()
            var oLeft = num * 1200
            $('.bot-con').animate({
                left: -oLeft
            }, 500)

        })
        //点击小按钮时左右移动
    $('.next').on("click", function() {
        var num = $('.casual-list li.c-active').index()
        num++
        if (num >= 2) {
            num = 2
        }
        var oLeft = num * 1200
        $('.bot-con').animate({
            left: -oLeft
        }, 500)
        $('.casual-list li').eq(num).addClass('c-active').siblings('li').removeClass('c-active')
    })
    $('.prev').on("click", function() {
        var num = $('.casual-list li.c-active').index()
        num--
        if (num < 0) {
            num = 0
        }
        var oLeft = num * 1200
        $('.bot-con').animate({
            left: -oLeft
        }, 500)
        $('.casual-list li').eq(num).addClass('c-active').siblings('li').removeClass('c-active')
    })





    // 侧边栏
    flag = true;
    $("#ppt").mouseenter(function() {
        if (flag == true) {
            $(".spanbox").show(1000, function() {
                flag = true
            });
            $("#ppt>a").addClass("abc");
        }
        flag = false;

    });
    $("#ppt").mouseleave(function() {
        $("#ppt>a").removeClass("abc");
        $(".spanbox").slideUp(1000)
            // $(this).fadeOut(1000)
    });
    var text;
    $("#text1").focus(function() {
        text = $(this).val();
        if (text != " ") {
            $(this).val(" ");
        }
    });
    $("#text1").blur(function() {
        $(this).val(text);
    });

    $(window).scroll(function() {
        var str = $(this).scrollTop();
        if (str > 100) {
            $("#goback").show();
            $(".pputy").css("bottom", "50px");
            $("#goback").css("bottom", "0px");
        } else {
            $(".pputy").css("bottom", "0px")
            $("#goback").hide();
            $("#goback").css("bottom", "-50px");
        }
    })

    $("#goback").click(function() { //回到顶部
        $("body,html").animate({
            "scrollTop": 0
        }, 500)
    })
    $(".M_blacklove>div").mouseenter(function() {
        $(this).find(".leftbox").stop().animate({
            left: "-100px"
        }, 500);
        $(this).find(".leftbox").css("display", "block");
    })
    $(".M_blacklove>div").mouseleave(function() {
        $(this).find(".leftbox").css("display", "none")
        $(this).find(".leftbox").animate({
            left: "-140px"
        }, 50);
    })
    $("#cppl1").hover(function() {
        $("#mstLaft").fadeIn(1000);
    }, function() {
        $("#mstLaft").hide();
    })
    var flag = true;
    $("#shoplMst").click(function() {
        if (flag == true) {
            $(".Mstright_botm").show();
            $(".Mstright_top>span").text("购物车");
            $(".Mstright-photo").show();
            $(".mst_main span").text("购物车空空的，赶快去挑选心仪的商品吧~");
            $(".rigth-black").animate({
                right: "0px"
            }, 1000)
            flag = false;
        } else if (flag == false) {
            $(".rigth-black").animate({
                right: "-300px"
            }, 1000)
            flag = true;
        }
        return false;
    })
    $("#mstcolde").click(function() {
        flag = true;
        $(".rigth-black").animate({
            right: "-300px"
        }, 1000);
        return false;
    });
    $("body").click(function(e) {
        if (e.pageX < 1150) {
            flag = true;
            $(".rigth-black").animate({
                right: "-300px"
            }, 1000);
        }
    });
    $("a").click(function() {
        event.stopPropagation()
    })
    $("#goodbtn").click(function() {
        location.href = "shopcar.html";
    })

    $("#look").click(function() {
        if (flag == true) {
            $(".Mstright_top>span").text("我的足迹");
            $(".mst_main span").text("暂时没有商品浏览记录");
            $(".Mstright_botm").hide();
            $(".Mstright-photo").hide();
            $(".rigth-black").animate({
                right: "0px"
            }, 1000)
            flag = false;
        } else if (flag == false) {
            $(".rigth-black").animate({
                right: "-300px"
            }, 1000)
            flag = true;
        }
        return false;
    })

    $("#flirtli>ul>li").hover(function() { //细节
        var index = $(this).index();
        var he = $(this).height() * index;
        $(this).children("ul").css("top", "-" + he + "px");

        if (index < 3) {
            $(this).children("ul").css("height", "635px");
        }

    })
    var id = null;
    $("#weizhi").mouseenter(function() {
        $("#Mstbbq").show(600);
    }).mouseleave(function() {
        id = setTimeout(function() {
            $("#Mstbbq").hide(1000);
        }, 500);

    })
    $("#Mstbbq").mouseenter(function() {
        clearTimeout(id);
        $(this).show();
    }).mouseleave(function() {
        $(this).hide(1000);
    })
    var arr = ["justyle", "鲍汁", "皮克朋", "小米", "麦斯威尔", "飞利浦", "华为"];
    var newflag = [];
    $(".Mst_main_rigth1 div").hover(function() {
        var index = $(this).index();
        if (newflag.indexOf(index) == -1) {
            newflag.push(index);
            console.log(index);
            $(this).html($(this).html() + "<span>" + arr[index] + "</span>");
        }
        $(this).find("span").show();
        $(this).children("img").hide();
    }, function() {
        $(this).find("span").hide();
        $(this).children("img").show();
    })
    var flag = true;
    $("#mst_btnxia").click(function() {
        if (flag == true) {
            $(this).parents(".mst_main_top3").animate({
                height: "160px"
            }, 500);
            flag = false;
            $(this).text("∧")
        } else if (flag == false) {
            $(this).parents(".mst_main_top3").animate({
                height: "95px"
            }, 800);
            $(this).text("﹀")
            flag = true;
        }

    })
    var obje = "";
    $(".Mst_main_top4_left>a").mouseenter(function() {
        if ($(this).index() != 0) {
            obje = $(this).children("img").attr("src");
            $(this).children("img").attr("src", "img/1234.png");
        }

    }).mouseleave(function() {
        if ($(this).index() != 0) {
            $(this).children("img").attr("src", obje);
        }
    })
    $(".mst_mk .mst_mk_btom > ul >li").mouseenter(function() {
        $(this).parents(".mst_mk").children("img").attr("src", $(this).children("img").attr("src"))
    })
    var udb = true;
    $(".mstnb").click(function() {
            if (udb == true) {
                $("#MstS1").animate({
                    "margin-right": "-226px"
                }, 1000, function() {
                    $("#MstS1").children("div").hide();

                })
                $(this).val("<");
                console.log(1);
                udb = false;
            } else if (udb == false) {
                $("#MstS1").animate({
                    "margin-right": "0px"
                }, 1000)
                setTimeout(function() {
                    $("#MstS1").children("div").show();
                    $(".mstnb").val(">");

                }, 100)
                udb = true;
            }
        })
        //楼层导航
    $(window).scroll(function() {
            if ($(window).scrollTop() > 540) {
                $('.aside').fadeIn(500)
            } else {
                $('.aside').fadeOut(400)
            }
            // 跟着定位
            $('.floor').each(function(index) {
                if ($(window).height() + $(window).scrollTop() - $(this).offset().top > $(window).height() / 2) {
                    $('.aside li').removeClass('a-active')
                    $('.aside li').eq($(this).index()).addClass('a-active')
                }
            })
        })
        //点击侧边栏
    $(".aside li:not(.goback)").click(function() {
        var oH = $(".floor").eq($(this).index()).offset().top - 150
        $("body,html").animate({
            "scrollTop": oH
        }, 500)
    })
    var long = 190 / 24; //首先求出进度条的比例产生关系
    // console.log(long);
    $(".eng>a").mouseenter(function() { //首先给所以。eng下面的a标签绑定鼠标进入事件
        var index = $(this).index(); //获取他们对应的索引
        var num = -$(".eng_box ul li").eq(index)[0].offsetTop; //我首先把juqery对像转了Dom对象使用top偏移量
        // console.log(num);
        if (index == 21) { //如果到达了最后一个
            num = -$(".eng_box ul li").eq(index)[0].offsetTop + 80; //主要是考虑的让最后一个不会跑上去
        }
        $(".eng_box_left>ul").css("top", num + "px"); //设置ul的top值是负数让他动起来
        $("#right_btnhh").css("top", long * index + "px"); //开始动了
        // console.log(long * index); //打印一下看看是否对
    })

    var nb = false; //创建一个变量，控制拖拉一会
    var lang = 13.25; //创建一个变量
    $("#right_btnhh").mousedown(function(e) {

        lang = 13.25; //13.25是用户ul的高度除以右边竖线的高度求出的
        e.preventDefault(); //阻止图片的默认拖拉效果
        nb = true;
    });
    $("body").mouseup(function() {
        nb = false;
    });
    $(".eng_box_right").mousemove(function(e) { //移动
        if (nb) {
            if (e.pageY < 287 && e.pageY > 116) {
                $("#right_btnhh").css("top", Math.floor(e.pageY - 118));
                $(".eng_box_left>ul").css("top", Math.floor(-Math.floor(e.pageY - 118) * lang) + "px");
            }
        }
    });
    $(".weizhi")[0].onmousewheel = function(e) {
        if (e.wheelDelta > 0) { //向上回去
            if ($("#right_btnhh")[0].offsetTop >= -1) {
                var text = $("#right_btnhh")[0].offsetTop -= 8;
                if (text < 0) {
                    text = 0;
                }
                $("#right_btnhh").css("top", text);
                $(".eng_box_left>ul").css("top", Math.floor(-$("#right_btnhh")[0].offsetTop * lang) + "px");
                return false;
            }
        } else { //向下
            if ($("#right_btnhh")[0].offsetTop <= ($(".eng_box_right").height() - 26)) {
                var text = $("#right_btnhh")[0].offsetTop += 8;
                $("#right_btnhh").css("top", text);
                $(".eng_box_left>ul").css("top", Math.floor(-$("#right_btnhh")[0].offsetTop * lang) + "px");
                return false;
            }
        }
    }
    $('.top_love>p').hover(function() {
        $(this).css({
            'background': '#fff',
            'border-bottom': '4px solid #fff'
        })
        $('.weizhi').css('display', 'block')
    }, function() {
        $('.weizhi').css('display', 'none')
        $(this).css({
            'background': '#EEEEEE',
            'border-bottom': '0px'
        })
    })
    $('.weizhi').hover(function() {
            $(this).css('display', 'block')
            $('.top_love>p').css({
                'background': '#fff',
                'border-bottom': '4px solid #fff'
            })
        }, function() {
            $(this).css('display', 'none')
            $('.top_love>p').css({
                'background': '#EEEEEE',
                'border-bottom': '0px'
            })
        })
        // 跳转详情页
    $(".women-bot li a").click(function() {
            var arr = ["a", "b", "c", "d", "E"];
            $(this).find("img").each(function(index) {
                localStorage.setItem(arr[index], $(this).attr("src"))
                console.log($(this).attr("src"));
            });
            location.href = "cood.html";
        })
        //跳转到购物车
    $(".Mstright_botm input").click(function() {
        location.href = "shopcar.html";
    })
})