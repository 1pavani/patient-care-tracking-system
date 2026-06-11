const express =
require("express");

const router =
express.Router();

const protect =
require("../middleware/authMiddleware");

const authorizeRoles =
require("../middleware/roleMiddleware");

const {

    createDoctor,
    getDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor

} =
require(
"../controllers/doctorController"
);

// CREATE DOCTOR

router.post(
    "/",
    protect,
    authorizeRoles(
        "admin"
    ),
    createDoctor
);

// GET ALL DOCTORS

router.get(
    "/",
    protect,
    authorizeRoles(
        "admin",
        "doctor",
        "receptionist"
    ),
    getDoctors
);

// GET ONE DOCTOR

router.get(
    "/:id",
    protect,
    authorizeRoles(
        "admin",
        "doctor",
        "receptionist"
    ),
    getDoctorById
);

// UPDATE DOCTOR

router.put(
    "/:id",
    protect,
    authorizeRoles(
        "admin"
    ),
    updateDoctor
);

// DELETE DOCTOR

router.delete(
    "/:id",
    protect,
    authorizeRoles(
        "admin"
    ),
    deleteDoctor
);

module.exports =
router;