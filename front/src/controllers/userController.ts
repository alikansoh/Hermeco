// services/userService.ts
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

// Connect to MongoDB
async function connect() {
  await dbConnect();
}

// 📌 Get all users (excluding password)
export async function getAllUsers() {
  await connect();
  return await User.find({}, '-password').lean();
}

// 📌 Get user by ID
export async function getUserById(id: string) {
  await connect();
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Invalid user ID');

  const user = await User.findById(id, '-password').lean();
  if (!user) throw new Error('User not found');

  return user;
}

// 📌 Create new user
export async function createUser({ username, password }: { username: string; password: string }) {
  await connect();

  const existing = await User.findOne({ username });
  if (existing) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();

  return user._id;
}

// 📌 Update user
type UpdateUserData = {
  username?: string;
  password?: string;
};

export async function updateUser(id: string, data: UpdateUserData) {
  await connect();
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Invalid user ID');

  const update: UpdateUserData = {};
  if (data.username) update.username = data.username;
  if (data.password) update.password = await bcrypt.hash(data.password, 10);

  const updated = await User.findByIdAndUpdate(id, update, { new: true, runValidators: true });
  if (!updated) throw new Error('User not found');

  return updated._id;
}

// 📌 Delete user
export async function deleteUser(id: string) {
  await connect();
  if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Invalid user ID');

  const deleted = await User.findByIdAndDelete(id);
  if (!deleted) throw new Error('User not found');

  return true;
}

// 📌 Authenticate user
export async function authenticateUser({ username, password }: { username: string; password: string }) {
  await connect();

  const user = await User.findOne({ username });
  if (!user) throw new Error('Invalid credentials');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Invalid credentials');

  return {
    _id: user._id,
    username: user.username,
  };
}
