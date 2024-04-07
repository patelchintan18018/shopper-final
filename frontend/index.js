const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());


//Datbase Connection
mongoose.connect("mongodb+srv://backend:backend123@cluster0.e1t0luz.mongodb.net/ecommerce");



//User Schema
const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartdata: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//API Creation
app.use(express.static(path.join(__dirname, './frontend/build')));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});

//Creating End point for Registering User
app.post("/api/register", async (req, res) => {


  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.json({
        success: false,
        message: "Existing user found with same Email ID",
      });
  }
//   let cart = {};
//   for (let i = 0; i < 200; i++) {
//     cart[i] = 0;
//   }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    // cartdata: cart,
  });

  await user.save();

  const data = {
    user :{
        id : user.id
    }
  }
  const token = jwt.sign(data,'secret-ecom');
  res.json({
    success : true,
    token
  })
});

//Craeting End Point for Login
app.post('/api/login', async(req,res) => {
    let user = await Users.findOne({email : req.body.email});
    if(user){
        let passwordcheck = req.body.password === user.password;
        if(passwordcheck){
            const data = {
                user : {
                    id : user.id,
                }
            }
            const token = jwt.sign(data, 'secret-ecom');
            res.json({
                success : true,
                token
            });
        }else{
            res.json({
                success : false,
                message : "Wrong password"
            })
        }
    }else{
        res.json({
            success:false,
            message : "Wrong Email"
        })
    }
})




app.listen(PORT , (err) => {
  if (!err) {
    console.log(`Server running on ${PORT}....`);
  } else {
    console.log("Error : " + err);
  }
});
