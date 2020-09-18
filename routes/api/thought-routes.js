const router = require('express').Router();

// THOUGHT ROUTES //
// get all thoughts
// get a thought by _id
// create a new thought
// update a thought
// delete a thought
// create a reaction to a thought
// delete a reaction from a thought

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controller');


// get all thoughts
// route: /api/thoughts
router
  .route('/')
  .get(getAllThoughts)

// create a thought
// route: /api/thoughts/:userId
router
  .route('/:userId')
  .post(createThought);

// get a thought by its ID
// edit a thought by its ID
// delete a thought by its ID
// route: /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

  
// add reaction to a given thought
// route: api/thoughts/:thoughtId/reactions

// delete reaction based on its reactionId
// route: api/thoughts/:thoughtId/reactions/:reactionId


module.exports = router;

module.exports = router;