import mongoose from 'mongoose'

const eventsSchema = new mongoose.Schema({
    festname: {
        type: String
    },
    eventname: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    coordinater1: {
        type: String
    },
    coordinater2: {
        type: String
    },
    coordinater3: {
        type: String
    },
    valenteer1: {
        type: String
    },
    valenteer2: {
        type: String
    },
    valenteer3: {
        type: String
    },
    file: {
        type: String
    }
},
    {
        timestamps: true

    });

const addEventsModel = mongoose.model('events', eventsSchema)

export default addEventsModel