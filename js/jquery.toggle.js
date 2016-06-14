$(document).ready(function(){
  $(".embedded-content").hide();
  // trigger controls opening/closing hidden iframed reference doc
  // trigger-active class chains to trigger, controlling the arrow's direction
  $(".trigger").toggle(function(){
    $(this).addClass("trigger-active"); 
    }, function () {
    $(this).removeClass("trigger-active");
  });
  // on click, trigger grabs the .trigger's data-url attribute; then finds next .embeddeded content elements iframe child's source attribute and injects the data-url's value

  $(".trigger").click(function(){
    $(this).next(".embedded-content").slideToggle(200);
  });
});