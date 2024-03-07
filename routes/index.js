var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wordcnt/:fav_team', function (req, res) {
  let fav_team = req.params.fav_team;
  res.send("word count API - "+fav_team);	
});

module.exports = router;

