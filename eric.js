document.addEventListener('DOMContentLoaded', function () {
  $.ajax({
    url: 'https://raw.githubusercontent.com/EricHarvey/SlackTheme/master/eric-urls.js',
    success: function(js) {
      urls = eval(js);
      urls.cssUrls.forEach(url => {
        $.ajax({
          url: url,
          success: function (css) {
            $("<style></style>").appendTo('head').html(css);
          }
        });
      });
      $.ajax({
        url: urls.customJsUrl,
        success: function(customJs) {
          var s = document.createElement('script');
          s.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js';
          s.onload = function() {
            setInterval(function () {
              $('pre:not(.hljs)').each(function (i, block) {
                  hljs.highlightBlock(block);
              });
              (function() { eval(customJs); })();
            }, 500);
          };
          s.type = "text/javascript";
          document.getElementsByTagName('head')[0].appendChild(s);
        }
      });
    }
  });
});
