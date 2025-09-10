// controllers/bookingController.js
import dbConnect from '@/lib/dbConnect';
import Booking from '@/models/Booking';

// 📌 Get all bookings
export const getBookings = async (req, res) => {
  try {
    await dbConnect();
    const bookings = await Booking.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch bookings', error: error.message });
  }
};

// 📌 Get booking by ID
export const getBookingById = async (req, res) => {
  try {
    await dbConnect();
    const { id } = req.query;

    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ success: false, message: 'Invalid booking ID' });
    }

    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ success: false, message: 'Booking not found' });

    return res.status(200).json({ success: true, data: booking });
  } catch (error) {
    console.error('Error fetching booking by ID:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch booking', error: error.message });
  }
};

// 📌 Create new booking
export const createBooking = async (req, res) => {
  try {
    await dbConnect();
    const { fullName, email, telephone, details, service, status } = req.body;

    if (!fullName || !email || !telephone || !details || !service) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const newBooking = await Booking.create({
      fullName,
      email,
      telephone,
      details,
      service,
      status: status || 'pending', // 👈 default to "pending"
    });

    return res.status(201).json({ success: true, data: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    return res.status(500).json({ success: false, message: 'Failed to create booking', error: error.message });
  }
};

// 📌 Update booking
export const updateBooking = async (req, res) => {
  try {
    await dbConnect();
    const { id } = req.query;
    const { fullName, email, telephone, details, service, status } = req.body;

    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ success: false, message: 'Invalid booking ID' });
    }

    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { fullName, email, telephone, details, service, status }, // 👈 allow status update
      { new: true, runValidators: true }
    );

    if (!updatedBooking) return res.status(404).json({ success: false, message: 'Booking not found' });

    return res.status(200).json({ success: true, data: updatedBooking });
  } catch (error) {
    console.error('Error updating booking:', error);
    return res.status(500).json({ success: false, message: 'Failed to update booking', error: error.message });
  }
};

// 📌 Delete booking
export const deleteBooking = async (req, res) => {
  try {
    await dbConnect();
    const { id } = req.query;

    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ success: false, message: 'Invalid booking ID' });
    }

    const deleted = await Booking.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Booking not found' });

    return res.status(200).json({ success: true, message: 'Booking deleted' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    return res.status(500).json({ success: false, message: 'Failed to delete booking', error: error.message });
  }
};
 