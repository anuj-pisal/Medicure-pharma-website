const consultModel = require("../model/consultmodel")

exports.createConsultation = async (req, res) => {

    const { name, email, phone, date, time, message } = req.body;
    if(!name|| !email|| !phone||!date||!time){
        res.status(401).json({error:"all inputs are required"})
       }
    
  
    try {

        
        let preconsult = await consultModel.findOne({email:email})
 
        if(preconsult){
            res.status(401).json({error:'Consultation form already exited'})
        }
            else{
      const newConsultation = new consultModel({
        name,
        email,
        phone,
        date,
        time,
        message,
      });
  
      await newConsultation.save();
      res.status(201).json(newConsultation);

    }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create consultation" });
    }
  };