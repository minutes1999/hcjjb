/*
* @Author: axii
* @Date:   2017-08-19 17:05:16
* @Last Modified by:   Minutes1999
* @Last Modified time: 2017-08-20 17:29:24
*/
$(document).ready(function(){
    $("#anobtn").click(function(){
        $(this).hide(1000,function(){
          alert("完成了hide.");
        });
    });

  $("#btn").click(function(){
   $(".testt").hide();
});

  $("#photo").click(function(){
   $("[href$='.jpg']").hide();
});

  $("p#test").css("background-color","red");

  $("p.mouseover").mouseover(function(){
   $(this).css("background-color","blue");
});
  $("button#antbtn").dblclick(function(){
      $("p#dblclick").css("color","green");
  });
// 隐藏显示效果
$(".panel .hide").click(function(){
    $(this).parents(".panel").hide(1000);
});
$("#hide").click(function(){
    $(".panel").hide(2000);
});
$("#show").click(function(){
    $(".panel").show(2000);
});
$("#toggle").click(function(){
    $(".panel").toggle(2000);
});

// 淡入淡出效果
$("#fadein").click(function(){
    $(".panel").fadeIn("slow");
});
$("#fadeout").click(function(){
    $(".panel").fadeOut("slow");
});
$("#fadetoggle").click(function(){
    $(".panel").fadeToggle("slow");
});
$("#fadeto").click(function(){
    $(".panel").fadeTo("1000",0.25);
});
// 滑动效果
$("#slidedown").click(function(){
    $(".panel").slideDown(1);
});
$(".flip").click(function(){
    $(".panel").slideDown(1000);
});
$("#slideup").click(function(){
    $(".panel").slideUp(500);
});
$("#flip2").click(function(){
    $(".panel").slideUp(600);
});
$("#slidetoggle").click(function(){
    $(".panel").slideToggle(200);
});
// 默认情况下，所有 HTML 元素的位置都是静态的，
// 并且无法移动。如需对位置进行操作，
// 记得首先把元素的 CSS position 属性设置为
// relative、fixed 或 absolute。
// $("#animate").click(function(){
//     $("div.ex").animate({
//         left:'500px',
//         opacity:'0.1',
//         height:'+=300px',
//         width:'-=50px'
//     });
// });
//    $("div.ex").animate({
//      div.animate({height:'toggle'},"solw");
// 队列执行动画   ！！！打错一个字母就跑不起来 扎心
$("#animate").click(function(){
        var div=$(".ex")
        div.animate({height:'300px'},"slow");
        div.animate({width:'300px'},"slow");
        div.animate({height:'100px'},"slow");
        div.animate({width:'100px'},"slow");
    });
$("#stop").click(function(){
  $(".panel").stop();
});
$("p.chain").click(function(){
  $("div.chaining").css("background-color","brown").fadeOut(1000).slideDown(2000);
});
$("#btn1").click(function(){
  alert("text:"+$("#dom0").text());
});
$("#btn2").click(function(){
  alert("html:"+$("#dom0").html());
});
$("#btn3").click(function(){
  alert("密码:"+$("#dom1").val());
});
$("#btn4").click(function(){
  alert("href:"+$("#pa").attr("href"));
});
// });
});