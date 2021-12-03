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
console.log("here");
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
    const user = await User.findOneAndUpdate({Email:req.body.Email},{
      FirstName: response.data.FirstName,
      LastName: response.data.LastName,
      Email: response.data.Email,
      Age: response.data.Age,
      BornIn: response.data.BornIn,
      LivesIn: response.data.LivesIn,
      MartialStatus: response.data.MartialStatus,
      PhoneNumber: response.data.PhoneNumber,
      Job: response.data.Job,
      PassportNumber: response.data.PassportNumber
    
    
    },{new:true})

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

