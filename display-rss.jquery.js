jQuery(function() {

    jQuery.getFeed({
        url: 'http://sunlightfoundation.com/feeds/blog/term/what-works-cities/',
        success: function(feed) {
        
            jQuery('#rss-feed-viewer').append('<h2>'
            + '<a href="'
            + feed.link
            + '">'
            + feed.title
            + '</a>'
            + '</h2>');
            
            var html = '';
            
            for(var i = 0; i < feed.items.length && i < 5; i++) {
            
                var item = feed.items[i];
                
                html += '<h3>'
                + '<a href="'
                + item.link
                + '">'
                + item.title
                + '</a>'
                + '</h3>';
                
                html += '<div class="updated">'
                + item.updated
                + '</div>';
                
                html += '<div>'
                + item.description
                + '</div>';
            }
            
            jQuery('#rss-feed-viewer').append(html);
        }    
    });
});