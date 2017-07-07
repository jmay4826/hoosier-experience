console.log(slides);

if(!slides){
    var slides = [];
}
var keywords = [];

//creat a list of keywords from the objects in the slides array
//with format keywords[keyword]=title
for (var i=0; i < slides.length; i++){
    for (var y=0; y < slides[i].keywords.length; y++){
        //console.log(slides[i].keywords[y])
        keywords[slides[i].keywords[y]] = slides[i].title;
    }
}

function search(val){
    var searchTerm = new RegExp(val, "i");
    var results = [];
    //don't need g indicator because we're searching over each keyword individually
    
    for (var keyword in keywords){
        var match = keyword.match(searchTerm);
        
        if (match){
            var term = match.input;
            var title = keywords[term] 
            if (results.indexOf(title) === -1){
                results.push(title)
            }
        }
    }
    return results
}
function autocomplete(val){
    if (val.length <= 2){
        $("#autocomplete").html("")
        return false
    }
    var results = search(val);
    
    //DOM magic with the results
    var htmlString = "<ul>"
    for (var i=0; i < results.length; i++){
        htmlString += "<li><a href='#' class='result'>";
        htmlString += results[i];
        htmlString += "</a></li>";
    }
    htmlString += "</ul>";
    $("#autocomplete").html(htmlString)
    
}

function displaySlide(el){
    console.log(el.text())      
    var searchFor = el.text();
        var found = slides.find(function(slide){
            return slide.title === searchFor;
            });
    $("#slide").attr("src", ("/images/" + found.id + ".jpg"));
    $(".ui.modal").modal('show');
}