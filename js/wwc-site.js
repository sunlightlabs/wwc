// Use any event to append the code
$(document).ready(function() 
{
	// load scripts after pageload
    // var scripts = ["js/jquery.leaflet.wwc.js", "js/jquery.jfeed.pack.js", "js/display-rss.jquery.js", "js/toggle.jquery.js", "js/twitterFetcher.js", "js/twitterFetchertweets.js"];
    var scripts = ["js/jquery.leaflet.wwc.js", "js/jquery.jfeed.pack.js", "js/display-rss.jquery.js", "js/twitterFetcher.js", "js/twitterFetchertweets.js"];
    var scriptsTotal = scripts.length;
    for (var i = 0; i < scriptsTotal; i++){
      var s = document.createElement("script");
      s.src = scripts[i];
      $("head").append(s);
    }

	// mobile nav
  // expand mobile nav on click of hamburger menu icon
	$('#mobiletoggle').click(function() {
		$("nav").toggleClass('expanded').siblings('ul').slideToggle();
	});
  // close mobile nav on click of any link in the mobile nav
  $('nav a').click(function() {
    $("nav").toggleClass('expanded').siblings('ul').slideToggle();
  });

});