const express = require("express");

const router = new express.Router();
const Prodcontrollers = require('../controller/ProdController')

const controllers = require('../controller/userController')
const ProductControllers = require('../controller/ProductController')
const consultationController = require('../controller/ConsultController')
const ProfileController = require('../controller/ProfileController')
const uploads = require("../authHelper/multerconfig")
const healthPackageController = require('../controller/PController');
const TestController = require('../controller/SingleController')
const orderController = require('../controller/orderController')

router.get("/getproduct/:id", Prodcontrollers.singleprod);

//registration
router.post("/user/register",controllers.userRegister)
 router.post("/user/login", controllers.userLogin)

router.get("/userlist",controllers.getUser)

router.get("/user/_id", controllers.singleuser)

//product

router.post("/createdoctor",uploads,ProductControllers.createProduct)
 router.get("/getdoctor",ProductControllers.getDoctor)

 router.get("/getdoctor/:category", ProductControllers.getDoctorByCategory);

 //Consultation
 router.post("/consultations", consultationController.createConsultation);
 //Profile photo
 router.post("/createprofile",uploads,ProfileController.createProfile)
 router.get("/getprofile/:id",ProfileController.getProfile)

// Define routes
router.post('/createpackage', healthPackageController.createHealthPackage);
router.get('/labtest', healthPackageController.getAllHealthPackages);
router.get('/labtest/:srno',TestController.getTestPackageById);
router.put('/:id', healthPackageController.updateHealthPackage);
router.delete('/:id', healthPackageController.deleteHealthPackage);

//order
router.post('/order/register', orderController.orderRegister);
router.get('/order/getorder/:email', orderController.getOrderData);

//forgot password

router.post("/forgot-password",controllers.forgotpass)
 router.get("/reset-password/:id/:token",controllers.resetpass)
 router.post("/reset-password/:id/:token",controllers.demopass)

module.exports = router;
