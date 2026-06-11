const express =
require("express");

const router =
express.Router();

const protect =
require("../middleware/authMiddleware");

const authorizeRoles =
require("../middleware/roleMiddleware");

const {

createFollowUp,
getFollowUps,
getFollowUpById,
updateFollowUp,
completeFollowUp,
deleteFollowUp

}
=
require(
"../controllers/followUpController"
);

// CREATE

router.post(
"/",
protect,
authorizeRoles(
"admin",
"doctor"
),
createFollowUp
);

// GET ALL

router.get(
"/",
protect,
authorizeRoles(
"admin",
"doctor",
"receptionist"
),
getFollowUps
);

// GET ONE

router.get(
"/:id",
protect,
authorizeRoles(
"admin",
"doctor",
"receptionist"
),
getFollowUpById
);

// UPDATE

router.put(
"/:id",
protect,
authorizeRoles(
"admin",
"doctor"
),
updateFollowUp
);

// COMPLETE

router.put(
"/complete/:id",
protect,
authorizeRoles(
"admin",
"doctor"
),
completeFollowUp
);

// DELETE

router.delete(
"/:id",
protect,
authorizeRoles(
"admin"
),
deleteFollowUp
);

module.exports =
router;