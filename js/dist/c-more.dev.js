"use strict";

$(function () {
  // 搜索框自动清除,each遍历文本框
  $(".sf").each(function () {
    //保存当前文本框的值
    var vdefault = this.value; //获得焦点时，如果值为默认值，则设置为空

    $(this).focus(function () {
      if (this.value == vdefault) {
        this.value = "";
      }
    }); //失去焦点时，如果值为空，则设置为默认值

    $(this).blur(function () {
      if (this.value == "") {
        this.value = vdefault;
      }
    });
  }); //购物车

  $('.head-cart').hover(function () {
    $(this).css('border-bottom', '2px solid #fff');
    $('.nogoods').css('display', 'block');
  }, function () {
    $(this).css('border-bottom', '1px solid #ccc');
    $('.nogoods').css('display', 'none');
  });
  $('.nogoods').hover(function () {
    $('.head-cart').css('border-bottom', '2px solid #fff');
    $('.nogoods').css('display', 'block');
  }, function () {
    $('.head-cart').css('border-bottom', '1px solid #ccc');
    $('.nogoods').css('display', 'none');
  }); // 二级导航

  $('.nav-clothes').hover(function () {
    $('.nav-con').css('display', 'block');
  }, function () {
    $('.nav-con').css('display', 'none');
  });
  $('.nav-con').hover(function () {
    $('.nav-con').show();
  }, function () {
    $('.nav-con').hide();
  }); // 鼠标放到列表上，二级显示

  $(".clothes li").hover(function () {
    $(this).addClass('clo-act').siblings('li').removeClass('clo-act');
    $(".cloth-all ul").eq($(this).index()).show().siblings('ul').hide();
    $('.cloth-all').css('display', 'block');
  }, function () {
    // 鼠标移出，二级消失
    $('.cloth-all').css('display', 'none');
    $('.clothes li').removeClass('clo-act');
  }); // 鼠标放到二级上，二级显示

  $(".cloth-all").hover(function () {
    $('.cloth-all').css('display', 'block');
  }, function () {
    //鼠标移出二级，二级消失，li上的效果消失
    $('.cloth-all').css('display', 'none');
    $('.clothes li').removeClass('clo-act');
  }); // 地图

  var _long = 190 / 24; //首先求出进度条的比例产生关系
  // console.log(long);


  $(".eng>a").mouseenter(function () {
    //首先给所以。eng下面的a标签绑定鼠标进入事件
    var index = $(this).index(); //获取他们对应的索引

    var num = -$(".eng_box ul li").eq(index)[0].offsetTop; //我首先把juqery对像转了Dom对象使用top偏移量
    // console.log(num);

    if (index == 21) {
      //如果到达了最后一个
      num = -$(".eng_box ul li").eq(index)[0].offsetTop + 80; //主要是考虑的让最后一个不会跑上去
    }

    $(".eng_box_left>ul").css("top", num + "px"); //设置ul的top值是负数让他动起来

    $("#right_btnhh").css("top", _long * index + "px"); //开始动了
    // console.log(long * index); //打印一下看看是否对
  });
  var nb = false; //创建一个变量，控制拖拉一会

  var lang = 13.25; //创建一个变量

  $("#right_btnhh").mousedown(function (e) {
    lang = 13.25; //13.25是用户ul的高度除以右边竖线的高度求出的

    e.preventDefault(); //阻止图片的默认拖拉效果

    nb = true;
  });
  $("body").mouseup(function () {
    nb = false;
  });
  $(".eng_box_right").mousemove(function (e) {
    //移动
    if (nb) {
      if (e.pageY < 287 && e.pageY > 116) {
        $("#right_btnhh").css("top", Math.floor(e.pageY - 118));
        $(".eng_box_left>ul").css("top", Math.floor(-Math.floor(e.pageY - 118) * lang) + "px");
      }
    }
  });

  $(".weizhi")[0].onmousewheel = function (e) {
    if (e.wheelDelta > 0) {
      //向上回去
      if ($("#right_btnhh")[0].offsetTop >= -1) {
        var text = $("#right_btnhh")[0].offsetTop -= 8;

        if (text < 0) {
          text = 0;
        }

        $("#right_btnhh").css("top", text);
        $(".eng_box_left>ul").css("top", Math.floor(-$("#right_btnhh")[0].offsetTop * lang) + "px");
        return false;
      }
    } else {
      //向下
      if ($("#right_btnhh")[0].offsetTop <= $(".eng_box_right").height() - 26) {
        var text = $("#right_btnhh")[0].offsetTop += 8;
        $("#right_btnhh").css("top", text);
        $(".eng_box_left>ul").css("top", Math.floor(-$("#right_btnhh")[0].offsetTop * lang) + "px");
        return false;
      }
    }
  };

  $('.top_love>p').hover(function () {
    $(this).css({
      'background': '#fff',
      'border-bottom': '2px solid #fff'
    });
    $('.weizhi').css('display', 'block');
  }, function () {
    $('.weizhi').css('display', 'none');
    $(this).css({
      'background': '#EEEEEE',
      'border-bottom': '0px'
    });
  });
  $('.weizhi').hover(function () {
    $(this).css('display', 'block');
    $('.top_love>p').css({
      'background': '#fff',
      'border-bottom': '2px solid #fff'
    });
  }, function () {
    $(this).css('display', 'none');
    $('.top_love>p').css({
      'background': '#EEEEEE',
      'border-bottom': '0px'
    });
  });

  function loadMeinv() {
    var data = 0;

    for (var i = 0; i < 4; i++) {
      //每次加载时模拟随机加载图片
      data = parseInt(Math.random() * 4);
      var html = "";
      html = '<li><img src = img/dian' + data + '.jpg><i class="iconfont icon-xinweixuanzhong"></i><div class="col-con"><img src="img/dian1-' + data + '.jpg" alt=""><h4><a href="">绿联专卖店</a></h4><h5>主营品牌：绿联</h5><p>商家等级<img src="img/three.png" alt=""></p></div>';
      $minUl = getMinUl();
      $minUl.append(html);
    }
  }

  loadMeinv();
  $(window).on("scroll", function () {
    $minUl = getMinUl(); // console.log($(window).scrollTop());

    if (parseInt($(window).scrollTop()) > 3000) {
      // console.log('aaaaaaaaaaaaa');
      $('.main').css('height', '4900');
    } else if ($minUl.height() <= $(window).scrollTop() + $(window).height()) {
      //当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
      loadMeinv();
      $('.main').css('height', '5000');
    }
  });

  function getMinUl() {
    //每次获取最短的ul,将图片放到其后
    var $arrUl = $("#container .col");
    var $minUl = $arrUl.eq(0);
    $arrUl.each(function (index, elem) {
      if ($(elem).height() < $minUl.height()) {
        $minUl = $(elem);
      }
    });
    return $minUl;
  }

  $('#container ul li').click(function () {
    location.href = "jie.html";
  });
});