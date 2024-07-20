const usermodel = require("../model/usermodel")
const {hashedPass,  comparePass} = require("../authHelper/Helper")
const jwt = require("jsonwebtoken");
const JWT_secret = "d575a7fc45bb2526842a3d0813f975ac7598128a589d91f684ad286bc015873c"
const nodemailer = require('nodemailer');

exports.userRegister = async(req,res)=>{
    let {name,email,contact,password,country,bio,birthdate}=req.body;
 
    if(!name|| !email|| !contact||!password){
     res.status(401).json({error:"all inputs are required"})
    }
 
    try{
 
         let preuser = await usermodel.findOne({email:email})
 
         if(preuser){
             res.status(401).json({error:'User already exited'})
         }
         else{
         const hashval = await hashedPass(password)
             let userData = new usermodel({name,
                 email,
                 contact,
                 password:hashval,
                 country,
                 bio,
                 birthdate
             });
 
             await userData.save()
             res.status(200).json(userData)
         }
 
    }catch(error){
     res.status(401).json({error :'error while user registration'})
    }
 }

 exports.userLogin = async (req, res) => {
     const { email, password } = req.body;
 
     if (!email || !password) {
         return res.status(400).json({ error: "Email and password are required" });
     }
 
     try {
         const user = await usermodel.findOne({ email });
 
         if (!user) {
             return res.status(404).json({ error: "User not found" });
         }
 
         const passwordMatch = await comparePass(password, user.password);
 
         if (!passwordMatch) {
             return res.status(401).json("Invalid credentials");
         }
 
         // Generate token (using jwt for example)
         const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
 
         res.status(200).json({ 
             message: "Login successful",
             token,
             user: {
                 id: user._id,
                 name: user.name,
                 email: user.email,
                 contact: user.contact,
                 country: user.country,
                 bio: user.bio,
                 birthdate: user.birthdate
             }
         });
     } catch (error) {
         console.error(error);
         res.status(500).json({ error: "Error while logging in" });
     }
 };
 
exports.getUser = async(req,res)=>{
    try{

    
    let data = await usermodel.find()
    res.status(200).json(data)
    }
    catch(err){
        res.status(401).json(err,'while getting userlist')
    }
}

exports.singleuser = async (req, res) => {
    let { id } = req.params
    let result = await usermodel.findById({ _id: id })
    res.status(200).json(result)
}



exports.forgotpass = async (req, res) => {
    const { email } = req.body;
    try {
        const oldUser = await usermodel.findOne({ email });
        if (!oldUser) {
            return res.status(404).json({ error: "User not found" });
        }
        const secret = JWT_secret + oldUser.password;
        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "15m" });
        const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'anujpisal69@gmail.com',
              pass: 'icgl mqye qljk qvdp'
            }
          });
          
          var mailOptions = {
            from: 'youremail@gmail.com',
            to: 'myfriend@yahoo.com',
            subject: 'Password Reset',
            text: link
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        res.status(200).json({ status: "Email sent successfully" }); // Respond with a success status
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" }); // Handle other errors
    }
};

exports.resetpass = async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params);
    const oldUser = await usermodel.findOne({ _id: id });
    if (!oldUser) {
        return res.status(404).json({ error: "User not found" });
    }
    const secret = JWT_secret + oldUser.password;
    try {
        const verify = jwt.verify(token, secret);
        res.render("index", { email: verify.email,status:"Not verified" });
    } catch (error) {
        console.log(error);
       
    }
}

exports.demopass = async (req, res) => {
    const { id, token } = req.params;
    const{password} = req.body;
    const oldUser = await usermodel.findOne({ _id: id });
    if (!oldUser) {
        return res.status(404).json({ error: "User not found" });
    }
    const secret = JWT_secret + oldUser.password;
    try {
        const verify = jwt.verify(token, secret);
        const encrypt = await hashedPass(password)
        await usermodel.updateOne({
            _id:id,
        },
        {
            $set:{
                password:encrypt,
            },
        }
    );
    
    res.render("index", { email: verify.email,status:"verified" });
    
    } catch (error) {
        res.status(500).json({error:"Something went wrong"});
    }

}