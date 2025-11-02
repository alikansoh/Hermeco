// controllers/projectController.js
import Project from '@/models/Project';
import mongoose from 'mongoose';
import dbConnect from '@/lib/dbConnect'; 

// ❌ REMOVED: formidable and bodyParser config
// Now we're receiving JSON with Cloudinary URLs only

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
    await dbConnect();
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
    
    // Now receiving JSON with Cloudinary URLs already uploaded from client
    const { title, description, date, featured, images } = req.body;

    // Validate required fields
    if (!title || !description || !date) {
      return res.status(400).json({ 
        success: false, 
        error: 'Title, description, and date are required' 
      });
    }

    const newProject = await Project.create({
      title,
      description,
      date: new Date(date),
      featured: featured === 'true' || featured === true,
      images: images || [], // Array of Cloudinary URLs
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
    
    // Receiving JSON with new Cloudinary URLs
    const { title, description, date, featured, images } = req.body;

    const existingProject = await Project.findById(id);
    if (!existingProject) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }

    // Use new images if provided, otherwise keep existing
    const imageUrls = images && images.length > 0 ? images : existingProject.images;

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title,
        description,
        date: new Date(date),
        featured: featured === 'true' || featured === true,
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
    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }
    return res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error('Error deleting project:', error);
    return res.status(400).json({ success: false, error: error.message });
  }
};