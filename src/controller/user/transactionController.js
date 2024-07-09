// import path from "path";
// import multer from "multer";
// import Transaction from "../../model/user/transactionModel.js";

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null,"./uploads");
// //   },
// //   filename: function (req, file, cb) {
// //     return cb(null,`${Date.now()}-${file.originalname}`)
// //   },
// // });

// // const upload = multer({storage});
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });


// const uploadImage = async (req, res, next) => {
//   try {
//     const newImage = new Transaction();
//     newImage.image.data = req.file.buffer;
//     newImage.image.contentType = req.file.mimetype;
//    await newImage.save();
//    res.json({msg:"success",msg:newImage})
    
//   } catch (error) {
//     console.log('error: ', error);
//   }
//   // try {
//   //   await Transaction.create({...req.body,...{ image: req.file.filename }});
//   // } catch (error) {
//   //   console.log("error: ", error);
//   // }
// };

// const getImage = async (req,res)=>{
//   try {
//    const img = await Transaction.find({});
//    console.log('img: ', img);
//    res.contentType(img[0].image.contentType);
//     res.send(img[0].image.data);
//    console.log('img: ', img);
//   } catch (error) {
//     console.log('error: ', error);
    
//   }
// }

// export { upload, uploadImage ,getImage};


import Transaction from "../../model/user/transactionModel.js"
import { deleteAfterTransaction } from "./addToCartController.js";

export const createTransaction = async (req, res) => {
  try {
    const user = await Transaction.create(req.body);
    res.status(201).send("Transaction submitted successfully");
    deleteAfterTransaction(req.body.uid)
  } catch (error) {
    res.status(400).send(error.message);
  }
};
