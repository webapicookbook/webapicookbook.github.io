/*
  idempotent read/write example
  RWMBook 2021 @mamund
*/


const https = require('https');

var lib = httpLib();
var args = {};
args.url = "https://jsonplaceholder.typicode.com/posts/1";
args.headers = {accept:"application/json"};
lib.read(args);

function results(rt) {
  console.log(rt.body);
}

function httpLib(args) {

  var g = {};
  
  
  // args.url (string)
  // args.body (string)
  // args.headers (array)
  // args.callback (function)
  function read(args) {
    var url = args.url||"";
    var body = args.body||"";
    var headers = args.headers||null;
    var callback = args.callback||null;
    
    var options = {};
    options.url = url;
    if(headers) {options.headers=headers;}
 
    https.request(url, res => {
      res.setEncoding("utf8");
      let body = "";
      
      res.on("data", data => {
        body += data;
      });
  
      res.on("end", () => {
        body = JSON.parse(body);
        console.log(body);
      });
    });
    
    console.log("test");
    console.log(callback);
    
    if(callback) {
      rt = {};
      rt.body = body;
      callback(rt);
    }
  }

  function create(args) {
  }

  function update(args) {
  }

  function remove(args) {
  }
  
  var that = {};
  that.read = read;
  that.create = create;
  that.update = update;
  that.remove = remove;
  
  return that;
}


