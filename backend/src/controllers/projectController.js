
import Project from "../models/Project.js";

// =====================================
// GET /api/projects
// Get published projects with filters
// =====================================

export const getProjects = async (req, res) => {
  try {
    const { projectType, category, featured } = req.query;

    const filter = {
      published: true,
    };

    // Project type filter
    if (projectType) {
      const allowedTypes = ["company", "personal", "freelance"];

      if (!allowedTypes.includes(projectType)) {
        return res.status(400).json({
          success: false,
          message: "Invalid project type",
        });
      }

      filter.projectType = projectType;
    }

    // Category filter
    if (category) {
      const allowedCategories = [
        "fullstack",
        "frontend",
        "backend",
        "ai",
      ];

      if (!allowedCategories.includes(category)) {
        return res.status(400).json({
          success: false,
          message: "Invalid project category",
        });
      }

      filter.category = category;
    }

    // Featured filter
    if (featured !== undefined) {
      if (!["true", "false"].includes(featured)) {
        return res.status(400).json({
          success: false,
          message: "Featured must be true or false",
        });
      }

      filter.featured = featured === "true";
    }

    const projects = await Project.find(filter)
      .sort({ featured: -1, createdAt: -1 })
      .select(
        "-problem -solution -architecture -technicalHighlights -__v"
      )
      .lean();

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error("Get projects error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch projects",
    });
  }
};

// =====================================
// GET /api/projects/:slug
// Get complete project details
// =====================================

export const getProjectBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const project = await Project.findOne({
      slug: slug.toLowerCase(),
      published: true,
    })
      .select("-__v")
      .lean();

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error("Get project details error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch project details",
    });
  }
};



export const getProjectNavigation = async (req, res) => {
  try {
    const projects = await Project.find({ published: true })
      .sort({ createdAt: -1 })
      .select("title slug projectType")
      .lean();

    return res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    console.error("Get project navigation error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch project navigation",
    });
  }
};