const router = require('express').Router();

// USER ROUTES //
// get all users
// get a user by its _id, populate thoughts and friends data
// create a new user
// update a user
// delete a user
// add a friend to a user's friend list
// delete a friend from a user's friend list

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
// /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// get a user  by ID
// update a user by ID
// delete a user by ID
// /api/users/:id
//   router
//   .route('/:id')
//   .get(getUserById)
//   .put(updateUser)
//   .delete(deleteUser);

// add a friend to a user
// delete a friend from a user
// /api/users/
//   router
//   .route('/:id')
//   .put(updateUser)
//   .delete(deleteUser);

module.exports = router;


