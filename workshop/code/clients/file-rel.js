/* find-rel.js */
var startingURL = "http://service.example.org/";
var thisURL = "";
var link = {};

// using named URL variables
const http = new XMLHttpRequest();

// Send a request
http.open("GET", serviceURLs.list);
http.send(); 

// handle responses
http.onload = function() {
  switch (http.responseURL) {
    case startingURL:
      link = findREL("list");
      if(link.href) {
         thisURL = link.href;
         ...
      }
    ...
    break;
    ...
  }
}

