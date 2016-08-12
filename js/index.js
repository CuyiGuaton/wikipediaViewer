// functions
function pingApi() {
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
      "gsrsearch": fetchQuery()
    },
    dataType: 'jsonp',
    type: 'POST',
    async: false,
    headers: {
      'Api-User-Agent': 'Example/1.0'
    },
    success: function(data) {
      var pages = data.query.pages;
      displayPages(pages);
    },
    error: function(err) {
      alert(err);
    }
  });
}

function fetchQuery() {
  var q = $("#query").val()
  if (!q) {
    alert("Please enter a search query");
  } else {
    $("#query").val("");
    return q
  }
}

function displayPages(pages) {
  var html = "";
  $.each(pages, function(index, value) {
    var url = value.canonicalurl;
    var title = value.title;
    var extract = value.extract;
    if (!value.thumbnail) {
      var image = " ";
    } else {
      var thumb = value.thumbnail.source;
      var image = "<img src='" + thumb + "' alt='Page image for " + title + "' class='thumbnail'>";
    }
    html += "<li class='list-group-item'>";
    html += image;
    html += "<a href='" + url + "' target='_blank'>" + title + "</a>";
    html += "<p class='extract'>" + extract + "</p>";
    html += "</li>";

  });
  $("#result").html(html);
}

// runtime
$(document).ready(function() {
  $("#send").on("submit", function(e) {
    e.preventDefault();
    pingApi();
  });
});
