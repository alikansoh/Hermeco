import { getUserById, updateUser, deleteUser } from '@/controllers/userController';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    if (req.method === 'GET') {
      const user = await getUserById(id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      delete user.password;
      res.status(200).json(user);

    } else if (req.method === 'PUT') {
      await updateUser(id, req.body);
      res.status(200).json({ message: 'User updated' });

    } else if (req.method === 'DELETE') {
      await deleteUser(id);
      res.status(200).json({ message: 'User deleted' });

    } else {
      res.status(405).end();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
