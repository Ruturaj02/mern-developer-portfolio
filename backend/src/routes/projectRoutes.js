import express from "express";

import {
  getProjectBySlug,
  getProjects,
  getProjectNavigation,
} from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);

// Keep this route after the root route.
// The navigation endpoint must be before /:slug.
router.get("/navigation", getProjectNavigation);

router.get("/:slug", getProjectBySlug);

export default router;