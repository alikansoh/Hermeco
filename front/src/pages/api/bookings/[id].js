import { getBookingById, updateBooking, deleteBooking } from'@/controllers/bookingController';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return getBookingById(req, res);
  }
  if (req.method === 'PATCH' || req.method === 'PUT') {
    return updateBooking(req, res);
  }
  if (req.method === 'DELETE') {
    return deleteBooking(req, res);
  }
  res.setHeader('Allow', ['GET', 'PUT', 'DELETE','PATCH']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
