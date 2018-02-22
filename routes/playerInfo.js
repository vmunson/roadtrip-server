var router = require('express').Router();
var db = require('../models/index');
var User = db.sequelize.import('../models/user');
var Player = db.sequelize.import('../models/player.js');

router.post('/', function(req, res) {
    var player = req.body.player.player
    var occupation = req.body.player.occupation
    var car = req.body.player.carType
    var user = req.user 

   Player 
	    .create({ 
            player: player,
            occupation: occupation,
            carType: car,
            owner: user.id    
		})
	    .then(
	    	function createSuccess(player) {
	    		res.json(player);
	    	}, 
		    function createError(err) {
		        res.send(500, err.message);
		    }
	    );
});

// router.get('/', function(req, res) {
// 	var userid = req.user.id;
// 	Player
// 	.findAll({
// 		where: { owner: userid }
// 	})
// 	.then(
// 		function findAllSuccess(data) {
// 			// console.log(data);
// 			res.json(data);
// 		},
// 		function findAllError(err) {
// 			res.send(500, err.message);
// 		}
// 	);
// });
// router.get('/:id', function(req,res){
// 	let data = req.params.id
// 	Player
// 		.findOne({
// 			where:{id: data}
// 		}).then(
// 			function getSuccess(updateData){
// 				res.json(updateData)
// 			},
// 			function getError(err){
// 				res.send(500, err.message)
// 			}
// 		)

// })
// router.put('/', function(req, res){
// 	var user = req.user;
//     var player = req.body.player.player
//     var occupation = req.body.player.occupation
//     var car = req.body.player.car
// 	console.log(req)
// 	Player
// 		.update({
// 			owner: user.id,
//             player: player,
//             occupation: occupation,
//             carType: car
// 		},
// 		{where: {id: data}}
// 	).then(
// 		function updateSuccess(updatedPlayer){
// 			res.json(updatedPlayer)
// 		},
// 		function updateError(err){
// 			res.send(500, err.message)
// 		}
// 	)
// })
router.delete('/', function(req, res){
	let data = req.body.player.id
	Player
	.destroy({
		where: {id: data}
	}).then(
		function deleteLogSuccess(data){
			res.send('you removed a player')
		},
		function deleteLogError(err){
			res.send(500, err.message)
		}
	)
})
module.exports = router;