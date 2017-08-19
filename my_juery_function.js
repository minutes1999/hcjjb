/*
* @Author: axii
* @Date:   2017-08-19 17:05:16
* @Last Modified by:   axii
* @Last Modified time: 2017-08-19 17:30:47
*/
	$(document).ready(function(){
    		$("#anobtn").click(function(){
    			$(this).hide();
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
            // $("#hide").click(function(){
            //     $(".ex").hide(2000);
            // });
            // $("#show").click(function(){
            //     $(".ex").show(2000);
            // });
            // $("#toggle").click(function(){
            //     $(".ex").toggle(2000);
            // });

// 淡入淡出效果
            // $("#fadein").click(function(){
            //     $(".ex").fadeIn("slow");
            // });
            // $("#fadeout").click(function(){
            //     $(".ex").fadeOut(1000);
            // });
            // $("#fadetoggle").click(function(){
            //     $("div.ex").fadeToggle("slow");
            // });
            // $("#fadeto").click(function(){
            //     $("div.ex").fadeTo(1000,0.1);
            // });
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
// 默认情况下，所有 HTML 元素的位置都是静态的，并且无法移动。如需对位置进行操作，记得首先把元素的 CSS position 属性设置为 relative、fixed 或 absolute。
            // $("#animate").click(function(){
            //     $("div.ex").animate({
            //         left:'500px',
            //         opacity:'0.1',
            //         height:'+=300px',
            //         width:'-=50px'
            //     });
            // });
            $("#animate").click(function(){
                // $("div.ex").animate({
                    var div=$("div.ex");
                    // div.animate({height:'toggle'},"solw");
                    div.animate({height:'300px'},"fast");
                    div.animate({width:'50pxpx'},"slow");
                    div.animate({height:'150px'},"slow");
                    aiv.animate({height:'100px'},"slow");
                    div.animate({width:'100px'},"slow");
                // });
            });
    	};