import { Handler } from '@netlify/functions'

function getArticle(descriptor: string) {
  console.log(descriptor[0]);
  if (['a', 'e', 'i', 'o', 'u'].includes(descriptor[0])) {
    return 'an';
  }
  return 'a';
}

const WIDTH = 500;
const HEIGHT = 300;

export const handler: Handler = async (event, context) => {
  const { createCanvas, registerFont, loadImage } = require('canvas');
  const parts = event.path.split('/');
  const encodedData = parts[parts.length - 1];
  const data = JSON.parse(Buffer.from(decodeURIComponent(encodedData), 'base64').toString());
  const bg = await loadImage('./netlify/functions/character-sheet/scroll.png');

  registerFont('./netlify/functions/character-sheet/Satisfy-Regular.ttf', { family: 'Satisfy' });

  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  ctx.drawImage(bg, 0, 0, WIDTH, HEIGHT);

  let flavor = '';
  if (data.flavor) flavor = `with ${data.flavor} `;

  ctx.font = '24px "Satisfy"'
  ctx.textAlign = 'center';
  ctx.fillText(`${data.name}`, WIDTH / 2, 62);
  ctx.fillText(`is ${getArticle(data.descriptor)} ${data.descriptor} ${data.type}`, WIDTH / 2, 90);
  ctx.fillText(`${flavor}who ${data.focus}`, WIDTH / 2, 118);

  let LEFT = 130;
  ctx.textAlign = 'right';
  ctx.fillText('Tier:', LEFT, 166);
  ctx.fillText('Effort:', LEFT, 194);
  ctx.fillText('Armor:', LEFT, 222);
  ctx.fillText('XP:', LEFT, 250);

  LEFT = LEFT + 4;
  ctx.textAlign = 'left';
  ctx.fillText(data.tier, LEFT, 166);
  ctx.fillText(data.effort, LEFT, 194);
  ctx.fillText(data.armor, LEFT, 222);
  ctx.fillText(data.xp, LEFT, 250);

  let CENTER = 250 - 2;
  ctx.textAlign = 'right';
  ctx.fillText('Might:', CENTER, 166);
  ctx.fillText('Speed:', CENTER, 194);
  ctx.fillText('Intellect:', CENTER, 222);

  CENTER = 250 + 2;
  ctx.textAlign = 'left';
  ctx.fillText(`${data.might[0]}/${data.might[1]} (${data.might[2]})`, CENTER, 166);
  ctx.fillText(`${data.speed[0]}/${data.speed[1]} (${data.speed[2]})`, CENTER, 194);
  ctx.fillText(`${data.intellect[0]}/${data.intellect[1]} (${data.intellect[2]})`, CENTER, 222);

  const RIGHT = 340;
  ctx.textAlign = 'left';
  ctx.fillText(`Recovery: 1d6+${data.recovery[1] + data.tier}`, RIGHT, 166);
  ctx.fillText('Damage Track', RIGHT, 222);
  const SQUARE = 20;
  let ROW = 177;
  ctx.strokeStyle = 'black';
  for (let i = 0; i < data.recovery[0]; i++) {
    ctx.strokeRect(RIGHT + i * (SQUARE + 4), ROW, SQUARE, SQUARE);
    if (data.recovery[i + 2]) ctx.fillRect(RIGHT + i * (SQUARE + 4), ROW, SQUARE, SQUARE);
  }
  ROW = 234;
  ctx.strokeStyle = 'black';
  for (let i = 0; i < 4; i++) {
    ctx.strokeRect(RIGHT + i * (SQUARE + 4), ROW, SQUARE, SQUARE);
    if (data.damage[i]) ctx.fillRect(RIGHT + i * (SQUARE + 4), ROW, SQUARE, SQUARE);
  }

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
