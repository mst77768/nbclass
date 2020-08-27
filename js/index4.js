$(function () {
    // 热门推荐
    $('.list1').find('li').mouseover(function () {
        $(this).addClass("active").siblings("li").removeClass("active");
        $('.hot-goods ul').eq($(this).index()).fadeIn(1000).addClass('change').siblings('ul').removeClass('change').fadeOut(0)
    });
      // tab切换线
      function tab3(){
        
      }
      $('.cfdq-top .cfdq-ul .cfdq-li1').mouseover(function(){
          $(this).mouseover(function(){
          $(this).addClass('cfdq-lei1').siblings('.cfdq-top .cfdq-ul .cfdq-li1').removeClass('cfdq-lei1'); 
          console.log($(this).find('.cfdq-li1-right'))
        //   console.log($(this).find(".cfdq-li2-right")).show()
          $(this).find(".cfdq-li1-left-l").hide()
          // console.log($(this).index())

          if($(this).index()==0){
            $(this).find(".qq").show()
            console.log($(this).find(".qq"))
          }else{
            $(this).parent().find(".qq").hide()
            console.log($(this).find(".qq"))
          }
      })  
    })
    //点击左边
    var flag1=0
    $(".ssg-ul li").mouseover(function(){
      flag1=$(this).index()
      lunbo2()
    })
    $(".ssg-jt1").click(function () {
        if(flag1==0){
          flag1=0
        }else{
          flag1--
        }
        lunbo2()
    })
    // 点击右边
    $(".ssg-jt2").click(function () {
      console.log(flag1)
      if(flag1>=2){
        flag1=2
      }else{
        flag1++
      }
      lunbo2()

  })
    // 封装一个函数
    function lunbo2(){
      $(".ssg-lunbo-ul").animate({
        left:-flag1*1200
      },100)
      $(".ssg-ul li").eq(flag1).addClass("on").siblings("li").removeClass("on")
    }
    $('.cfdq-li1').mouseover(function (e) { 
      e.preventDefault();
      $(this).siblings().find('.cfdq-li2-right').hide();
      $(this).find('.cfdq-li2-right').show()      
  })
    // 跳楼机
        $(window).scroll(function(){
          var oScrollTop=$(window).scrollTop()
          if(oScrollTop>575){
            // $(".tlou").fadeIn(200)
            $(".tlou").addClass("tou1").siblings("div").removeClass("tou1")
            // console.log(11)
          }else{
            // $(".tlou").fadeOut(200)
            $(".tlou").removeClass("tou1")
          }
        })
        $(".tlou-div1").click(function(){
          var index=$(this).index()
          console.log(index)
          var offtop=$(".floor").eq(index).offset().top
          $(this).css({"background":"#2984EB","color":"#fff"}).siblings().css("background","#E9E9E9")
          // console.log(offtop)
          $("body,html").animate({
            "scrollTop": offtop
        }, 500)
        })
      $(".gotop").click(function () {
          $("body,html").animate({
              "scrollTop": 0
          }, 500)
      })
      $(window).scroll(function(){
        var oscrollTop=$("body,html").scrollTop()
        // console.log(oscrollTop)
        $(".floor").each(function(index){
          var ofloor=$(this).offset().top
          if(ofloor-oscrollTop<100){
            $(".tlou-div1").eq(index).css({"background":"#2984EB","color":"#fff"}).siblings().css({"background":"#E9E9E9","color":"#555"})
          }
        })
      })
      // 轮播图
        // 封装一个函数
        function lunbo3(index){
         
          $(".lunbo li").eq(index).fadeIn(600).siblings("li").fadeOut(200)
       $(".lunbo-circle1").eq(index).addClass("active").siblings("li").removeClass("active")
        }
         $(".lunbo-circle1").click(function(){
          var index = $(this).index()
          lunbo3(index)
         })
         $(".lunbo-circle1").mouseover(function(){
          var index = $(this).index()
          lunbo3(index)
       })
         var flag=0
         var otime1=setInterval(function(){
              if(flag==5){
                flag=0;
              }
              $(".lunbo-circle1").eq(flag).click()
              flag++;
         },4000)
         $(".lunbo").mouseover(function(){
          //  console.log(123)
           clearInterval(otime1)
          //  console.log(otime1)
         })
         $(".lunbo").mouseleave(function(){
            otime1=setInterval(function(){
            if(flag==5){
              flag=0;
            }
            $(".lunbo-circle1").eq(flag).click()
            // console.log(flag)
            flag++;
       },4000)
         })
        //  三角图标
        $(".hh").mouseenter(function(){
           var index=$(this).index()-1
           console.log(index)
           $(".sj").eq(index).css("display","block")
           $(".hh").mouseleave(function(){
            $(".sj").eq(index).css("display","none")
           })
        })

        $(".frist-1>li").click(function() {
          var arr = ["a", "b", "c", "d", "E"];
          $(this).find("img").each(function(index) {
              localStorage.setItem(arr[index], $(this).attr("src"))
          });
           console.log($(this).find("img").attr("src"))
          location.href = "cood.html";
      })
      })

    