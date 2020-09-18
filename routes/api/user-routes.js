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