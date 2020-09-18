const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/users-controller');

// get all users
// create a user
// route: /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// get a user  by ID
// update a user by ID
// delete a user by ID
// route: /api/users/:id
  router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// add a friend to a user
// delete a friend from a user
// route: /api/users/:id/friends/:friendId
  router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;


