const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router
  .route("/")
  .get(getAllThoughts)
  .post(addThought);

// /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/:thoughtId/reactions

router
  .route("/:thoughtId/reactions")
  .post(addReaction)
  .delete(removeReaction);
