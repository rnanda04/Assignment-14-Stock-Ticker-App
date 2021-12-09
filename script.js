var col = 
[{"1-800-Flowers.Com Inc.":"FLWS"},
{"Harry and David":"FLWS"},
{"Abercrombie & Fitch Co.":"ANF"},
{"Activision Blizzard":"ATVI"},
{"Activision":"ATVI"},
{"Blizzard":"ATVI"},
{"Adidas":"ADDDF"},
{"Alphabet Inc.":"GOOG"},
{"Google":"GOOG"},
{"Amazon.com Inc.":"AMZN"},
{"Amazon":"AMZN"},
{"AMC Entertainment":"AMC"},
{"American Eagle Outfitter":"AEO"},
{"Anheuser-Busch Inbev SA/NV":"ABI.BR"}, 
{"Apple Inc.":"AAPL"}]


var express = require('express'); 
var app = express(); 
app.get('/', function(req, res){
  res.sendFile('/Users/rohunnanda/Desktop/Rohun Nanda/Tufts University/Sophomore Year (2021-2022)/CS-0020/Assignment 14 - Stock Ticker App/index.html');
});
var parser = require("body-parser");
app.use(parser.json()); 
app.use(parser.urlencoded({ extended: false })); 
app.post("/submit", function(req, res){
  console.log("Success!");
  var result = [];  
  var comp = req.body.company; 
  var tick = req.body.ticker;
  if (tick == "") { 
    for (i in col) {
      if (comp == Object.keys(col[i])) {
        result = Object.values(col[i])
      }
    }
    res.send(result); 
  }
  if (comp == "") {
    for (i in col) {
      if (tick == Object.values(col[i])) {
        result += Object.keys(col[i]) + "<br>";
      }
    }
    res.send(result); 
  }
}); 

var url = 8080; 
app.listen(url, () => {
  console.log('Running on port ' + url + "...");
}); 

app.listen(process.env.PORT || 3000, 
  () => console.log("Running on port 3000..."));
