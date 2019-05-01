document.addEventListener('DOMContentLoaded', function () {
  const fs = require('fs');
  const getFile = (url, callback) => {
    if (url.indexOf('http') < 0) {
      fs.readFile(url, 'utf8', (err, result) => {
        if (err) throw err;
        callback(result);
      })
    } else {
      $.ajax({
        url: url,
        success: function(result) {
          callback(result);
        }
      });
    }
  }
  getFile('https://raw.githubusercontent.com/jatin-agrawal31/SlackTheme/master/jatin-urls.js', (js) => {
    let urls = eval(js);
      urls.cssUrls.forEach(url => {
        getFile(url, (css) => {
          $("<style></style>").appendTo('head').html(css);
        })
      });
      const insertJs = (customJs) => {
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
      getFile(urls.customJsUrl, (customJs) => {
        insertJs(customJs);
      })
  })
});
