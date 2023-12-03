const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_lenght: 1, 
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp)=> timestamp.toLocaleDateString()
    },
    username: {
      type: String,
      required: true,
      
    },
    
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);
thoughtSchema.virtual("reactionCount").get(function (){
  return this.reactions.length
})


const Thought = model('thought', thoughtSchema);

module.exports = Thought;
