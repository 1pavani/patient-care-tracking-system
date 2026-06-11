const mongoose = require("mongoose");

const treatmentSchema = new mongoose.Schema(
{
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    },

    appointment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Appointment",
        required:true
    },

    diagnosis:{
        type:String,
        required:true
    },

    treatmentPlan:{
        type:String,
        required:true
    },

    medications:{
        type:String
    },

    doctorNotes:{
        type:String
    },

    status:{
        type:String,
        enum:[
            "Ongoing",
            "Completed"
        ],
        default:"Ongoing"
    }
},
{
    timestamps:true
}
);

module.exports =
mongoose.model(
    "Treatment",
    treatmentSchema
);