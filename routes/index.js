var express = require('express');
var router = express.Router();
var fs = require('fs');
 
function file_readline(fav_team){
  let cnt = 0;
  const contents = fs.readFileSync('public\\input.txt', 'utf-8');
  contents.split(/\r?\n/).forEach(line =>  {
    console.log(`Line from file: ${line}`);
    if(line == fav_team) cnt++;
  });
  return cnt;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wordcnt/:fav_team', function (req, res) {
  let fav_team = req.params.fav_team;
//-----------------
  file_readline();
//------------------
let cnt = file_readline(fav_team);
console.log("word count -> " +cnt);
//-------------------
let heading = "<h2>Word Count Result</h2>"
let str1 = "Your favorite team -> <b>"+fav_team+"</b><br>";
let str2 = "Number of occurrences -> <b>"+cnt+"</b><br>";
res.send(heading+str1+str2);
});

module.exports = router;
