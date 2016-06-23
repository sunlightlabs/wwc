// use any event to append the code
$(document).ready(function() 
{
	// load scripts after pageload
  var scripts = ["js/jquery.leaflet.wwc.js", "js/jquery.jfeed.pack.js", "js/jquery.display-rss.js", "js/twitterFetcher.js", "js/twitterFetchertweets.js"];
  var scriptsTotal = scripts.length;
  for (var i = 0; i < scriptsTotal; i++){
    var s = document.createElement("script");
    s.src = scripts[i];
    $("head").append(s);
  }
  // change icon image aka color on hover - using jquery bc rwd is not playing nice aka i suck
  $(".ref").hover(
    function () {
      $(this).find('.ref-link').attr('src', '../img/arrow-right-dark-redx020.png');
          console.log(this);
    },
    function () {
      $(this).find('.ref-link').attr('src', '../img/arrow-right-redx020.png');
    }
  );
  // worst way to do this.......meh
  /* $(".ref-map").hover(
    function () {
      $(this).find('.ref-map-link').attr('src', '../img/arrow-right-dark-redx020.png');
      console.log(this);
    },
    function () {
      $(this).find('.ref-map-link').attr('src', '../img/arrow-right-redx020.png');
    }
  ); */ // not correct
  // swap out image for :visited style
  $("a.ref:visited .ref-link").attr('src', '../img/arrow-right-dark-redx020.png');
  // $("a.ref-map:visited .ref-map-link").attr('src', '../img/arrow-right-dark-redx020.png'); // not correct
	// mobile nav - expand mobile nav on click of hamburger menu icon
	$('#mobiletoggle').click(function() {
		$("nav").toggleClass('expanded').siblings('ul').slideToggle();
	});
  // close mobile nav on click of any link in the mobile nav
  $('nav a').click(function() {
    $("nav").toggleClass('expanded').siblings('ul').slideToggle();
  });
});