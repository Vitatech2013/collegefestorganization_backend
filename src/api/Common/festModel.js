import mongoose from 'mongoose'

const festSchema = new mongoose.Schema({
    festname: {
        type: String
    },
    startfrom: {
        type: String
    },
    end: {
        type: String
    },
    description: {
        type: String
    },
    username: {
        type: String
    },
    file: {
        type: String
    }
},
    {
        timestamps: true

    });

const festModel = mongoose.model('fests', festSchema)

export default festModel