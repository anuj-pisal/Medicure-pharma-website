const SinglePackage = require('../model/SingleProduct');
const mongoose = require('mongoose');

exports.getTestPackageById = async (req, res) => {
    try {
        const srno = Number(req.params.srno,10);
        const healthPackage = await SinglePackage.findOne({ srno: srno });
        if (!healthPackage) {
            return res.status(404).json({ message: 'Health package not found' });
        }
        
        res.status(200).json(healthPackage);
    } catch (error) {
        console.error(error);  // Log the error for debugging purposes
        res.status(500).json({ message: error.message });
    }
};
