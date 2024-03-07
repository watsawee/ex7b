var express = require('express');
var router = express.Router();

var fs = require('fs');
 
function file_readline(){
  const contents = fs.readFileSync('public/input.txt', 'utf-8');
  contents.split(/\r?\n/).forEach(line =>  {
    console.log(`Line from file: ${line}`);
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wordcnt/:fav_team', function (req, res) {
  let fav_team = req.params.fav_team;
  //--------
  file_readline();
  //--------
  res.send("word count API - "+fav_team);	
});

module.exports = router;

