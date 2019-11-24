const express = require('express');
const router = express.Router();
const controllers = require('./controllers')

router.route('/cows')
  .get(controllers.getAllCows)

router.route('/cow/:id')
  .get(controllers.getCowById)
  .delete(controllers.deleteCowById)

router.route('/cow')
  .post(controllers.createCow)

module.exports = router;