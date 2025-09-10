'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Phone, 
  Mail, 
  User, 
  Briefcase, 
  MessageSquare, 
  Trash2, 
  Eye, 
  X,
  Search,
  Filter,
  Loader2,
  AlertTriangle,
  CheckCircle,
  Clock,
  Edit3
} from 'lucide-react';

type Booking = {
  _id: string;
  fullName: string;
  email: string;
  telephone: string;
  details: string;
  service: string;
  createdAt?: string;
  status?: 'pending' | 'contacted' | 'completed';
};

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [statusUpdateLoading, setStatusUpdateLoading] = useState<string | null>(null);
  
  const router = useRouter();

  // Toast notification function (simplified)
  const showToast = (message: string, type: 'success' | 'error') => {
    // You can integrate with your preferred toast library here
    console.log(`${type.toUpperCase()}: ${message}`);
    alert(`${type.toUpperCase()}: ${message}`);
  };

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      router.push('/login');
    } else {
      fetchBookings();
    }
  }, [router]);

  useEffect(() => {
    let filtered = bookings;
    
    if (searchTerm) {
      filtered = filtered.filter(booking => 
        booking.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.service.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filterStatus !== 'all') {
      filtered = filtered.filter(booking => booking.status === filterStatus);
    }
    
    setFilteredBookings(filtered);
  }, [bookings, searchTerm, filterStatus]);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/bookings', {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (!res.ok) throw new Error('Failed to fetch bookings');
      
      const data = await res.json();
      const bookingsData = Array.isArray(data) ? data : data.data || [];
      setBookings(bookingsData);
    } catch (error) {
      showToast('Failed to fetch bookings', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: 'pending' | 'contacted' | 'completed') => {
    setStatusUpdateLoading(id);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/bookings/${id}`, {
        method: 'PATCH',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (!res.ok) throw new Error('Failed to update booking status');
      
      showToast('Booking status updated successfully', 'success');
      
      // Update local state
      setBookings(prevBookings => 
        prevBookings.map(booking => 
          booking._id === id ? { ...booking, status: newStatus } : booking
        )
      );
      
      // Update selected booking if it's the one being updated
      if (selectedBooking && selectedBooking._id === id) {
        setSelectedBooking({ ...selectedBooking, status: newStatus });
      }
    } catch (error) {
      showToast('Failed to update booking status', 'error');
    } finally {
      setStatusUpdateLoading(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;
    
    setDeleteLoading(id);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/bookings/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (!res.ok) throw new Error('Failed to delete booking');
      
      showToast('Booking deleted successfully', 'success');
      fetchBookings();
      setSelectedBooking(null);
    } catch (error) {
      showToast('Failed to delete booking', 'error');
    } finally {
      setDeleteLoading(null);
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'contacted': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'contacted': return <Phone className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusText = (status?: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'contacted': return 'Contacted';
      default: return 'Pending';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-16 h-16 mb-6 mx-auto">
            <div className="w-16 h-16 border-4 border-yellow-200 rounded-full"></div>
            <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin absolute inset-0"></div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Loading Bookings</h3>
          <p className="text-gray-600">Fetching customer inquiries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900">Customer Bookings</h1>
              <p className="text-gray-600 text-lg">Manage and respond to customer inquiries</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 border border-yellow-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{bookings.length}</p>
                  <p className="text-sm text-gray-600">Total Bookings</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-blue-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {bookings.filter(b => b.status === 'contacted').length}
                  </p>
                  <p className="text-sm text-gray-600">Contacted</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-yellow-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {bookings.filter(b => !b.status || b.status === 'pending').length}
                  </p>
                  <p className="text-sm text-gray-600">Pending</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {bookings.filter(b => b.status === 'completed').length}
                  </p>
                  <p className="text-sm text-gray-600">Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-xl shadow-sm border border-yellow-200 p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search bookings by name, email, or service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="contacted">Contacted</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bookings Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Bookings Found</h3>
              <p className="text-gray-600">
                {bookings.length === 0 
                  ? "No customer bookings have been received yet." 
                  : "No bookings match your current search criteria."
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredBookings.map((booking, index) => (
                  <motion.div
                    key={booking._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <User className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{booking.fullName}</h3>
                          <p className="text-sm text-gray-600">{booking.service}</p>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-lg border text-xs font-medium flex items-center gap-1 ${getStatusColor(booking.status)}`}>
                        {getStatusIcon(booking.status)}
                        {getStatusText(booking.status)}
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{booking.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{booking.telephone}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <MessageSquare className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">
                          {booking.details.length > 100 
                            ? booking.details.slice(0, 100) + '...' 
                            : booking.details}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedBooking(booking)}
                        className="flex-1 flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>

        {/* Booking Details Modal */}
        <AnimatePresence>
          {selectedBooking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBooking(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-auto shadow-2xl"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <User className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Booking Details</h2>
                        <p className="text-gray-600">{selectedBooking.service}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedBooking(null)}
                      className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  {/* Status Update Section */}
                  <div className="mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Edit3 className="w-5 h-5 text-gray-600" />
                          <span className="font-semibold text-gray-900">Current Status</span>
                        </div>
                        <div className={`px-3 py-1 rounded-lg border text-sm font-medium flex items-center gap-2 ${getStatusColor(selectedBooking.status)}`}>
                          {getStatusIcon(selectedBooking.status)}
                          {getStatusText(selectedBooking.status)}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {(['pending', 'contacted', 'completed'] as const).map((status) => (
                          <button
                            key={status}
                            onClick={() => handleStatusUpdate(selectedBooking._id, status)}
                            disabled={selectedBooking.status === status || statusUpdateLoading === selectedBooking._id}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                              selectedBooking.status === status
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : status === 'pending'
                                ? 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800'
                                : status === 'contacted'
                                ? 'bg-blue-100 hover:bg-blue-200 text-blue-800'
                                : 'bg-green-100 hover:bg-green-200 text-green-800'
                            }`}
                          >
                            {statusUpdateLoading === selectedBooking._id ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              getStatusIcon(status)
                            )}
                            Mark as {getStatusText(status)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <User className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="text-sm text-gray-500">Full Name</p>
                          <p className="font-semibold text-gray-900">{selectedBooking.fullName}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <Mail className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="text-sm text-gray-500">Email Address</p>
                          <p className="font-semibold text-gray-900">{selectedBooking.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <Phone className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="text-sm text-gray-500">Phone Number</p>
                          <p className="font-semibold text-gray-900">{selectedBooking.telephone}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <Briefcase className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="text-sm text-gray-500">Service Type</p>
                          <p className="font-semibold text-gray-900">{selectedBooking.service}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-gray-600 mt-1" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-2">Project Details</p>
                        <p className="text-gray-900 whitespace-pre-wrap leading-relaxed">{selectedBooking.details}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid md:grid-cols-3 gap-3">
                    <a
                      href={`mailto:${selectedBooking.email}`}
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                    <a
                      href={`tel:${selectedBooking.telephone}`}
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <button
                      onClick={() => handleDelete(selectedBooking._id)}
                      disabled={deleteLoading === selectedBooking._id}
                      className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                    >
                      {deleteLoading === selectedBooking._id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}