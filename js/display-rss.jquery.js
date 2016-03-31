jQuery(function() {

    jQuery.getFeed({
        url: 'http://sunlightfoundation.com/feeds/blog/term/what-works-cities/',
        success: function(feed) {
        
            var html = '';
            
            for(var i = 0; i < feed.items.length && i < 3; i++) {
            
                var item = feed.items[i];
                
                html += '<h3 class="wwc-blog-post-title">'
                + '<a href="'
                + item.link
                + '">'
                + item.title
                + ' <span class="wwc-blogposts-read-more">Read</span></a>'
                + '</h3>';
            }
            
            jQuery('#rss-feed-viewer').append(html);
        }    
    });
});