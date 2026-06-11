const Appointment =
require("../models/Appointment");

// CREATE
const createAppointment = async (req,res) => {

    try{

        const appointment =
        await Appointment.create(req.body);

        res.status(201).json(appointment);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// GET ALL
const getAppointments = async (req,res) => {

    try{

        const appointments =
        await Appointment.find()
        .populate("patient");

        res.status(200).json(
            appointments
        );

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
const getAppointmentById = async (req,res) => {

    try{

        const appointment =
        await Appointment.findById(req.params.id)
        .populate("patient");

        if(!appointment){

            return res.status(404).json({
                message:"Appointment not found"
            });

        }

        res.status(200).json(appointment);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
const updateAppointment = async (req,res) => {

    try{

        const appointment =
        await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new:true }
        );

        if(!appointment){

            return res.status(404).json({
                message:"Appointment not found"
            });

        }

        res.status(200).json(appointment);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
const cancelAppointment = async (req,res) => {

    try{

        const appointment =
        await Appointment.findByIdAndUpdate(
            req.params.id,
            {
                status:"Cancelled"
            },
            {
                new:true
            }
        );

        res.status(200).json(appointment);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
const completeAppointment = async (req,res) => {

    try{

        const appointment =
        await Appointment.findByIdAndUpdate(
            req.params.id,
            {
                status:"Completed"
            },
            {
                new:true
            }
        );

        res.status(200).json(appointment);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
module.exports = {
    createAppointment,
    getAppointments,
    getAppointmentById,
    updateAppointment,
     cancelAppointment,
    completeAppointment
};