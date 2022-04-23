const Joi = require("joi");
const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

const validateCourse = (course) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
  });
  return schema.validate(course);
};

app.get("/", (request, response) => {
  response.send("Hello World!!");
});

app.get("/api/courses", (request, response) => {
  response.send(courses);
});

app.post("/api/courses", (request, response) => {
  const { error } = validateCourse(request.body);
  if (error) {
    // 400 Bad Request
    response.status(400).send(error.details[0].message);
    return;
  }
  const course = {
    id: courses.length + 1,
    name: request.body.name,
  };

  courses.push(course);
  response.send(course);
});

app.get("/api/courses/:id", (request, response) => {
  const course = courses.find(
    (course) => course.id === parseInt(request.params.id)
  );
  if (!course) {
    return response
      .status(404)
      .send("The course with the given ID was not found!");
  }
  response.send(course);
});

app.put("/api/courses/:id", (request, response) => {
  const course = courses.find(
    (course) => course.id === parseInt(request.params.id)
  );
  // Validate course existance
  if (!course) {
    return response
      .status(404)
      .send("The course with the given ID was not found!");
  }
  // Validate body
  const { error } = validateCourse(request.body);
  if (error) {
    // 400 Bad Request
    response.status(400).send(error.details[0].message);
    return;
  }
  // Update course name
  course.name = request.body.name;
  response.send(course);
});

app.delete("/api/courses/:id", (request, response) => {
  const course = courses.find(
    (course) => course.id === parseInt(request.params.id)
  );
  if (!course) {
    return response
      .status(404)
      .send("The course with the given ID was not found!");
  }
  const index = courses.indexOf(course);

  courses.splice(index, 1);
  response.send(courses);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
