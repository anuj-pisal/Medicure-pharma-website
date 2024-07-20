const ordermodel = require("../model/ordermodel")
// const {hashedPass,  comparePass} = require("../authHelper/Helper")


exports.orderRegister = async(req,res)=>{
    let {name,email,address,city,state,zip,nameCard,cardNo,expM,expY,cvv,items,price,orderDate,arrivalDate}=req.body;
 
    if(!name|| !email|| !address || !city || !nameCard || !cardNo || !expM || !expY || !cvv){
     res.status(401).json({error:"all inputs are required"})
     return;
    }
 
    try{
             let orderData = new ordermodel({name,
                email,
                address,
                city,
                state,
                zip,
                nameCard,
                cardNo,
                expM,
                expY,
                cvv,
                items,
                price,
                orderDate,
                arrivalDate
             });
 
             await orderData.save()
             res.status(200).json(orderData)

    }catch(error){
     res.status(401).json({error :'error while user registration'})
    }
 }

 exports.getOrderData = async (req, res) => {
   try {
       let { email } = req.params;
       let result = await ordermodel.find({ email: email });
       if (!result) {
           return res.status(404).json({ error: 'Order not found' });
       }
       res.status(200).json(result);
   } catch (error) {
       res.status(500).json({ error: 'Server error' });
   }
};

