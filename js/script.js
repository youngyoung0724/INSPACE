$(document).ready(function(){
    var swiper = new Swiper("#main_slider .swiper-container", {
        effect : 'fade',
        loop : true,
        mousehover : true,
        autoplay : {
            delay : 1000,
            disableOnInteraction: false  
        },
        speed : 2000,  

        //하단 페이저(네비게이터) 설정
        pagination : {
            el : "#main_slider .swiper-pagination",  
            clickable : true  
        },

        //슬라이드 방향키 설정
        navigation : {
            nextEl : "#main_slider .swiper-button-next",
            prevEl : "#main_slider .swiper-button-prev",
        },
        spaceBetween : 0  

    });

    $('.swiper-slide').on('mouseover', function(){
        swiper.autoplay.stop();
    });
      $('.swiper-slide').on('mouseout', function(){
        swiper.autoplay.start();
    });

    // tab_content

    $(".tab_btn li").click(function(){
        var $index = $(this).index();
        console.log($index);  

        $(".tab_btn li").removeClass("activeBtn"); 
        $(this).addClass("activeBtn");  

        $(".tab_box").removeClass("activeCont");  
        $(".tab_box").eq($index).addClass("activeCont");  
        return false;
    });

    var $tab_arr = [
        ["interior_01.jpg", "Living Room"],
        ["interior_02.jpg", "Rest Room"],
        ["interior_03.jpg", "kitchen"],
        ["interior_04.jpg", "Bed Room"]
    ];



	$("#tab_content .tab1 a").click(function(){
		var $index = $(this).closest(".tab_img").index();
		console.log($index);
		$(".popup_img").css("background-image", "url(./img/tab_interior/"+$tab_arr[$index][0]+")");
		$(".popup h3").text($tab_arr[$index][1]);
		$(".pop_dark").addClass("active");
		$(".popup").addClass("active");

		return false;
	});

    var $tab_arr2 = [
        ["exterior_01.jpg", "Deco Wall"],
        ["exterior_02.jpg", "Garden"],
        ["exterior_03.jpg", "Swim Pool"],
        ["exterior_04.jpg", "Stair"]
    ];


    $("#tab_content .tab2 a").click(function(){
		var $index = $(this).closest(".tab_img").index();
		console.log($index);
		$(".popup_img").css("background-image", "url(./img/tab_exterior/"+$tab_arr2[$index][0]+")");
		$(".popup h3").text($tab_arr2[$index][1]);
		$(".pop_dark").addClass("active");
		$(".popup").addClass("active");

		return false;
	});

    var $tab_arr3 = [
        ["furniture_01.jpg", "Sofas"],
        ["furniture_02.jpg", "Bed"],
        ["furniture_03.jpg", "Chair"],
        ["furniture_04.jpg", "Desk"]
    ];


    $("#tab_content .tab3 a").click(function(){
		var $index = $(this).closest(".tab_img").index();
		console.log($index);
		$(".popup_img").css("background-image", "url(./img/tab_furniture/"+$tab_arr3[$index][0]+")");
		$(".popup h3").text($tab_arr3[$index][1]);
		$(".pop_dark").addClass("active");
		$(".popup").addClass("active");

		return false;
	});
  

    $("#tab_content .pop_dark, #tab_content .popup .close").click(function(){
        $(".pop_dark").removeClass("active");
        $(".popup").removeClass("active");
    });


    $("#service_detail .box a").click(function(){

		return false;
	});
    
    $(".brand").click(function(){
        $("html, body").animate({scrollTop : $("#brand").offset().top - 80}, 1000);
        return false;
    });
    $(".categories").click(function(){
        $("html, body").animate({scrollTop : $("#categories").offset().top - -30}, 1000);
        return false;
    });
    $(".about").click(function(){
        $("html, body").animate({scrollTop : $("#about").offset().top -  -30}, 1000);
        return false;
    });
    $(".service").click(function(){
        $("html, body").animate({scrollTop : $("#service").offset().top - -30}, 1000);
        return false;
    });

});