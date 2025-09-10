import { getBlogBySlug, updateBlog, deleteBlog } from'@/controllers/blogController';
export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(req, res) {
  if (req.method === 'GET') {
    return getBlogBySlug(req, res);
  }
  if (req.method === 'PATCH' || req.method === 'PUT') {
    return updateBlog(req, res);
  }
  if (req.method === 'DELETE') {
    return deleteBlog(req, res);
  }
  res.setHeader('Allow', ['GET', 'PUT', 'DELETE','PATCH']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
