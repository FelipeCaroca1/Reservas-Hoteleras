const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Rutas CRUD para reservas
router.post('/reservas', bookingController.createBooking);
router.get('/reservas', bookingController.getAllBookings);
// router.get('/reservas/search', bookingController.searchBookings);
router.get('/reservas/:id', bookingController.getBookingById);
router.put('/reservas/:id', bookingController.updateBooking);
router.delete('/reservas/:id', bookingController.deleteBooking);

module.exports = router;
