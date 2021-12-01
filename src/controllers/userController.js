const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        User: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      massege: "Invalid data sent",
    });
  }
};


exports.viewUser = async(req,res) =>{
  try{
      const user = User.findOne({Email:req.body.email});
    if(user==null){
      res.status(404)
    }else{
    res.send(user)
    console.log(user)
    res.status(200)
    }
  }catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
  }
};


exports.editUser= async(req,res) =>{
  try{
    const user = await User.findOneAndUpdate({Email:req.body.Email},{Name:req.body.Name,Username:req.body.password, password:req.body.password,})

    res.send(user)
    console.log(user)
    res.status(200)
    }
  catch (err) {
    res.status(404).json({
      status: "fail",
      massege: err,
    });
  }



};

