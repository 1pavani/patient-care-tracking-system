const Treatment =
require("../models/Treatment");

// CREATE TREATMENT

const createTreatment =
async(req,res)=>{

    try{

        const treatment =
        await Treatment.create(
            req.body
        );

        res.status(201).json(
            treatment
        );

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
// GET TREATMENT BY ID

const getTreatmentById = async (req,res) => {

    try{

        const treatment =
        await Treatment.findById(
            req.params.id
        )
        .populate("patient")
        .populate("appointment");

        if(!treatment){

            return res.status(404).json({
                message:"Treatment not found"
            });

        }

        res.status(200).json(treatment);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// UPDATE TREATMENT

const updateTreatment = async (req,res) => {

    try{

        const treatment =
        await Treatment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new:true }
        );

        if(!treatment){

            return res.status(404).json({
                message:"Treatment not found"
            });

        }

        res.status(200).json(treatment);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// COMPLETE TREATMENT

const completeTreatment = async (req,res) => {

    try{

        const treatment =
        await Treatment.findByIdAndUpdate(
            req.params.id,
            {
                status:"Completed"
            },
            {
                new:true
            }
        );

        res.status(200).json(treatment);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// DELETE TREATMENT

const deleteTreatment = async (req,res) => {

    try{

        const treatment =
        await Treatment.findByIdAndDelete(
            req.params.id
        );

        if(!treatment){

            return res.status(404).json({
                message:"Treatment not found"
            });

        }

        res.status(200).json({
            message:"Treatment deleted"
        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
// GET ALL TREATMENTS

const getTreatments =
async(req,res)=>{

    try{

        const treatments =
        await Treatment.find()
        .populate("patient")
        .populate("appointment");

        res.status(200).json(
            treatments
        );

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};
module.exports = {
    createTreatment,
    getTreatments,
    getTreatmentById,
    updateTreatment,
    completeTreatment,
    deleteTreatment
};