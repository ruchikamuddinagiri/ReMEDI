import AWS from 'aws-sdk';



export async function POST(request: Request){
    const { file, fileType, fileName }  = await request.json()

    const s3 = new AWS.S3({
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: process.env.REGION,
      });


    // Convert base64 string to a buffer
    const buffer = Buffer.from(file.replace(/^data:\w+\/\w+;base64,/, ''), 'base64');
    const params = {
        Bucket: process.env.BUCKET_NAME!,
        Key: fileName,
        Body: buffer,
        ContentType: fileType, // Adjust based on your file type
        ACL: 'public-read', // Adjust the ACL based on your requirements
      };

      try{
        const s3Response = await s3.upload(params).promise();

        return new Response(JSON.stringify({ message: 'File uploaded successfully' }), {
            status: 200,
          })
      } catch(error){
        console.error('Error uploading file:', error);
        return new Response(JSON.stringify({ error: 'Error uploading to S3' }), {
            status: 500,
          })
      }

      


    //   s3.upload(params, (error, data) => {
    //     if (error) {
            // return new Response(JSON.stringify({ error: 'Error uploading to S3' }), {
            //     status: 500,
            //   })
    //     }
        // return new Response(JSON.stringify({ message: 'File uploaded successfully', data }), {
        //     status: 200,
        //   })
    //   });


}