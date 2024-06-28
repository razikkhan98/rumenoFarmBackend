import path from "path";
import multer from "multer";
import Transaction from "../../model/user/transactionModel.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,"./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null,`${Date.now()}-${file.originalname}`)
  },
});

const upload = multer({storage});

const uploadImage = async (req, res, next) => {
  console.log(req.file);
  res.send("uploaded");
  try {
    await Transaction.create({...req.body,...{ image: req.file.filename }});
  } catch (error) {
    console.log("error: ", error);
  }
};

const getImage = async (req,res)=>{
  try {
   const img = await Transaction.find({});
   res.json({msg:"success",img})
   console.log('img: ', img);
  } catch (error) {
    console.log('error: ', error);
    
  }
}

export { upload, uploadImage ,getImage};
