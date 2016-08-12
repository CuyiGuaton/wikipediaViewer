function searchInWiki(search) {
    //http://stackoverflow.com/questions/8930867/wikipedia-list-search-rest-api-how-to-retrieve-also-url-of-matching-articles
    //https://en.wikipedia.org/w/api.php?action=opensearch&search=pico&aplimit=10&&format=jsonfm
    //El ajax de abajo lo conseguiste de
    //http://stackoverflow.com/questions/25891076/wikipedia-api-fulltext-search-to-return-articles-with-title-snippet-and-image
    //https://en.wikipedia.org/w/api.php?format=jsonfm&action=query&generator=search&gsrnamespace=0&gsrsearch=test&gsrlimit=10&prop=pageimages|extracts|info&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&inprop=url
    //son lo casi mismo (cambiar jsonfm por json y quitar callback para ver, callback se pone al final del link para enviar algo a la wiki y no te de error)
    //$.getJSON("https://en.wikipedia.org/w/api.php?format=jsonfm&action=query&generator=search&gsrnamespace=0&gsrsearch=test&gsrlimit=10&prop=pageimages|extracts|info&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&inprop=url&callback=?", function (data){
    $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        data: {
          "format": "json",
          "action":"query",
          "generator":"search",
          "gsrnamespace":0,
          "gsrsearch":search,
          "gsrlimit":10,
          "prop":"pageimages|extracts|info",
          "exintro":1,
          "explaintext":1, // Muestra en texto plano en vez de html
          "pilimit":"max",
          "exsentences":1,
          "exlimit":"max",
          "inprop":"url" //muestra la url canonica, pero necesita prop= info para verla
        },
        dataType: 'jsonp',
        type: 'POST',
        async: false,
        headers: {
            'Api-User-Agent': 'Example/1.0'
        },
        success: function(data) {
            $("#result").html("data");
        },
        error: function(err) {
          alert(err);
        }
    });
}


$("form").submit(function() {
    searchInWiki( $("#search").val());
});
