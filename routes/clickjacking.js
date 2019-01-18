var express = require('express');
var router = express.Router();

router.get('/victim-page', function(req, res, next) {
  res.render('clickjacking/victim-page', { title: 'Clickjacking - Victim Page' });
});
router.get('/victim-page-protected', function(req, res, next) {
  res.set('x-frame-options', "DENY");
  res.render('clickjacking/victim-page', { title: 'Clickjacking - Victim\'s Protected Page' });
});

router.get('/attackers-page', function(req, res, next) {
  res.render('clickjacking/attackers-page', {
    title: 'Clickjacking - Attacker\'s Page',
    iframePath: '/clickjacking/victim-page'
  });
});

router.get('/protection', function(req, res, next) {
  res.render('clickjacking/attackers-page', {
    title: 'Clickjacking - Attack Failed Page',
    iframePath: '/clickjacking/victim-page-protected'
  });
});

module.exports = router;
