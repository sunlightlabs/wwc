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
    // get value of .trigger's data-url attribute
    var iframeSource = $(this).attr("data-url");
    // add iframe element into embedded-content container
    // $(".embedded-content").append("<iframe class=\"iframed-content\" src=\"\"></iframe>");
    $(this).next(".embedded-content").append("<iframe class=\"ref-doc\" src=\"\"></iframe>");
    // find next .embedded-content element's child iframe element's src attribute and append .trigger's data-url attribute value
    $(this).next(".embedded-content").find("iframe").attr("src", (iframeSource));
    // slidetoggle .embedded-content following .trigger
    $(this).next(".embedded-content").slideToggle("slow,");
    // $(this).next(".embedded-content:first-child").slideToggle("slow,");
  });
});