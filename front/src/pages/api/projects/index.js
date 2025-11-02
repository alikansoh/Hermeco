import { getProjects, createProject, getProjectById, updateProject, deleteProject } from '@/controllers/projectController';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb',
  },
  
};
}
export default async function handler(req, res) {
  const { method } = req;

  try {
    switch (method) {
      case 'GET':
        if (req.query.id) {
          await getProjectById(req, res);
        } else {
          await getProjects(req, res);
        }
        break;
      case 'POST':
        await createProject(req, res);
        break;
      case 'PUT':
        await updateProject(req, res);
        break;
      case 'DELETE':
        await deleteProject(req, res);
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
        break;
    }
  } catch (error) {
    console.error('API handler error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}