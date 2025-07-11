import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileTypes(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!');
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileTypes(file, cb);
  },
});

router.post('/', upload.single('image'), (req, res) => {
  res.json({
    message: 'Image uploaded',
    image: `/${req.file.path}`,
  });
});

export default router;

// import express from 'express';
// import multer from 'multer';
// import path from 'path';

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename(req, file, cb) {
//     cb(
//       null,
//       `${file.fieldname}-${Date.now()}${path.extname(file, originalname)}`
//     );
//   },
// });

// function checkFileTypes(file, cb) {
//   const filetypes = /jpg|jpeg|png|pdf|docx/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase);
//   const mimetype = filetypes.test(file.mimetype);

//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     cb('Images only');
//   }
// }

// const upload = multer({
//   storage,
//   fileFilter: function (req, file, cb) {
//     checkFileTypes(file, cb);
//   },
// });

// //controller
// router.post('/', upload.single('image'), (req, res) => {
//   res.json({
//     message: 'Image uploaded',
//     image: `/${req.file.path}`,
//   });
// });

// export default router;
