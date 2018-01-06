var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/github', function(req, res, next) {
  res.render('github', { title: 'Brendan Kelly' });
});

module.exports = router;
