import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    dateRange: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    }
})

module.exports = mongoose.models.User || mongoose.model('User', userSchema)