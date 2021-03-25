var express = require('express');
var router = express.Router();
var ctrMain = require('../controllers/main');


/*GET home page */
router.get('/', ctrMain.index);

module.exports = router;

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

take anonymous functions and define it 
const homepageController = function (req, res) {
  res.render('index', {title: 'Express'});
};

 GET home page 
router.get('/', homepageController);

*/