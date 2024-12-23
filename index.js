const express =require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./Router/UserRouter");
const UserModel = require("./Model/User");
const multerConfig = require('./multerconfig');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json()); 
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect("mongodb://localhost:27017/userlogin");

app.post("/login", (req, res) => {
  const {username, password} =req.body;
  UserModel.findOne({username: username})
  .then(user => {
    if(user) {
      if (user.password === password){
        res.json("Success")
      } else {
        res.json("the password is incorrect")
      }
    } else {
      res.json("No record exit")
    }
  })
})

app.post("/login", (req,res)=>{
    UserModel.create(req.body)
    .then(userlogin => res.json(userlogin))
    .catch(err => res.json(err))
})

app.post(
  "/api/newUser",
  multerConfig.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  (req, res) => {
    try {
      const { date, event, resourcePerson, yearClass, numStudent } = req.body;
      const image1 = req.files.image1 ? req.files.image1[0].filename : null;
      const image2 = req.files.image2 ? req.files.image2[0].filename : null;

      // Create a new user document
      const newUser = new UserModel({
        date: new Date(date),
        event,
        resourcePerson,
        yearClass,
        numStudent: Number(numStudent),
        image1,
        image2,
      });

      newUser.save()
        .then(savedUser => res.status(201).json(savedUser))
        .catch(err => res.status(400).json({ error: err.message }));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

app.use("/api",router);

app.listen(3001, () => {
  console.log("server is running");
});
