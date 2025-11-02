import Project from '@/models/Project';
import mongoose from 'mongoose';
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
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

// 📌 Get all projects
export const getProjects = async (req, res) => {
  try {
    await dbConnect();
    const projects = await Project.find({});
    return res.status(200).json({ success: true, data: projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

// 📌 Get project by ID
export const getProjectById = async (req, res) => {
  const { id } = req.query;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, error: 'Invalid project ID' });
  }
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ success: false, error: 'Project not found' });
    return res.status(200).json({ success: true, data: project });
  } catch (error) {
    console.error('Error fetching project by ID:', error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

// 📌 Create new project
export const createProject = async (req, res) => {
  try {
    await dbConnect();
    const { fields, files } = await parseForm(req);

    const fixField = (field) => (Array.isArray(field) ? field[0] : field);

    let imageUrls = [];
    if (files.images) {
      const images = Array.isArray(files.images) ? files.images : [files.images];
      const validImages = images.filter((img) => img && img.filepath);
      if (validImages.length > 0) {
        const uploadedImages = await Promise.all(
          validImages.map((img) =>
            cloudinary.uploader.upload(img.filepath, { folder: 'projects' })
          )
        );
        imageUrls = uploadedImages.map((r) => r.secure_url);
      }
    }

    const newProject = await Project.create({
      title: fixField(fields.title),
      description: fixField(fields.description),
      date: new Date(fixField(fields.date)),
      featured: fixField(fields.featured) === 'true',
      images: imageUrls,
    });

    return res.status(201).json({ success: true, data: newProject });
  } catch (error) {
    console.error('Error creating project:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// 📌 Update project
export const updateProject = async (req, res) => {
  const { id } = req.query;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, error: 'Invalid project ID' });
  }

  try {
    await dbConnect();
    const { fields, files } = await parseForm(req);

    const fixField = (field) => (Array.isArray(field) ? field[0] : field);

    const existingProject = await Project.findById(id);
    if (!existingProject) return res.status(404).json({ success: false, error: 'Project not found' });

    let imageUrls = existingProject.images;
    if (files.images) {
      const newImages = Array.isArray(files.images) ? files.images : [files.images];
      const validImages = newImages.filter((img) => img && img.filepath);
      if (validImages.length > 0) {
        const uploaded = await Promise.all(
          validImages.map((img) =>
            cloudinary.uploader.upload(img.filepath, { folder: 'projects' })
          )
        );
        imageUrls = uploaded.map((r) => r.secure_url);
      }
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title: fixField(fields.title),
        description: fixField(fields.description),
        date: new Date(fixField(fields.date)),
        featured: fixField(fields.featured) === 'true',
        images: imageUrls,
      },
      { new: true, runValidators: true }
    );

    return res.status(200).json({ success: true, data: updatedProject });
  } catch (error) {
    console.error('Error updating project:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// 📌 Delete project
export const deleteProject = async (req, res) => {
  const { id } = req.query;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, error: 'Invalid project ID' });
  }
  try {
    await dbConnect();
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ success: false, error: 'Project not found' });
    return res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error('Error deleting project:', error);
    return res.status(400).json({ success: false, error: error.message });
  }
};