import Blog from '@/models/Blog';
import formidable from 'formidable';
import cloudinary from '@/lib/cloudinary';
import dbConnect from '@/lib/dbConnect'; 

export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper to parse form using Promise
const parseForm = (req) =>
  new Promise((resolve, reject) => {
    const form = formidable({ multiples: false, maxFileSize: 10 * 1024 * 1024 });
    form.parse(req, (err, fields, files) => (err ? reject(err) : resolve({ fields, files })));
  });

// 📌 Get all blogs
export const getBlogs = async (req, res) => {
  try {
    await dbConnect();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

// 📌 Get blog by slug
export const getBlogBySlug = async (req, res) => {
  const { slug } = req.query;
  try {
    await dbConnect();
    const blog = await Blog.findOne({ slug });
    if (!blog) return res.status(404).json({ success: false, error: 'Blog not found' });
    return res.status(200).json({ success: true, data: blog });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

// 📌 Create blog
export const createBlog = async (req, res) => {
  try {
    await dbConnect();
    const { fields, files } = await parseForm(req);
    const fixField = (field) => (Array.isArray(field) ? field[0] : field);

    const title = fixField(fields.title);
    const slug = fixField(fields.slug);
    const content = fixField(fields.content);
    if (!title || !slug || !content)
      return res.status(400).json({ success: false, error: 'Title, slug, and content are required' });

    let imageUrl = null;
    if (files.image) {
      const image = Array.isArray(files.image) ? files.image[0] : files.image;
      if (image && image.filepath) {
        const uploadResult = await cloudinary.uploader.upload(image.filepath, {
          folder: 'blog-images',
          transformation: [{ width: 1200, height: 630, crop: 'fill' }, { quality: 'auto' }, { fetch_format: 'auto' }],
        });
        imageUrl = uploadResult.secure_url;
      }
    }

    const tags = fixField(fields.tags)
      ? fixField(fields.tags).split(',').map((t) => t.trim()).filter(Boolean)
      : [];

    const newBlog = await Blog.create({
      title,
      slug,
      content,
      image: imageUrl,
      author: fixField(fields.author) || 'Admin',
      tags,
    });

    return res.status(201).json({ success: true, data: newBlog });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// 📌 Update blog by slug
export const updateBlog = async (req, res) => {
  const { slug } = req.query;
  try {
    await dbConnect();
    const existingBlog = await Blog.findOne({ slug });
    if (!existingBlog) return res.status(404).json({ success: false, error: 'Blog not found' });

    const { fields, files } = await parseForm(req);
    const fixField = (field) => (Array.isArray(field) ? field[0] : field);

    let imageUrl = existingBlog.image;
    if (files.image) {
      const image = Array.isArray(files.image) ? files.image[0] : files.image;
      if (image && image.filepath) {
        const uploadResult = await cloudinary.uploader.upload(image.filepath, {
          folder: 'blog-images',
          transformation: [{ width: 1200, height: 630, crop: 'fill' }, { quality: 'auto' }, { fetch_format: 'auto' }],
        });
        imageUrl = uploadResult.secure_url;
      }
    }

    const tags = fixField(fields.tags)
      ? fixField(fields.tags).split(',').map((t) => t.trim()).filter(Boolean)
      : [];

    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      {
        title: fixField(fields.title),
        slug: fixField(fields.slug),
        content: fixField(fields.content),
        image: imageUrl,
        author: fixField(fields.author) || 'Admin',
        tags,
      },
      { new: true, runValidators: true }
    );

    return res.status(200).json({ success: true, data: updatedBlog });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// 📌 Delete blog by slug
export const deleteBlog = async (req, res) => {
  const { slug } = req.query;
  try {
    await dbConnect();
    const deleted = await Blog.findOneAndDelete({ slug });
    if (!deleted) return res.status(404).json({ success: false, error: 'Blog not found' });
    return res.status(200).json({ success: true, data: {} });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
