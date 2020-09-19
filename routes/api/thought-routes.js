const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controller');


////////// get all thoughts //////////
////////// route: /api/thoughts //////////
router
  .route('/')
  .get(getAllThoughts)

////////// create a thought //////////
////////// route: /api/thoughts/:userId //////////
router
  .route('/:userId')
  .post(createThought);

////////// get a thought by its ID //////////
////////// edit a thought by its ID //////////
////////// delete a thought by its ID //////////
////////// route: /api/thoughts/:id //////////
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

  
////////// add reaction to a given thought //////////
////////// route: api/thoughts/:thoughtId/reactions //////////
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

////////// delete reaction based on its reactionId //////////
////////// route: api/thoughts/:thoughtId/reactions/:reactionId //////////
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);


module.exports = router;

module.exports = router;