import { createUser, getAllUsers } from '@/controllers/userController';
import { verifyToken } from '@/middleware/verifyToken';

export default async function handler(req, res) {
  const { method } = req;

  // 🔐 Verify token before any method
  const user = verifyToken(req);
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized: Invalid or missing token' });
  }

  try {
    switch (method) {
      case 'GET':
        const users = await getAllUsers();
        return res.status(200).json(users);

      case 'POST':
        const id = await createUser(req.body);
        return res.status(201).json({ message: 'User created', id });

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
