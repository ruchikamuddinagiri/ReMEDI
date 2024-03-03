
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next'

const multer  = require('multer')
const upload = multer({ dest: 'kisuke/' })




// API route handler
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
	 try {
    // 'image' should be the name of the field in your form
    upload.single('file')(req, res, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error uploading file' });
      }
      // Access uploaded file from req.file
      const image = req.file;
      if (!image) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
      // Do something with the image, such as saving it or processing it
      // Here, we are just sending back a success response
      return res.status(200).json({ message: 'File uploaded successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}