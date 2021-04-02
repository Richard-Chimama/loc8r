
var express = require('express');
var router = express.Router();
var ctrLocations = require('../controllers/locations');
var ctrOthers = require('../controllers/others')


/*Locations pages */
router.get('/', ctrLocations.homelist);
router.get('/location', ctrLocations.locationInfo);
router.get('/location/review/new', ctrLocations.addReview);

/* other pages */
router.get('/about', ctrOthers.about);

module.exports = router;

