import { capitalizeFirst, normalizeCurrency } from 'utils';
import { GRID_COLS, GRID_COLS_SUBITEMS } from '../styles';

interface CreditRequest {
  id: string,
  farmer_id: string,
  purpose: string[],
  season: string,
  due_date: string,
  amount: number,
}

interface Farmer {
  firstName: string,
  lastName: string,
}

interface Item {
  id: string,
  farmer: Farmer,
  status: string,
  credit_requests: CreditRequest[],  
}

interface StatusColors {
  [value: string]: string,
}

const STATUS_COLORS: StatusColors = {
  ready: 'bg-yellow-700',
  approved: 'bg-lime-700',
  rejected: 'bg-red-600',
  draft: 'bg-gray-600',
};

export const transformPayload = (items: Item[]): any => (
  items.map(({
    id,
    farmer,
    status,
    credit_requests: creditRequests,
  }) => {
    const statusColor = STATUS_COLORS[status] || '';

    const ItemContent = () => (
      <div key={id} className={`
        grid
        ${GRID_COLS}
      `}>
        <div className="flex justify-center">
          {`${farmer.firstName} ${farmer.lastName}`}
        </div>
        <div className="flex justify-center">
          {`$ ${totalNormalized}`}
        </div>
        <div className={`flex justify-center rounded-md text-white ${statusColor}`}>
          {capitalizeFirst(status)}
        </div>
        <div className="flex justify-center">
          {dueDate}
        </div>
      </div>
    );

    const SubItemHeader = () => (
      <div key={id} className={`
        grid
        ${GRID_COLS_SUBITEMS}
      `}>
        <div className="flex justify-center">
          Season
        </div>
        <div className="flex justify-center">
          Amount Requested
        </div>
        <div className="flex justify-center">
          Purpose
        </div>
        <div className="flex justify-center">
          Due Date
        </div>
      </div>
    );

    const SubItemContent = () => 
      creditRequests.map((cr) => {
        const dueDate = new Date(
          cr.due_date
        ).toISOString().substring(0, 10);

        return (
          <div key={cr.id} className={`
            grid
            ${GRID_COLS_SUBITEMS}
          `}>
            <div className="flex justify-center">
              {cr.season}
            </div>
            <div className="flex justify-center">
              $ {normalizeCurrency(cr.amount)}
            </div>
            <div className="flex justify-center">
              {cr.purpose[0]}
            </div>
            <div className="flex justify-center">
              {dueDate}
            </div>
          </div>
        );
      });

    // Transform due-date to yyyy-mm-dd (ISO)
    const dueDate = new Date(
      creditRequests[creditRequests.length - 1].due_date
    ).toISOString().substring(0, 10);

    // calcule total amouts and normalize format
    const totalRaw = creditRequests.reduce((a, creditRequests) => (
      a + creditRequests.amount), 0
    );
    const totalNormalized = normalizeCurrency(totalRaw);

    return {
      id,
      item: <ItemContent />,
      subItemsHeader: <SubItemHeader />,
      subItems: SubItemContent(),
      // creditRequests.map((cr) => {
      //   return (
      //     <b key={cr.id}>
      //       {cr.purpose}
      //     </b>
      //   );
      // }),
    };
  })
);
