/**
 * Extract and process data from API payload to a better formmat to process
 */
import { capitalizeFirst, normalizeCurrency } from 'utils';

interface Item {
  id: string,
  farmer: {
    firstName: string,
    lastName: string,
  },
  status: string,
  credit_requests: {
    id: string,
    farmer_id: string,
    purpose: string[],
    season: string,
    due_date: string,
    amount: number,
  }[],  
}

export const processPayload = (items: Item[]): any => (
  items.map(({
    id,
    farmer,
    status,
    credit_requests: creditRequests,
  }) => {
    // Transform due-date to yyyy-mm-dd (ISO)
    const dueDate = new Date(
      creditRequests[creditRequests.length - 1].due_date
    ).toISOString().substring(0, 10);

    // calcule total amouts and normalize format
    const totalRaw = creditRequests.reduce((a, creditRequests) => (
      a + creditRequests.amount), 0
    );
    const totalNormalized = normalizeCurrency(totalRaw);

    const itemData = [
      `${farmer.firstName} ${farmer.lastName}`,
      `$ ${totalNormalized}`,
      capitalizeFirst(status),
      dueDate,
    ];

    const subItemContent = () => 
      creditRequests.map((cr) => {
        const dueDate = new Date(
          cr.due_date
        ).toISOString().substring(0, 10);

        return [
          cr.id,
          cr.season,
          normalizeCurrency(cr.amount),
          cr.purpose[0],
          dueDate,
        ];
      });

    return {
      id,
      itemData,
      subItemsData: subItemContent(),
    };
  })
);
