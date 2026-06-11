const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const authorizeRoles = require("../middleware/roleMiddleware");

const {
    createPatient,
    getPatients,
    getPatientById,
    updatePatient,
    deletePatient
} = require("../controllers/patientController");

router.post(
    "/",
    protect,
    authorizeRoles("admin", "receptionist"),
    createPatient
);

router.get(
    "/",
    protect,
    authorizeRoles("admin", "doctor", "receptionist"),
    getPatients
);

router.get(
    "/:id",
    protect,
    authorizeRoles("admin", "doctor", "receptionist"),
    getPatientById
);

router.put(
    "/:id",
    protect,
    authorizeRoles("admin", "receptionist"),
    updatePatient
);

router.delete(
    "/:id",
    protect,
    authorizeRoles("admin"),
    deletePatient
);

module.exports = router;