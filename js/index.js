fuction searchInWiki( search ){
  $.ajax({
    url: 'http://en.wikipedia.org/w/api.php',
    data: { action: 'query', list: 'search', srsearch: 'pico', format: 'json' },
    dataType: 'jsonp',
    success: function (x) {
      console.log('title', x.query.search[2].title);
    }
  });
}

$( document ).ready(function() {
  $( "#search" ).click(searchInWiki
  });

});
