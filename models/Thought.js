
const { Schema, model} = require('mongoose');
const reactionModel = require('./Reaction');
const moment = require('moment');

const thoughtModel = new Schema(
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
        reactions: [reactionModel],
    },
    {
        toJSON:{
            getters: true,
            virtuals: true,
            id: false,
        }
    }
);

thoughtModel.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('thought', thoughtModel)

module.exports = Thought;