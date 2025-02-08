const express = require('express'); // Express app
const router = express.Router(); // Router logic

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// define route for our trips endpoint
router.get('/trips',tripsController.tripsList); // GET method routes tripList

// GET method routes tripsFindByCode - requires parameter
router.get('/trips/:tripCode',tripsController.tripsFindByCode);

module.exports = router;