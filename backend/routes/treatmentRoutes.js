const express = require("express");

const router = express.Router();

const protect =
require("../middleware/authMiddleware");

const authorizeRoles =
require("../middleware/roleMiddleware");

const {

    createTreatment,
    getTreatments,
    getTreatmentById,
    updateTreatment,
    completeTreatment,
    deleteTreatment

} = require(
    "../controllers/treatmentController"
);

router.post(
    "/",
    protect,
    authorizeRoles(
        "admin",
        "doctor"
    ),
    createTreatment
);

router.get(
    "/",
    protect,
    authorizeRoles(
        "admin",
        "doctor",
        "receptionist"
    ),
    getTreatments
);

router.get(
    "/:id",
    protect,
    authorizeRoles(
        "admin",
        "doctor",
        "receptionist"
    ),
    getTreatmentById
);

router.put(
    "/:id",
    protect,
    authorizeRoles(
        "admin",
        "doctor"
    ),
    updateTreatment
);

router.put(
    "/complete/:id",
    protect,
    authorizeRoles(
        "admin",
        "doctor"
    ),
    completeTreatment
);

router.delete(
    "/:id",
    protect,
    authorizeRoles(
        "admin"
    ),
    deleteTreatment
);

module.exports = router;