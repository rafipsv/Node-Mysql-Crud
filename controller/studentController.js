const StudentModel = require("../models/studentModel");
exports.getStudents = (req, res, next) => {
  StudentModel.getAllStudent((students) => {
    let data = {
      status: "Success",
      messege: "Student list given below",
      data: students,
    };
    res.json(data);
  });
};
exports.getOneStudent = (req, res, next) => {
  StudentModel.getOneStudent(req.query.id, (students) => {
    let data = {
      status: "Success",
      messege:
        students.length > 0 ? "Student list given below" : "No student found",
      data: students,
    };
    res.json(data);
  });
};
exports.addStudent = (req, res, next) => {
  let student = new StudentModel(
    req.body.name,
    req.body.email,
    req.body.mobile
  );
  student.save((student, id) => {
    let data = {
      status: "Student added successfully",
      messege: "Added students given below",
      studentID: id,
      data: student,
    };
    res.json(data);
  });
};

exports.deleteStudent = (req, res, next) => {
  StudentModel.deleteStudent(req.query.id, () => {
    let data = {
      status: "Successfull",
      messege: "Student deleted successfully",
      studentID: req.query.id,
    };
    res.json(data);
  });
};
exports.updateStudent = (req, res, next) => {
  let student = new StudentModel(
    req.body.name,
    req.body.email,
    req.body.mobile
  );
  student.updateStudent(req.query.id, (student, id) => {
    let data = {
      status: "Student updated successfully",
      messege: "Updated student given below",
      studentID: req.query.id,
      data: student,
    };
    res.json(data);
  });
};
