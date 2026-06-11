const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
{
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    },

    doctor:{
        type:String,
        required:true
    },

    appointmentDate:{
        type:Date,
        required:true
    },

    reason:{
        type:String
    },

    status:{
        type:String,
        enum:[
            "Scheduled",
            "Completed",
            "Cancelled",
            "Rescheduled"
        ],
        default:"Scheduled"
    }
},
{
    timestamps:true
}
);

module.exports =
mongoose.model(
    "Appointment",
    appointmentSchema
);