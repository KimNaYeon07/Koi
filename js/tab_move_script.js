$(document).ready(function () {

  //처음들어갔을때 모습 만들기...
  $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
  $(".tabs").children().eq(0).addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
  $(".tab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

  //On Click Event
  $(".tabs").children().click(function () {

      $(".tabs").children().removeClass("active"); //Remove any "active" class
      $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
      $(".tab_content").hide(); //모든 contents들 숨김

      var activeTab = $(this).find("span").attr("tabs"); //Find the href attribute value to identify the active tab + content
      /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
      .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
      $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
      return false;
  });

  //처음들어갔을때 모습 만들기...
  $(".tab_content1").hide(); //tab_content 부분을 모두 숨김.
  $(".tabs1").children().eq(0).addClass("active1").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
  $(".tab_content1:first").show(); //tab_contents중 첫번째꺼를 보여줌

  //On Click Event
  $(".tabs1").children().click(function () {

      $(".tabs1").children().removeClass("active1"); //Remove any "active" class
      $(this).addClass("active1"); //선택한 탭에만 active클래스 붙임
      $(".tab_content1").hide(); //모든 contents들 숨김

      var activeTab1 = $(this).find("span").attr("tabs"); //Find the href attribute value to identify the active tab + content
      /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
      .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
      $(activeTab1).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
      return false;
  });

  //처음들어갔을때 모습 만들기...
  $(".tab_content2").hide(); //tab_content 부분을 모두 숨김.
  $(".tabs2").children().eq(0).addClass("active2").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
  $(".tab_content2:first").show(); //tab_contents중 첫번째꺼를 보여줌

  //On Click Event
  $(".tabs2").children().click(function () {

      $(".tabs2").children().removeClass("active2"); //Remove any "active" class
      $(this).addClass("active2"); //선택한 탭에만 active클래스 붙임
      $(".tab_content2").hide(); //모든 contents들 숨김

      var activeTab2 = $(this).find("span").attr("tabs"); //Find the href attribute value to identify the active tab + content
      /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
      .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
      $(activeTab2).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
      return false;
  });

  //처음들어갔을때 모습 만들기...
  $(".tab_content3").hide(); //tab_content 부분을 모두 숨김.
  $(".tabs3").children().eq(0).addClass("active3").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
  $(".tab_content3:first").show(); //tab_contents중 첫번째꺼를 보여줌

  //On Click Event
  $(".tabs3").children().click(function () {

      $(".tabs3").children().removeClass("active3"); //Remove any "active" class
      $(this).addClass("active3"); //선택한 탭에만 active클래스 붙임
      $(".tab_content3").hide(); //모든 contents들 숨김

      var activeTab3 = $(this).find("span").attr("tabs"); //Find the href attribute value to identify the active tab + content
      /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
      .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
      $(activeTab3).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
      return false;
  });

    //처음들어갔을때 모습 만들기...
    $(".tab_content4").hide(); //tab_content 부분을 모두 숨김.
    $(".tabs4").children().eq(0).addClass("active4").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tab_content4:first").show(); //tab_contents중 첫번째꺼를 보여줌
  //On Click Event
  $(".tabs4").children().click(function () {

    $(".tabs4").children().removeClass("active4"); //Remove any "active" class
    $(this).addClass("active4"); //선택한 탭에만 active클래스 붙임
    $(".tab_content4").hide(); //모든 contents들 숨김

    var activeTab4 = $(this).find("span").attr("tabs"); //Find the href attribute value to identify the active tab + content
    /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
    .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
    $(activeTab4).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
    return false;
});

  

});