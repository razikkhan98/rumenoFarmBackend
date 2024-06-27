
// import multer from "multer";

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         console.log('req: ', req.body);
//       cb(null, 'uploads/');
//     },
//     filename: function(req, file, cb) {
//       cb(null, `${Date.now()}-${file.originalname}`);
//     }
//   });
//   export const upload = multer({ storage });

import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
export const fileParser = (req, res, next) => {
  upload.any()(req, res, (err) => {
    if (err) res.json({ success: false, message: err.message });
    next();
  });
};