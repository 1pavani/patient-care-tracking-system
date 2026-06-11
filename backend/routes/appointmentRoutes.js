const express = require("express");

const router = express.Router();

const protect =
require("../middleware/authMiddleware");

const authorizeRoles =
require("../middleware/roleMiddleware");

const {
    createAppointment,
    getAppointments,
     getAppointmentById,
    updateAppointment,
     cancelAppointment,
    completeAppointment
} = require(
    "../controllers/appointmentController"
);

router.post(
    "/",
    protect,
    authorizeRoles(
        "admin",
        "receptionist"
    ),
    createAppointment
);

router.get(
    "/",
    protect,
    authorizeRoles(
        "admin",
        "doctor",
        "receptionist"
    ),
    getAppointments
);
router.get(
    "/:id",
    protect,
    authorizeRoles(
        "admin",
        "doctor",
        "receptionist"
    ),
    getAppointmentById
);

router.put(
    "/:id",
    protect,
    authorizeRoles(
        "admin",
        "receptionist"
    ),
    updateAppointment
);

router.put(
    "/cancel/:id",
    protect,
    authorizeRoles(
        "admin",
        "receptionist"
    ),
    cancelAppointment
);

router.put(
    "/complete/:id",
    protect,
    authorizeRoles(
        "admin",
        "doctor"
    ),
    completeAppointment
);
module.exports = router;