import { Handler } from '@netlify/functions'

function getArticle(descriptor: string) {
  if (['a', 'e', 'i', 'o', 'u'].includes(descriptor[0])) {
    return 'an';
  }
  return 'a';
}

function getCharacter(query: any) {
  const data = {
    name: query.name,
    article: getArticle(query.d),
    descriptor: query.d,
    type: query.t,
    focus: query.f
  }
  return data;
}

export const handler: Handler = async (event, context) => {
  const data = getCharacter(event.queryStringParameters);
  const { createCanvas } = require('canvas');
  const canvas = createCanvas(500, 300);
  const ctx = canvas.getContext('2d');

  const sentence = `${data.name} is ${data.article} ${data.descriptor} ${data.type} who ${data.focus}.`;

  ctx.fillText(sentence, 10, 20);


  const buffer = canvas.toBuffer('image/png');
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "image/png",
    },
    body: buffer.toString("base64"),
    isBase64Encoded: true,
  };
}
