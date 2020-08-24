$("#mainMenu").mouseover(function(){
    $(".subMenu").stop().slideDown();
});

$("#mainMenu").mouseout(function(){
    $(".subMenu").stop().slideUp();
});

//setInterval(fnSlide, 3000);
//function fnSlide() {
//    $("#slideFrame").animate(
//                                {"margin-left": "-1200px"},
//                                1000,
//                                function(){
//                                    $("#slideFrame").css({"margin-left": "0"});
//                                }
//                            );
//}



$("#main #tabBtn>button").click(function(){

    /* 멀티탭 버튼 활성화 표시 시작 */
    $("#main #tabBtn>button").removeClass("tabBtnOn");
    $(this).addClass("tabBtnOn");
    /* 멀티탭 버튼 활성화 표시 끝 */

    /* 멀티탭 버튼 내용 매칭 시작 */
    $("#main .bbsContents").css({"display": "none"});
    var dataIdLink = $(this).attr("data-IdLink");
    $("#"+dataIdLink).css({"display": "block"});
    /* 멀티탭 버튼 내용 매칭 끝 */

});



/*  레이어 팝업 시작 */
$("#main #bbsNotice tr:first-child>td").click(function(){
    $("#layerPopupBg").css({"display": "block"});
});
$("#closeBtn>button").click(function(){
    $("#layerPopupBg").css({"display": "none"});
});
/*  레이어 팝업 끝 */






