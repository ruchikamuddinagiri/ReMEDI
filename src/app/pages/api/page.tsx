import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

export async function GET(request: Request) {
  const requestData = await request.json();
  const id = requestData.id; // Assuming the ID is passed in the request body

  const client = new DynamoDBClient({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  const ddbDocClient = DynamoDBDocumentClient.from(client);

  try {
    const { Item } = await ddbDocClient.send(new GetCommand({
      TableName: 'level',
      Key: {
        id: { S: id } // Assuming the ID is a string
      }
    }));

    if (Item) {
      return new Response(JSON.stringify(Item), {
        headers: {
          "Content-Type": "application/json"
        },
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ error: 'Item not found' }), {
        headers: {
          "Content-Type": "application/json"
        },
        status: 404,
      });
    }
  } catch (error) {
    console.error('DynamoDB Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch item from DynamoDB' }), {
      headers: {
        "Content-Type": "application/json"
      },
      status: 500,
    });
  }
}
