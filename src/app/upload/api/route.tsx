

import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next'

const multer  = require('multer')

export async function POST(req: Request){



    try {
		const storage = multer.diskStorage({
		destination: function (req, file, cb) {
		cb(null, 'my-uploads')
		},
		filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
		cb(null, file.fieldname + '-' + uniqueSuffix)
		}
	})
	const upload = multer({ storage: storage })
    } catch (error) {
      console.error('DynamoDB Error:', error);
      return new Response(JSON.stringify({ error: 'Failed to store item in DynamoDB', item: user }), {
        headers: {
          "Content-Type": "application/json"
        },
        status: 500,
      })
    }
  

}