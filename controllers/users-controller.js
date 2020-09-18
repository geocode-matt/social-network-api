const { Users } = require('../models');

// USER ROUTES //
// get all users
// get a user by its _id, populate thoughts and friends data
// create a new user
// update a user
// delete a user
// add a friend to a user's friend list
// delete a friend from a user's friend list

const usersController = {

    // Create User
    createUser({body}, res) {
        Users.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
          });
    },

    // Get all users
    getAllUsers(req, res) {
        Users.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    }

}

module.exports = usersController;