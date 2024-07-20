const profilemodel = require('../model/profilemodel');
const usermodel = require('../model/usermodel');

exports.createProfile = async (req, res) => {
    let {filename}=req.file
    let {ImgId} = req.body

    let data = new profilemodel({
        
        photo:filename,
        ImgId
    
    })
    
    await data.save()
    res.status(201).json(data)
};

exports.getProfile=async(req,res)=>{
    let {id} = req.params
    let result = await profilemodel.find({ImgId : id})
    res.status(200).json(result)
}