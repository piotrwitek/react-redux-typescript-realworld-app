import { ALBHandler } from 'aws-lambda';
import querystring from 'querystring';

export const handler: ALBHandler = async (event, context) => {
  switch (event.httpMethod) {
    case 'GET': {
      return {
        statusCode: 200,
        body: `Hello, World!`,
      };
    }

    case 'POST': {
      const params = querystring.parse(event.body!);
      const name = params.name || 'World!';

      return {
        statusCode: 200,
        body: `Hello, ${name}`,
      };
    }

    default:
      return { statusCode: 405, body: 'Method Not Allowed' };
  }
};
