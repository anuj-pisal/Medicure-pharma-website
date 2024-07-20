const HealthPackage = require('../model/NewLabTestModel');


// Create a new health package
exports.createHealthPackage = async (req, res) => {
  try {
    const newHealthPackage = new HealthPackage(req.body);
    const savedHealthPackage = await newHealthPackage.save();
    res.status(201).json(savedHealthPackage);
  } catch (error) {
    res.status(400).json({   message: error.message });
  }
};

// Get all health packages
exports.getAllHealthPackages = async (req, res) => {
  try {
    const healthPackages = await HealthPackage.find();
    res.status(200).json(healthPackages);
  } catch (error) { 
    res.status(500).json({ message: error.message });
  }
};

//Get a health package by ID 
exports.getHealthPackageById = async (req, res) => {
  try {
    const data = req.body;
    const healthPackage = await SinglePackage.findById(req.params.id);  
    // const healthPackage = await HealthPackage.findById(req.params.id);
    if (!healthPackage) {
      return res.status(404).json({ message: 'Health package not found' });
    }
    res.status(200).json(healthPackage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// exports.getHealthPackageById = async (req, res) => {
//   try {
//     const { id } = req.params;
    
//     // Validate the ID
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: 'Invalid health package ID' });
//     }

//     const healthPackage = await HealthPackage.findById(id);
//     if (!healthPackage) {
//       return res.status(404).json({ message: 'Health package not found' });
//     }
    
//     res.status(200).json(healthPackage);
//   } catch (error) {
//     console.error("Error fetching health package:", error);
//     res.status(500).json({ message: "Failed to fetch health package. Please try again later." });
//   }
// };

// Update a health package
exports.updateHealthPackage = async (req, res) => {
  try {
    const updatedHealthPackage = await HealthPackage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedHealthPackage) {
      return res.status(404).json({ message: 'Health package not found' });
    }
    res.status(200).json(updatedHealthPackage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a health package
exports.deleteHealthPackage = async (req, res) => {
  try {
    const deletedHealthPackage = await HealthPackage.findByIdAndDelete(req.params.id);
    if (!deletedHealthPackage) {
      return res.status(404).json({ message: 'Health package not found' });
    }
    res.status(200).json({ message: 'Health package deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
