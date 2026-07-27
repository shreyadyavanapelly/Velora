const {Schema} = require('mongoose');

const WatchlistSchema = new Schema({
    name: String,
    price: Number,
    percent: String,
    mode: String,
    qty: Number,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = {WatchlistSchema};