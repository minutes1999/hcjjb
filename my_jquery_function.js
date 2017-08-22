/*
* @Author: axii
* @Date:   2017-08-19 17:05:16
* @Last Modified by:   minutes1999
* @Last Modified time: 2017-08-22 19:41:20
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
// $("#btn1").click(function(){
//   alert("text:"+$("#dom0").text());
// });
// $("#btn2").click(function(){
//   alert("html:"+$("#dom0").html());
// });
// $("#btn3").click(function(){
//   alert("密码:"+$("#dom1").val());
// });
// $("#btn4").click(function(){
//   alert("href:"+$("#pa").attr("href"));
// });
$("#btn1").click(function(){
  $("#dom0").text("This is A DOM Test!");
});
$("#btn2").click(function(){
  $("#dom0").html("<p>THIS IS DOM</p>");
});
$("#btn3").click(function(){
  $("#dom1").val("cunter striker,Go");
});
// text 回调
$("#btn5").click(function(){
  $("#dom2").text(function(i,origText){
    return "Old text:"+origText+"New text:这是新文本!\n"+"index:"+i;
  });
});

// 多项改变attr
// $("#btn6").click(function(){
//   $("#pa").attr({"href":"http://www.nopls.com", 
//     "title":"jquery_study"});
// });

// attend()
// $("#btn6").click(function(){
//   $("p#dom2").append("append 一些东西");
// });
// prepend()
// $("#btn6").click(function(){
//   $("p#dom2").prepend("prepend_一些东西");
// });
// });
$("#remove").click(function(){
  $("p").remove("#div_1_p0");
});
$("#empty").click(function(){
  $("#div_1").empty();
});
// addClass() removeClass() toggleClass()
$("#addclass_0").click(function(){
  // $("#div_1_p2").addClass("blue");
  $("#div_2").addClass("center");
  $("#div_1").addClass("center blue");
  $("#div_3").addClass("center");
});
$("#removeClass_0").click(function(){
  $("#div_1,#div_2").removeClass("center");
});
$("#toggleClass_0").click(function(){
  $("#div_1,#div_2").toggleClass("center");
});
$("#btn_css").click(function(){
  // alert("Div_1的CSS属性为："+$("#div_1").css("background-color"));
  $("p#div_1_p3").css("font-size",30);
});
$("#btn7").click(function(){
  var txt="";
  // += 类似循环，txt第一次 = ""+...   第二次为第一次获得的txt+...
  txt+="width:"+$("#div_1").width()+"</br>";
  txt+="height:"+$("#div_1").height()+"</br>";
  $("#div_1").append(txt); 
  // innerHeight()、 innerWidth() :包含内边距
});


});
// after()
// 定义函数时要在 document.ready()外面  ！！！
function afterText(){
  var text1="<b>i &ensp;</b>";
  var text2=$("<i> Love</i>");
  var text3=document.createElement("small");
  text3.innerHTML="jQuery!";
  $("p#dom2").after(text1,text2,text3);
}
function beforeText(){
  var text1="<b>i &ensp;</b>";
  var text2=$("<i> Love</i>");
  var text3=document.createElement("small");
  text3.innerHTML="jQuery!";
  $("p#dom2").before(text1,text2,text3);
}