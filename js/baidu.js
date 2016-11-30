$(function () {
    var clientH=$(window).height();
    var clientW=$(window).width();
    window.onmousedown= function (e) {
        e.preventDefault();
    }
    window.onmousemove= function (e) {
        e.preventDefault();
    }
    var num=0;
    flag=true;
    touch.on("body","swipeup","#fullpage", function () {
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        flag=false;

        $("#fullpage").css("marginTop",-num*clientH);

        $(".btn li").removeClass("active").eq(num).addClass("active");
    })

    touch.on("body","swipedown","#fullpage", function () {
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        flag=false;

        $("#fullpage").css("marginTop",-num*clientH);

        $(".btn li").removeClass("active").eq(num).addClass("active");
    })

    $("#fullpage")[0].addEventListener("webkitTransitionEnd", function () {
        flag=true;
        $(".pm").each(function (index,obj) {
            if(index==0){
                return;
            }
            if(index==num){
                $(obj).find(".title").css({
                    transform:"translate(0,0)",
                    opacity:1
                })
                $(obj).find(".dpic").css({
                    transform:"translate(0,0)",
                    opacity:1
                })
            }else{
                $(obj).find(".title").css({
                    transform:"translate(-80px,0)",
                    opacity:0
                })
                $(obj).find(".dpic").css({
                    transform:"translate(80px,0)",
                    opacity:0
                })
            }
        })
    })



    //点击事件

    $(".btn li").click(function () {
        var index=$(this).index();
        if(index>num){
            num++;
            if(num==$("section").length){
                num=$("section").length-1;
            }
            $("#fullpage").css("marginTop",-num*clientH);
            $(".btn li").removeClass("active").eq(num).addClass("active");
        }else if(index<num){
            num--;
            if(num==-1){
                num=0;
            }
            $("#fullpage").css("marginTop",-num*clientH);
            $(".btn li").removeClass("active").eq(num).addClass("active");
        }

    })


    $(".xljt").click(function () {
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
        }
        $("#fullpage").css("marginTop",-num*clientH);
        $(".btn li").removeClass("active").eq(num).addClass("active");
    })





    //菜单的操作
    var flag2=true;
    //$(".menu-option").flag2=true;
    $(".menu-option").click(function () {
        if(flag2){
            $(this).find(".menu-option1").css({
                transform:"translate(0,5px) rotate(45deg)"
            })
            $(this).find(".menu-option2").css({
                transform:"translate(0,-5px) rotate(-45deg)"
            })

            $(".menu a").each(function (index,obj) {
                $(".menu").css({display:"block"});
                $(obj).css({
                    opacity:0,
                    transfrom:"rotate(90deg)",
                    animation:"menu .3s linear forwards "+index*0.2+"s"
                })
            })
            flag2=false;
        }else{
            $(this).find(".menu-option1").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(this).find(".menu-option2").css({
                transform:"translate(0,0px) rotate(0deg)"
            })

            $(".menu a").each(function (index,obj) {
                $(obj).css({
                    opacity:0.8,
                    transfrom:"rotate(0deg)",
                    animation:"menu1 .3s linear forwards "+(1.2-0.2*index)+"s"

                })
                var t=setInterval(function () {
                    $(".menu").css({display:"none"});
                },1200)
                clearInterval(t);
            })


            flag2=true;
        }

    })



    $(window).resize(function () {
        clientH=$(window).height();
        $("#fullpage").css("marginTop",clientH*-num);
        if(clientW>1000){
            $(".menu a").css({
                animation:"none",
                opacity:0,
                transform:"rrotate(90deg)"
            })

            $(".menu-option .menu-option1 ,.menu-option2").css({
                transform:"translate(0,0) rotate(0)"
            })
        }
        flag2=true;

    })




})