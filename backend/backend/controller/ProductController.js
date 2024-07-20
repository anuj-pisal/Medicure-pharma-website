var doctorModel = require('../model/doctormodel')

exports.createProduct = async(req,res)=>{

let {docName,post,  speciality,experience, location,rating}=req.body
let {filename}=req.file

let data = new doctorModel({
    docName,
    post,
    speciality,
    experience,
    location,
    rating,
    photo:filename

})

await data.save()
res.status(201).json(data)
}

exports.getDoctor=async(req,res)=>{

    let result = await doctorModel.find()
    res.status(200).json(result)

}

exports.getDoctorByCategory = async (req, res) => {
    const { category } = req.params;
    try {
      const doctors = await doctorModel.find({ speciality: category });
      res.status(200).json(doctors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  