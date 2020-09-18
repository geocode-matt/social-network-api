const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thoughts'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'Users'
    }],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

  // get length of friends array
  UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

  // create the User model using UserSchema
const Users = model('Users', UserSchema);

// export the User model
module.exports = Users;