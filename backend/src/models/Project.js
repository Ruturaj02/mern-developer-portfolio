
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    // =====================================
    // 1. BASIC PROJECT INFORMATION
    // =====================================

    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
      maxlength: 100,
    },

    slug: {
      type: String,
      required: [true, "Project slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
      maxlength: 500,
    },

    // =====================================
    // 2. PROJECT TYPE AND CATEGORY
    // =====================================

    projectType: {
      type: String,
      enum: ["company", "personal", "freelance"],
      required: [true, "Project type is required"],
    },

    category: {
      type: String,
      enum: ["fullstack", "frontend", "backend", "ai"],
      required: [true, "Project category is required"],
    },

    // =====================================
    // 3. PROJECT CASE STUDY
    // Applicable to both project types
    // =====================================

    problem: {
      type: String,
      default: "",
      trim: true,
    },

    solution: {
      type: String,
      default: "",
      trim: true,
    },

    features: {
      type: [String],
      default: [],
    },

    // =====================================
    // 4. PROJECT IMAGES
    // Mainly for personal projects.
    // Company screenshots must be authorized.
    // =====================================

    image: {
      type: String,
      default: "",
      trim: true,
    },

    coverImage: {
      type: String,
      default: "",
      trim: true,
    },

    screenshots: {
      type: [String],
      default: [],
    },

    // =====================================
    // 5. TECHNOLOGIES AND ARCHITECTURE
    // =====================================

    technologies: {
      type: [String],
      required: [true, "Technologies are required"],
      validate: {
        validator: (items) =>
          Array.isArray(items) && items.length > 0,
        message: "Add at least one technology",
      },
    },

    architecture: {
      type: String,
      default: "",
      trim: true,
    },

    technicalHighlights: {
      type: [String],
      default: [],
    },

    // =====================================
    // 6. YOUR ROLE AND CONTRIBUTIONS
    // Particularly important for company work
    // =====================================

    role: {
      type: String,
      default: "",
      trim: true,
    },

    responsibilities: {
      type: [String],
      default: [],
    },

    // =====================================
    // 7. PROJECT LINKS
    // Company projects can leave these empty.
    // Personal projects can provide real URLs.
    // =====================================

    liveUrl: {
      type: String,
      default: "",
      trim: true,
    },

    githubUrl: {
      type: String,
      default: "",
      trim: true,
    },

    caseStudyUrl: {
      type: String,
      default: "",
      trim: true,
    },

    // Controls whether the Live Demo button
    // should be displayed on the frontend.
    showLiveDemo: {
      type: Boolean,
      default: false,
    },

    // =====================================
    // 8. DISPLAY SETTINGS
    // =====================================

    featured: {
      type: Boolean,
      default: false,
    },

    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// =====================================
// 9. DATABASE INDEX
// =====================================

projectSchema.index({
  projectType: 1,
  published: 1,
  featured: -1,
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
