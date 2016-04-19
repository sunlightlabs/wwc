// Use any event to append the code
$(document).ready(function() 
{
	// load scripts after pageload
    var scripts = ["js/jquery.leaflet.wwc.js", "js/jquery.jfeed.pack.js", "js/display-rss.jquery.js", "js/toggle.jquery.js", "js/twitterFetcher.js", "js/twitterFetchertweets.js"];
    var scriptsTotal = scripts.length;
    for (var i = 0; i < scriptsTotal; i++){
      var s = document.createElement("script");
      s.src = scripts[i];
      $("head").append(s);
    }

	// mobile nav
	$('#mobiletoggle').click(function() {
		$("nav").toggleClass('expanded').siblings('ul').slideToggle();
	});

});