const mongoose = require("mongoose");

const followUpSchema =
new mongoose.Schema(
{
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    },

    appointment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Appointment"
    },

    doctor:{
        type:String,
        required:true
    },

    followUpDate:{
        type:Date,
        required:true
    },

    remarks:{
        type:String
    },

    status:{
        type:String,
        enum:[
            "Pending",
            "Completed",
            "Missed"
        ],
        default:"Pending"
    }
},
{
    timestamps:true
}
);

const FollowUp =
mongoose.model(
    "FollowUp",
    followUpSchema
);

module.exports = FollowUp;