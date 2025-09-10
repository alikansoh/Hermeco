'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { 
  Users, 
  UserPlus, 
  Edit3, 
  Trash2, 
  Save, 
  X, 
  Shield,
  Key,
  User,
  Eye,
  EyeOff
} from 'lucide-react';

type User = {
  _id: string;
  username: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [editUsername, setEditUsername] = useState('');
  const [editPassword, setEditPassword] = useState('');
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showEditPassword, setShowEditPassword] = useState(false);

  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  // Fetch users safely
  const fetchUsers = async () => {
    if (!token) {
      toast.error('You are not logged in');
      setUsers([]);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/users', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      // Safely handle API response
      if (Array.isArray(data)) {
        setUsers(data);
      } else if (data && Array.isArray(data.users)) {
        setUsers(data.users);
      } else {
        setUsers([]);
        toast.error('Invalid data format from server');
      }
    } catch (err) {
      toast.error('Failed to fetch users');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Create new user
  const handleCreate = async () => {
    if (!token) return toast.error('You are not logged in');
    if (!newUsername || !newPassword)
      return toast.error('All fields required');

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username: newUsername, password: newPassword }),
      });

      if (!res.ok) throw new Error('Error creating user');

      toast.success('User created successfully!');
      setNewUsername('');
      setNewPassword('');
      setShowNewPassword(false);
      fetchUsers();
    } catch {
      toast.error('Failed to create user');
    }
  };

  // Edit user
  const handleEdit = async () => {
    if (!token) return toast.error('You are not logged in');
    if (!editUsername) return toast.error('Username is required');

    try {
      const res = await fetch(`/api/users/${editingUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username: editUsername, password: editPassword }),
      });

      if (!res.ok) throw new Error('Error updating user');

      toast.success('User updated successfully!');
      setEditUsername('');
      setEditPassword('');
      setEditingUserId(null);
      setShowEditPassword(false);
      fetchUsers();
    } catch {
      toast.error('Failed to update user');
    }
  };

  // Delete user
  const handleDelete = async (id: string) => {
    if (!token) return toast.error('You are not logged in');
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;

    try {
      const res = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error('Failed to delete');

      toast.success('User deleted successfully!');
      fetchUsers();
    } catch {
      toast.error('Failed to delete user');
    }
  };

  // Start editing user
  const startEdit = (user: User) => {
    setEditingUserId(user._id);
    setEditUsername(user.username);
    setEditPassword('');
    setShowEditPassword(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingUserId(null);
    setEditUsername('');
    setEditPassword('');
    setShowEditPassword(false);
  };

  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-amber-50 to-gray-100 min-h-screen">
      {/* Professional header pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-700"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white border border-yellow-200 px-6 py-3 rounded-lg shadow-sm mb-6">
            <Shield className="w-5 h-5 text-yellow-700" />
            <span className="text-yellow-800 font-semibold">Admin Dashboard</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            User <span className="bg-gradient-to-r from-yellow-500 to-amber-700 bg-clip-text text-transparent">Management</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Manage system users with full administrative control. Create, edit, and delete user accounts securely.
          </p>
        </div>

        {/* Create User Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-yellow-200 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center">
              <UserPlus className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Add New User</h2>
              <p className="text-gray-600">Create a new system user account</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="newUsername" className="block text-sm font-semibold text-gray-700">
                Username *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  id="newUsername"
                  placeholder="Enter username"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200 bg-white"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="newPassword" className="block text-sm font-semibold text-gray-700">
                Password *
              </label>
              <div className="relative">
                <Key className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  placeholder="Enter password"
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-200 bg-white"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <button
              onClick={handleCreate}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <UserPlus className="w-5 h-5" />
              Create User
            </button>
          </div>
        </div>

        {/* Edit User Form */}
        {editingUserId && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-300 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                <Edit3 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Edit User</h2>
                <p className="text-gray-600">Update user account information</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="editUsername" className="block text-sm font-semibold text-gray-700">
                  Username *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    id="editUsername"
                    placeholder="Enter username"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200 bg-white"
                    value={editUsername}
                    onChange={(e) => setEditUsername(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="editPassword" className="block text-sm font-semibold text-gray-700">
                  New Password (optional)
                </label>
                <div className="relative">
                  <Key className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type={showEditPassword ? "text" : "password"}
                    id="editPassword"
                    placeholder="Enter new password"
                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-200 bg-white"
                    value={editPassword}
                    onChange={(e) => setEditPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowEditPassword(!showEditPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showEditPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={handleEdit}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Save className="w-5 h-5" />
                Update User
              </button>
              <button
                onClick={cancelEdit}
                className="inline-flex items-center gap-3 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
              >
                <X className="w-5 h-5" />
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Users Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-yellow-200 overflow-hidden">
          <div className="p-8 border-b border-yellow-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">System Users</h2>
                <p className="text-gray-600">Manage all registered users</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {loading ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg">Loading users...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-yellow-100">
                      <th className="text-left py-4 px-6 font-bold text-gray-900">
                        <div className="flex items-center gap-2">
                          <User className="w-5 h-5 text-yellow-600" />
                          Username
                        </div>
                      </th>
                      <th className="text-right py-4 px-6 font-bold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(users) && users.length > 0 ? (
                      users.map((user, index) => (
                        <tr key={user._id} className={`border-b border-yellow-50 hover:bg-yellow-50/50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white/50' : 'bg-yellow-25/25'}`}>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">
                                  {user.username.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <span className="font-medium text-gray-900">{user.username}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center justify-end gap-3">
                              <button
                                onClick={() => startEdit(user)}
                                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                              >
                                <Edit3 className="w-4 h-4" />
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(user._id)}
                                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                              >
                                <Trash2 className="w-4 h-4" />
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2} className="text-center py-12">
                          <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                              <Users className="w-8 h-8 text-gray-400" />
                            </div>
                            <div className="text-center">
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">No users found</h3>
                              <p className="text-gray-600">Create your first user to get started</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-amber-700 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold">{users.length}</div>
                <div className="text-yellow-100">Total Users</div>
              </div>
              <div className="w-px h-12 bg-yellow-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {editingUserId ? '1' : '0'}
                </div>
                <div className="text-yellow-100">Active Edits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}