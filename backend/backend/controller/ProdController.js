const prodModel = require('../model/ProductModel')

exports.singleprod = async (req, res) => {
    let { id } = req.params
    let result = await prodModel.findById({ _id : id })
    res.status(200).json(result)
}