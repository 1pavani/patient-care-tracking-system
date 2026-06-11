const FollowUp =
require("../models/FollowUp");

// CREATE
const createFollowUp = async (req, res) => {

    try {

        console.log("REQUEST BODY:");
        console.log(req.body);

        const followUp =
        await FollowUp.create(req.body);

        res.status(201).json(followUp);

    }
    catch(error){

        console.log("FOLLOWUP ERROR:");
        console.log(error);

        res.status(500).json({
            message:error.message
        });

    }

};
// GET ALL

const getFollowUps =
async(req,res)=>{

    try{

        const followUps =
        await FollowUp.find()
        .populate("patient")
        .populate("appointment");

        res.status(200).json(
            followUps
        );

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// GET ONE

const getFollowUpById =
async(req,res)=>{

    try{

        const followUp =
        await FollowUp.findById(
            req.params.id
        )
        .populate("patient")
        .populate("appointment");

        if(!followUp){

            return res.status(404).json({
                message:"Follow Up not found"
            });

        }

        res.status(200).json(
            followUp
        );

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// UPDATE

const updateFollowUp =
async(req,res)=>{

    try{

        const followUp =
        await FollowUp.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        );

        if(!followUp){

            return res.status(404).json({
                message:"Follow Up not found"
            });

        }

        res.status(200).json(
            followUp
        );

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// COMPLETE

const completeFollowUp =
async(req,res)=>{

    try{

        const followUp =
        await FollowUp.findByIdAndUpdate(
            req.params.id,
            {
                status:"Completed"
            },
            {
                new:true
            }
        );

        if(!followUp){

            return res.status(404).json({
                message:"Follow Up not found"
            });

        }

        res.status(200).json(
            followUp
        );

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// DELETE

const deleteFollowUp =
async(req,res)=>{

    try{

        const followUp =
        await FollowUp.findByIdAndDelete(
            req.params.id
        );

        if(!followUp){

            return res.status(404).json({
                message:"Follow Up not found"
            });

        }

        res.status(200).json({
            message:
            "Follow Up deleted successfully"
        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

module.exports = {

    createFollowUp,
    getFollowUps,
    getFollowUpById,
    updateFollowUp,
    completeFollowUp,
    deleteFollowUp

};