import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';


export async function POST(request: Request){

  const user = await request.json()
  let email = user.email
  console.log(email)

  // save to dynamodb

  const client = new DynamoDBClient({
    region: process.env.REGION,
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID!,
       secretAccessKey: process.env.SECRET_ACCESS_KEY!,
    },
  });

  const ddbDocClient = DynamoDBDocumentClient.from(client);

    try {
      await ddbDocClient.send(new PutCommand({
        TableName: 'users',
        Item: user,
      }));

      return new Response(JSON.stringify(user), {
        headers: {
          "Content-Type": "application/json"
        },
        status: 201,
      })
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