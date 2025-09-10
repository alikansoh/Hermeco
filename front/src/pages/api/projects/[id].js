import { getProjectById, updateProject, deleteProject } from '@/controllers/projectController';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { method } = req;

  try {
    switch (method) {
      case 'GET':
        return await getProjectById(req, res);
      case 'PUT':
        return await updateProject(req, res);
      case 'DELETE':
        return await deleteProject(req, res);
      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
    }
  } catch (error) {
    console.error('API handler error:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
