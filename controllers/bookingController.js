// Simular base de datos en memoria
let bookings = [];
let bookingId = 1;

// Crear una nueva reserva
exports.createBooking = (req, res) => {
  const { email, hotel, roomType, checkInDate, checkOutDate, adults, children } = req.body;
  const newBooking = {
    id: bookingId++, // Generar un ID único
    email,
    hotel,
    roomType,
    checkInDate,
    checkOutDate,
    adults,
    children,
    status: 'pending'
  };
  
  bookings.push(newBooking);
  res.status(201).json(newBooking);
};

// Obtener todas las reservas
exports.getAllBookings = (req, res) => {
 const queryHotel = req.query.hotel;
 const checkInDate = req.query.fecha_inicio;
 const checkOutDate = req.query.fecha_fin;
 const roomType = req.query.tipo_habitacion;
 const status = req.query.estado;
 const totalGuests = req.query.num_huespedes;

 let filteredBookings = bookings;

 if (queryHotel) {
    filteredBookings = filteredBookings.filter(booking => booking.hotel === queryHotel);
 } 

 if (roomType) {
    filteredBookings = filteredBookings.filter(booking => booking.roomType === roomType);
 } 

 if (status) {
    filteredBookings = filteredBookings.filter(booking => booking.status === status);
 } 

 if (totalGuests) {
    filteredBookings = filteredBookings.filter(booking => booking.adults + booking.children > totalGuests);
 } 

 

res.json(filteredBookings);
};

// Obtener una reserva por ID
exports.getBookingById = (req, res) => {
  const id = parseInt(req.params.id);
  const booking = bookings.find(b => b.id === id);
  
  if (!booking) {
    return res.status(404).json({ error: 'Reserva no encontrada' });
  }
  
  res.json(booking);
};

// Actualizar una reserva
exports.updateBooking = (req, res) => {
  const id = parseInt(req.params.id);
  const booking = bookings.find(b => b.id === id);
  
  if (!booking) {
    return res.status(404).json({ error: 'Reserva no encontrada' });
  }

  // Actualizar la reserva
  const { email,
    hotel,
    roomType,
    checkInDate,
    checkOutDate,
    adults,
    children } = req.body;
  booking.email = email || booking.email;
  booking.hotel = hotel || booking.hotel;
  booking.roomType = roomType || booking.roomType;
  booking.checkInDate = checkInDate || booking.checkInDate;
  booking.checkOutDate = checkOutDate || booking.checkOutDate;
  booking.adults = adults || booking.adults;
  booking.children = children || booking.children;

  res.json(booking);
};

// Eliminar una reserva
exports.deleteBooking = (req, res) => {
  const id = parseInt(req.params.id);
  const bookingIndex = bookings.findIndex(b => b.id === id);
  
  if (bookingIndex === -1) {
    return res.status(404).json({ error: 'Reserva no encontrada' });
  }

  bookings.splice(bookingIndex, 1);
  res.json({ message: 'Reserva eliminada' });
};

// Buscar reservas por nombre de cliente
exports.searchBookings = (req, res) => {
  const { name } = req.query;
  const filteredBookings = bookings.filter(b => b.customerName.toLowerCase().includes(name.toLowerCase()));
  
  res.json(filteredBookings);
};
