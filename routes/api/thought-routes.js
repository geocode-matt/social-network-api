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

// get a thought by ID
// update a thought by ID
// delete a thought by ID
// route: /api/thoughts/:id
  // router
  // .route('/:id')
  // .get(getUserById)
  // .put(updateUser)
  // .delete(deleteUser);

// add a friend to a user
// delete a friend from a user
// route: /api/users/:id/friends/:friendId
  // router
  // .route('/:id/friends/:friendId')
  // .post(addFriend)
  // .delete(deleteFriend);

module.exports = router;

module.exports = router;