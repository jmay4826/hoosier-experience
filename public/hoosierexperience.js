var c;
var t;
var timer_is_on=0;

function timedCount()
  {
	if(!c){
  c=0;
	}
  c=c+1;
  t=setTimeout("timedCount()",1000);

  }

function doTimer()
  {
  if (!timer_is_on)
    {
    timer_is_on=1;
    timedCount();
    }
  }

function stopCount(topic)
  {
  clearTimeout(t);
  timer_is_on=0;
  l = topic.length;
  topic = topic.substring(7, (l - 4));
/*  alert(topic + " was looked at for" + c + "seconds"); */
  $.get('hoosierexperience.cfm?topic=' + topic + '&time=' + c);
  c=0;

  }

var wasDown = false;
var elementSelected;
var typedIn;


function searchKeywords(e){
	
	var resultsList;

	var keyPressed;
	keyPressed = (e.which) ? e.which : e.keyCode;
	
	
	typedIn = document.getElementById("keywordBar").value;
	if(typedIn.length>1){
		if(typedIn.toUpperCase() == "CLOSE"){
			$.colorbox({width: '80%', inline: true, href:'#close'});
			document.getElementById("keywordBar").blur();
		}
		if(typedIn.toUpperCase() == "DJMAK"){
			$.colorbox({maxHeight: '80%', maxWidth: '80%', href: 'images/djmak.jpg'})
			document.getElementById("keywordBar").blur();
		}
		
	resultsList="<ul id='resultsList'>";

	/* for (x =1; x<17; x++){ */
	for (x in searchWords){
		term = new RegExp(typedIn, "i");
		realTerm = new RegExp(searchWords[x], "i");
		 if (searchWords[x].match(term)){
			 for (y in keywords){
				 if (y == searchWords[x]){

					 if(!resultsList.match(keywords[y])){
						 /* resultsList+="<li><div class=\"result\"><a class=\"contentLink\" href=\"" + divIds[keywords[y]] + "\">" + keywords[y] + "</a></div></li>"; */
/*						 resultsList+="<li><div id=\"result" + y + "\" class=\"result\" onMouseOver=\"this.className=\'resultSelected\';  elementSelected=\'" + y + "\'\"  onMouseOut=\"this.className=\'result\'\; elementSelected=\'0\'\"><a class=\"contentLink\" onClick=\"$.colorbox({minHeight: \'80%', maxHeight: \'95%\', minWidth: \'80%', 	maxWidth: \'95%\', inline: true, href:\'#" + divIds[keywords[y]] + "\'}); 	document.getElementById(\'keywordBar\').blur()\">" + keywords[y] + "</a></div></li>"; */

resultsList+="<li><div id=\"result" + y + "\" class=\"result\" onMouseOver=\"this.className=\'resultSelected\';  elementSelected=\'" + y + "\'\"  onMouseOut=\"this.className=\'result\'\; elementSelected=\'0\'\"><a class=\"contentLink\" onClick=\"$.colorbox({maxHeight: '95%', maxWidth: '95%', href:\'images/" + divIds[keywords[y]] + ".jpg\'}); 	document.getElementById(\'keywordBar\').blur()\">" + keywords[y] + "</a></div></li>";
					 }

			document.getElementById("searchResults").className="shown";
			
				 }
			 }
			 
			
		}
		
		}
		
	resultsList+="</ul>";
	document.getElementById("searchResults").innerHTML = resultsList;
	
	}
	else {
		document.getElementById("searchResults").className="hiddenContent";
		y = 0;
	}
	

	return typedIn;
}

/* 
Safety
Getting involved
Roommate */