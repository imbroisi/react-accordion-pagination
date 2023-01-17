import { rest } from 'msw';
import payload from './data/payload.json';

// NOTE: it is not possible deconstruct directly from above import
const { totalItems, items } = payload;

export const handlers = [
  rest.post('/traive-data', async (req, res, ctx) => {
    const { page, total } = await req.json();

    let vetorIni = (page - 1) * total; 
    let vetorEnd = page * total - 1;

    if (vetorIni > totalItems) {
      vetorIni = totalItems - 2;
    }
    if (vetorEnd > totalItems) {
      vetorEnd = totalItems - 1;
    }

    return res(
      ctx.json({
        totalItems,
        items: items.slice(vetorIni, vetorEnd),
      })
    );
  }),
];
