const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: String,
    small_image: String,
    normal_image: String,
    rule_text: String
});

module.exports = mongoose.model("favCards", cardSchema);