function searchInWiki() {
    //https://en.wikipedia.org/w/api.php?action=opensearch&search=bee&limit=1&format=json
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php",
      data: {
        "action": "query",
        "format": "json",
        "generator": "search",
        "gsrlimit": 10,
        "prop": "info|pageimages|extracts",
        "exintro": 1,
        "explaintext": 1,
        "exsentences": 1,
        "exlimit": "max",
        "pilimit": "max",
        "inprop": "url",
        "redirects": 1,
        "gsrsearch": "pico",
      },
      dataType: 'jsonp',
      type: 'POST',
      async: false,
      headers: {
        'Api-User-Agent': 'Example/1.0'
      },
      success: function(data) {
        var pages = data.query.pages;
        $("#result").html("data");
      },
      error: function(err) {
        alert(err);
      }
    });
}

// $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=pico&limit=10&namespace=0&format=json&callback=?", function (data){
//   $("#result").html(data[1][1]);
//
// });


$("form").submit(function(e) {
    searchInWiki();
});
