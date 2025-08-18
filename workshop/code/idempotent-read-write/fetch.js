const fetch = require("node-fetch");
const url = "https://jsonplaceholder.typicode.com/posts/1";


function httpLibrary () {

const readData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const createData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json(url, {method:'put'});
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

  var that = {};
  that.read = readData;
  that.create = createData;
  return that;
}

//readData(url);
var http = httpLibrary();

var options = {};

http.create(url);
