// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

// Are you pregnant?

router.post('/v1/step-4', function (req, res) {

    var step4Continue = req.session.data['step4']
  
    if (step4Continue === "yes") {
      res.redirect('/v1/payment-runs/november-in-progress')
    }
    else if (step4Continue === "no") {
      res.redirect('/v1/payment-runs/november')
    }
    else {
      res.redirect('/v1/payment-runs/step-4')
    }
  
  })

  router.post('/v1/step-4-error', function (req, res) {

    var step4Continue = req.session.data['step4']
  
    if (step4Continue === "yes") {
      res.redirect('/v1/payment-runs/november-in-progress')
    }
    else if (step4Continue === "no") {
      res.redirect('/v1/payment-runs/november')
    }
    else {
      res.redirect('/v1/payment-runs/step-4-error')
    }
  
  })