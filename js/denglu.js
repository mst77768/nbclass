$(function() {
    var flag = 0;
    $(".login-switch").click(function() {
        $(".login-switch i").toggle()
        flag++;
        if (flag % 2 == 1) {
            $(".static-form").hide().siblings().show()
            console.log(flag);
        } else {
            $(".static-form1").hide().siblings().show()
        }
    })
})