$(document).ready(function(){
  $(".embedded-content").hide();
  $(".trigger").toggle(function(){
    $(this).addClass("trigger-active"); 
    }, function () {
    $(this).removeClass("trigger-active");
  });
  $(".trigger").click(function(){
    var iframeSource = $(this).attr("data-url");
    $(this).next(".embedded-content").slideToggle("slow,");
    $(this).next(".embedded-content").find("iframe").attr("src", (iframeSource));
    $(this).next(".embedded-content:first-child").slideToggle("slow,");
  });
});