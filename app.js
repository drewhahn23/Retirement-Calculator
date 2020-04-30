

const express = require('express');
const bodyParser = require('body-parser');



const app = express();

let years;



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res){


  res.render('retirement', {numYears: years});
});

app.post('/', function(req, res){
  let goal = Number(req.body.retValue);
  let rate = (1/100)*(Number(req.body.rate));
  let init = Number(req.body.initValue);
  let i = 0;

  years = Math.log((goal/init)/(rate));


  console.log(years);


// make array and .push new years value to end? update html to display years?



    res.redirect('/');


});




app.listen(3000, function(){
  console.log('Server is up and running on port 3000!');
});
