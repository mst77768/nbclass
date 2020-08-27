//query
// $("div")
// $(".box")
// $("#box")

// $("#box").click(fn)
//$("#box").hover(fn1,fn2)
// $("#box").css({})


// addEventListener("事件名",fn,false)  //标准浏览器
// attachEvent()   //非标准浏览器中  IE6,7,8

//事件封装
function addEvent(obj, eventName, fn) {
    if (obj.attachEvent) {  //非标准浏览器
        obj.attachEvent("on" + eventName, function () {
            fn.call(obj)
        })
    } else {  //标准浏览器
        obj.addEventListener(eventName, fn, false)
    }
}

//通过className获取元素
//getElementsByClassName()  有兼容的问题
//getElementsByTagName()  都兼容
// 封装通过class名获取元素
function getByClass(parentNode, className) {
    var eles = parentNode.getElementsByTagName("*")
    var result = []
    for (var i = 0; i < eles.length; i++) {
        if (eles[i].className == className) {
            result.push(eles[i])
        }
    }
    return result
}

//获取样式

// if (window.getComputedStyle) { //标准浏览器
//     var style = window.getComputedStyle(oPox)
// } else {
//     var style = oPox.currentStyle //非标准浏览器
// }

function getStyle(obj, attr) {
    if (obj.currentStyle) { //非标准浏览器
        return obj.currentStyle[attr]
    } else {
        return getComputedStyle(obj)[attr]
    }
}



function NQuery(arg) {
    console.log(arg);
    this.elements = []  //来存放获取到的元素
    switch (typeof arg) {
        case "function":
            addEvent(window, "load", arg);
            break;
        case "string":
            switch (arg.charAt(0)) {  //charAt(0)  查找指定索引位置的字符
                case "#":
                    var obj = document.getElementById(arg.substring(1))
                    this.elements.push(obj)
                    break;
                case ".":
                    this.elements = getByClass(document, arg.substring(1))
                    break;
                default:
                    this.elements = document.getElementsByTagName(arg)
            }
            break;
        case "object":
            this.elements.push(arg)
            break;
    }
}

//click
NQuery.prototype.click = function (fn) {
    console.log(this.elements);
    for (var i = 0; i < this.elements.length; i++) {
        addEvent(this.elements[i], "click", fn)
    }
}


function $(arg) {
    return new NQuery(arg)
}
// $(".box").click(function(){})
// $("div")
// $("#box")

// $(function () {
//     alert(111)
// })







