import mongoose from 'mongoose'


const studentSchema = new mongoose.Schema({
    
    hallticketno: {
        type: String
    },
    username: {
        type: String
    },
    pwd: {
        type: String
    },
    studentname: {
        type: String
    },
    college: {
        type: String
    },
    branch: {
        type: String
    },
    contactno: {
        type: String
    },
    email: {
        type: String
    }
}, {
        timestamps: true

    });

const studentModal = mongoose.model('students', studentSchema)

export default studentModal