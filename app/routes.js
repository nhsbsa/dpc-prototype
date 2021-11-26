// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

// ********************************
// Payment Runs (VERSION 1)
// ********************************

// Payment Run - Step 1 - Do you want to continue?

router.post('/v1/step-1', function (req, res) {

    var step1Continue = req.session.data['step1']
  
    if (step1Continue === "yes") {
      res.redirect('/v1/payment-runs/november-1-in-progress')
    }
    else if (step1Continue === "no") {
      res.redirect('/v1/payment-runs/november-1')
    }
    else {
      res.redirect('/v1/payment-runs/step-1')
    }
  
  })

// Payment Run - Step 2 - Do you want to continue?

router.post('/v1/step-2', function (req, res) {

    var step2Continue = req.session.data['step2']
  
    if (step2Continue === "yes") {
      res.redirect('/v1/payment-runs/november-2-in-progress')
    }
    else if (step2Continue === "no") {
      res.redirect('/v1/payment-runs/november-2')
    }
    else {
      res.redirect('/v1/payment-runs/step-2')
    }
  
  })

// Payment Run - Step 3 - Do you want to continue?

router.post('/v1/step-3', function (req, res) {

    var step3Continue = req.session.data['step3']
  
    if (step3Continue === "yes") {
      res.redirect('/v1/payment-runs/november-3-in-progress')
    }
    else if (step3Continue === "no") {
      res.redirect('/v1/payment-runs/november-3')
    }
    else {
      res.redirect('/v1/payment-runs/step-3')
    }
  
  })

// Payment Run - Step 4 - Do you want to continue?

router.post('/v1/step-4', function (req, res) {

    var step4Continue = req.session.data['step4']
  
    if (step4Continue === "yes") {
      res.redirect('/v1/payment-runs/november-4-in-progress')
    }
    else if (step4Continue === "no") {
      res.redirect('/v1/payment-runs/november-4')
    }
    else {
      res.redirect('/v1/payment-runs/step-4')
    }
  
  })

  // Payment Run - Step 4 - Do you try again?

  router.post('/v1/step-4-error', function (req, res) {

    var step4Continue = req.session.data['step4']
  
    if (step4Continue === "yes") {
      res.redirect('/v1/payment-runs/november-4-in-progress-success')
    }
    else if (step4Continue === "no") {
      res.redirect('/v1/payment-runs/november-4-error')
    }
    else {
      res.redirect('/v1/payment-runs/step-4-error')
    }
  
  })

// Payment Run - Step 5 - Do you want to continue?

router.post('/v1/step-5', function (req, res) {

    var step5Continue = req.session.data['step5']
  
    if (step5Continue === "yes") {
      res.redirect('/v1/payment-runs/november-5-in-progress')
    }
    else if (step5Continue === "no") {
      res.redirect('/v1/payment-runs/november-5')
    }
    else {
      res.redirect('/v1/payment-runs/step-5')
    }
  
  })

// Payment Run - Step 6 - Do you want to continue?

router.post('/v1/step-6', function (req, res) {

    var step6Continue = req.session.data['step6']
  
    if (step6Continue === "yes") {
      res.redirect('/v1/payment-runs/november-6-in-progress')
    }
    else if (step6Continue === "no") {
      res.redirect('/v1/payment-runs/november-6')
    }
    else {
      res.redirect('/v1/payment-runs/step-6')
    }
  
  })

// Payment Run - Step 7 - Do you want to continue?

router.post('/v1/step-7', function (req, res) {

    var step7Continue = req.session.data['step7']
  
    if (step7Continue === "yes") {
      res.redirect('/v1/payment-runs/november-7-in-progress')
    }
    else if (step7Continue === "no") {
      res.redirect('/v1/payment-runs/november-7')
    }
    else {
      res.redirect('/v1/payment-runs/step-7')
    }
  
  })

// Payment Run - Step 8 - Do you want to continue?

router.post('/v1/step-8', function (req, res) {

    var step8Continue = req.session.data['step8']
  
    if (step8Continue === "yes") {
      res.redirect('/v1/payment-runs/november-8-in-progress')
    }
    else if (step8Continue === "no") {
      res.redirect('/v1/payment-runs/november-8')
    }
    else {
      res.redirect('/v1/payment-runs/step-8')
    }
  
  })

// Payment Run - Step 9 - Do you want to continue?

router.post('/v1/step-9', function (req, res) {

    var step9Continue = req.session.data['step9']
  
    if (step9Continue === "yes") {
      res.redirect('/v1/payment-runs/november-9-in-progress')
    }
    else if (step9Continue === "no") {
      res.redirect('/v1/payment-runs/november-9')
    }
    else {
      res.redirect('/v1/payment-runs/step-9')
    }
  
  })

// Payment Run - Step 10 - Do you want to continue?

router.post('/v1/step-10', function (req, res) {

    var step10Continue = req.session.data['step10']
  
    if (step10Continue === "yes") {
      res.redirect('/v1/payment-runs/november-10-in-progress')
    }
    else if (step10Continue === "no") {
      res.redirect('/v1/payment-runs/november-10')
    }
    else {
      res.redirect('/v1/payment-runs/step-10')
    }
  
  })

// Payment Run - Complete Run 1 - Pay Date

router.post('/v1/complete-run-1', function (req, res) {

  res.redirect('/v1/payment-runs/complete-run-2')

})

// Payment Run - Complete Run 2 - Pay Date

router.post('/v1/complete-run-2', function (req, res) {

  res.redirect('/v1/payment-runs/complete-run-3')

})

// Payment Run - Complete Run 3 - Pay Date

router.post('/v1/complete-run-3', function (req, res) {

  res.redirect('/v1/payment-runs/complete-run-4')

})