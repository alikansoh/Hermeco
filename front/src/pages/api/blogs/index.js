import { getBlogs, createBlog} from '@/controllers/blogController';
export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(req, res) {
  if (req.method === 'GET') {
    return getBlogs(req, res);
  }
  if (req.method === 'POST') {
    return createBlog(req, res);
  }
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
