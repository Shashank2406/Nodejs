var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

router.route('/v1/users')
  .post(userController.postUsers)
  .get(userController.getUsers);

router.route('/v1/users/update/:id')
	.put(userController.updateUsers)
	.delete(userController.deleteUsers) 
  .get(userController.idsearch);

router.route('/v1/users/search/:reg')
  .get(userController.regexsearch);


module.exports = router;