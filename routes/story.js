var router = require('express').Router();
var db = require('../models/index');
var User = db.sequelize.import('../models/user');
var Player = db.sequelize.import('../models/player.js')
var Story = db.sequelize.import('../models/story.js');

router.post('/', function(req, res) {
    var location = req.body.story.location

   Story 
	    .create({ 
            location: location,
		})
	    .then(
	    	function createSuccess(story) {
	    		res.json(story);
	    	}, 
		    function createError(err) {
		        res.send(500, err.message);
		    }
	    );
});

module.exports = router;