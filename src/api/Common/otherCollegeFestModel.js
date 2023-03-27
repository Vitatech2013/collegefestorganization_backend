import mongoose from 'mongoose'

const otherFestSchema = new mongoose.Schema({
    festname: {
        type: String
    },
    college: {
        type: String
    },
    startsfrom: {
        type: String
    },
    endon: {
        type: String
    },
    contactno: {
        type: String
    },
    email: {
        type: String
    },
    website: {
        type: String
    },
    file: {
        type: String
    }
},
    {
        timestamps: true

    });

const otherCollegeFestModel = mongoose.model('otherfests', otherFestSchema)

export default otherCollegeFestModel