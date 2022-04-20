const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Look! I can code node now.");
});

const users = [
  { id: 1, name: "Mr. X", email: "a@b.com", mobile: "01788213641" },
  { id: 2, name: "Mr. Y", email: "b@c.com", mobile: "01788213642" },
  { id: 3, name: "Mr. Z", email: "c@d.com", mobile: "01788213643" },
  { id: 4, name: "Mr. A", email: "d@e.com", mobile: "01788213644" },
  { id: 5, name: "Mr. B", email: "e@f.com", mobile: "01788213645" },
  { id: 6, name: "Mr. C", email: "f@g.com", mobile: "01788213646" },
];
app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/user", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
