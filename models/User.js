const { Schema, model, Types } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: "Username is Required",
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: "Email is Required",
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    thoughts: [
      { 
        type: Schema.Types.ObjectId, 
        ref: "Thoughts" 
      }
    ],
    friends: [
      { 
        type: Schema.Types.ObjectId, 
        ref: "User" 
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const User = model("User", UserSchema);

module.exports = User;
