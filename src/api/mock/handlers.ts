import { rest } from 'msw';
import payload from './data/payload.json';

// NOTE: it is not possible deconstruct directly from above import
const { totalItems, items } = payload;

export const handlers = [
  rest.get('/traive-data', (req, res, ctx) => {
    const page = req.url.searchParams.get('page') || '0';
    const total = req.url.searchParams.get('total') || '0';

    const pageInt = parseInt(page);
    const totalInt = parseInt(total);

    let vetorIni = (pageInt - 1) * totalInt; 
    let vetorEnd = pageInt * totalInt - 1;

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
