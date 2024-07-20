const bcrypt = require('bcrypt')

exports.hashedPass = async(pass)=>{
    try{
        const hashedPass = await bcrypt.hash(pass,10)
        return hashedPass;
    }
    catch(err){
        console.log(err)
    }
    
}

exports.comparePass = async(pass,hashedPass)=>{
    return bcrypt.compare(pass,hashedPass)
}