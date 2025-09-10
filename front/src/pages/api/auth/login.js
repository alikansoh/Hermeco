import jwt from 'jsonwebtoken';
import { authenticateUser } from '@/controllers/userController';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const user = await authenticateUser(req.body);
    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}
