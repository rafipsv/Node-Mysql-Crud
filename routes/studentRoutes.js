const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.get("/get-student", studentController.getStudents);
router.get("/get-one-student", studentController.getOneStudent);
router.post("/add-student", studentController.addStudent);
router.delete("/delete-student", studentController.deleteStudent);
router.put("/update-student", studentController.updateStudent);

module.exports = router;
