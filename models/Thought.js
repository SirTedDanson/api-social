const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat.js");

// Reaction Subdocument (reactionId, reactionBody, username, createdAt)
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: "Text is Required",
      validate: [
        ({ length }) => length <= 280,
        "Maximum character limit is 280",
      ],
    },
    username: {
      type: String,
      required: "Username is Required",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal), // date formatter 
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Thought Model Schema (thoughtText, createdAt, username, reactions)
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Text is Required",
      validate: [
        ({ length }) => length >= 1 && length <= 280,
        "Incorrect password length",
      ],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal), // date formatter 
    },
    username: {
      type: String,
      required: "Username is Required",
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Virtual for displaying amount of reactions for a thought
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
