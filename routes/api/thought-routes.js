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