const express = require("express");
const morgan = require("morgan");

const flightRouts = require("./src/routes/flightRouts");
const userRouter = require("./src/routes/usersRouts");
const reserveRouter = require("./src/routes/reservationsRouts");  //
const WishListRouter = require("./src/routes/WishListRouts");  //
const cors = require("cors");
const User = require("./src/models/User");   //
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Flight = require("./src/models/Flight");  //

const app = express();
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
const bp= require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded())
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/flights", flightRouts);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reserve", reserveRouter); //
app.use("/api/v1/WishList", WishListRouter); //
app.post("/register",async (req,res) =>{
    const user =req.body;
    const takenUserName = await User.findOne({Name: user.Name})
    const takenEmail = await User.findOne({Email: user.Email})
    if(takenUserName || takenEmail ){
        res.json({message:"Username or email has already been taken"})

    }
   else{
       user.Password = await bcrypt.hash(req.body.Password,10)
       const dbUser = new User({
           Name: user.Name.toLowerCase(),
           Password: user.Password,
           Email: user.Email.toLowerCase()
           
       })
       dbUser.save()
       console.log(dbUser);
       res.json({message:"Success"})
   }

})
app.post("/login",async (req,res) =>{
    const userlogin =req.body;
     User.findOne({Name: userlogin.Name}).
     then(dbUser => {
        console.log(dbUser);
        if(!dbUser){
             return res.json({
                 message:"Invalid username or password"
             })
         }
         bcrypt.compare(userlogin.Password,dbUser.Password).
         then(isCorrect => {
             if (isCorrect){
                 const payload = {
                     id: dbUser._id,
                     Name: dbUser.Name
                 }
            jwt.sign(
                payload,
                'secret123',
                {expiresIn:86400},
                (err,token) =>{
                    if(err) return res.json({message:"error"})
                    return res.json({message: "Success",
                token: "Bearer" + token})

                }
            )
             }
             else{
                 return res.json({ message:"Invalid  password"})
             }
         })
     })
   
   

    


})
function verifyJWT(req,res,next){
    const token = req.headers["x-access-token"]?.split(' ')[1]
    if(token){
        jwt.verify(token,process.env.PASSPORTSECRET,(err,decoded) =>{
            if(err) return res.json({
                isLoggedIn: false,
                message: "Failed To Auth"
            })
            req.user={};
            req.user.id = decoded.id
            req.user.Name=decoded.Name
            next()
        })
    }else{
        res.json({message:"Incorrect token",isLoggedIn:false})
    }
}
app.get("/getUsername",verifyJWT,(req,res) =>{
    res,json({isLoggedIn: true, Name:req.user.Name})
})
//app.post('/add-user', userController.createUser)

module.exports = app;
