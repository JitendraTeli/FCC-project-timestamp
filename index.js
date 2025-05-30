// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/1451001600000",(req,res) => {
  let dor = new Date(1451001600000);
  console.log(dor);
   console.log(dor.getTime());
  console.log(dor.toUTCString());

  res.json({ "unix": dor.getTime(),"utc": dor.toUTCString()});
});

app.get("/api/", (req,res) => {
  let dor = new Date();
  res.json({ "unix": dor.getTime(),"utc": dor.toUTCString()});
});

app.get("/api/:date?",(req , res) => {
  console.log("date is   -  ",req.params.date);
  let dor = new Date((req.params.date));
  console.log(dor);
  if(!isNaN(dor.getTime())) res.json({ "unix": dor.getTime(),"utc": dor.toUTCString()});
   else res.json({error : "Invalid Date"});
  
});




// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
