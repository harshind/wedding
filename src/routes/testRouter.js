app.get("/teachers/:id/add-student", async (req, res) => {
  const id = req.params.id;
  const requiredTeacher = await getTeacherById(parseInt(id, 10));
  if (requiredTeacher) {
    res.status(200).render("unenrolledStudent.hbs", {
      layout: "navigation",
      teacher: requiredTeacher,
      action: "/api/teachers/" + requiredTeacher.id,
      data: await getUnenrolledStudents(parseInt(id, 10)),
      method: "POST",
    });
  } else {
    res.status(404).send("Teacher not found");
  }
});
app.get("/teachers/:id/student/:studentid", async (req, res) => {
  const id = req.params.id;
  const sid = req.params.studentid;
  //const requiredTeacher = await getTeacherById(parseInt(id, 10));
  try {
    const result = await Registeration.create({
      studentId: parseInt(sid, 10),
      teacherId: parseInt(id, 10),
    });
    res.status(200).send("Enrolled Sucessfully");
  } catch (e) {
    res.status(404).send("Teacher not found");
  }
});
app.get("/edit-student/:id", (req, res) => {
  const { id } = req.params;
  const requiredStudent = getStudentById(parseInt(id, 10));
  if (requiredStudent) {
    res.status(200).render("addStudents.hbs", {
      layout: "navigation",
      title: "Edit Student",
      student: requiredStudent,
      action: "/api/teachers/students/" + requiredStudent.id,
      method: "PUT",
    });
  } else {
    res.status(404).send("Student not found");
  }
});

app.get("/add-teacher", (req, res) => {
  res.status(200).render("addTeachers", {
    layout: "navigation",
    title: "Add Teacher",
    action: "/api/teachers/",
    method: "POST",
  });
});

app.get("/edit-teacher/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const requiredTeacher = await getTeacherById(parseInt(id));
    res.status(200).render("addTeachers.hbs", {
      layout: "navigation",
      title: "Edit Teacher",
      teacher: requiredTeacher,
      action: "/api/teachers/" + requiredTeacher.id,
      method: "PUT",
    });
  } catch (e) {
    res.status(404).send("Student not found");
  }
});
