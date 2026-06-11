const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
{
    patientId:{
        type:String,
        required:true,
        unique:true
    },

    fullName:{
        type:String,
        required:true
    },

    age:Number,

    gender:String,

    mobile:String,

    email:String,

    address:String,

    bloodGroup:String,

    emergencyContact:String
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Patient",patientSchema);