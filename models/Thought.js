//setupt the model for the thought input information
const { Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            require: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: (date) => moment(date).format('MMM DD, YYYY [at] hh:mm a')
        },
        username:{
            type:String,
            required: 'true',
        },
        reactions: [reactionSchema],
    },
    {
        toJSON:{
            getters: true,
            virtuals: true,
            id: false,
        }
    }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema)

module.exports = Thought;