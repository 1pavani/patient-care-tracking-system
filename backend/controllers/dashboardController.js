const Patient = require("../models/Patient");
const Appointment = require("../models/Appointment");
const Treatment = require("../models/Treatment");
const FollowUp = require("../models/FollowUp");

const getDashboardStats = async (req, res) => {

    try {

        // Total Patients
        const totalPatients = await Patient.countDocuments();

        // Active Patients
        const activePatients =
            await Treatment.countDocuments({
                status: "Ongoing"
            });

        // Today's Appointments

        const today = new Date();

        const startOfDay = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
        );

        const endOfDay = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + 1
        );

        const todayAppointments =
            await Appointment.countDocuments({
                appointmentDate: {
                    $gte: startOfDay,
                    $lt: endOfDay
                }
            });

        // Upcoming Follow Ups

        const upcomingFollowUps =
            await FollowUp.countDocuments({
                followUpDate: {
                    $gte: new Date()
                },
                status: "Pending"
            });

        // Recent Activities

        const recentPatients =
            await Patient.find()
                .sort({ createdAt: -1 })
                .limit(5);

        const recentAppointments =
            await Appointment.find()
                .populate("patient")
                .sort({ createdAt: -1 })
                .limit(5);

        const recentTreatments =
            await Treatment.find()
                .populate("patient")
                .sort({ createdAt: -1 })
                .limit(5);

        const recentFollowUps =
            await FollowUp.find()
                .populate("patient")
                .sort({ createdAt: -1 })
                .limit(5);

        res.status(200).json({

            totalPatients,

            activePatients,

            todayAppointments,

            upcomingFollowUps,

            recentActivities: {

                recentPatients,

                recentAppointments,

                recentTreatments,

                recentFollowUps

            }

        });

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    getDashboardStats
};