import mongoose from 'mongoose'

const organizerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    designation: {
        type: String
    },
    branch: {
        type: String
    },
    email: {
        type: String
    },
    contactno: {
        type: String
    },
    selectname: {
        type: String
    }
},
    {
        timestamps: true

    });

const organizerModel = mongoose.model('organizers', organizerSchema)

export default organizerModel