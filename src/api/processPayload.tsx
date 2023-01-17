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

// export const processPayload = (items: Item[]): any => (
//   items.map(({
//     id,
//     farmer,
//     status,
//     credit_requests: creditRequests,
//   }) => {
//     const statusColor = STATUS_COLORS[status] || '';

//     // Transform due-date to yyyy-mm-dd (ISO)
//     const dueDate = new Date(
//       creditRequests[creditRequests.length - 1].due_date
//     ).toISOString().substring(0, 10);

//     // calcule total amouts and normalize format
//     const totalRaw = creditRequests.reduce((a, creditRequests) => (
//       a + creditRequests.amount), 0
//     );
//     const totalNormalized = normalizeCurrency(totalRaw);

//     const ItemContent = () => (
//       <div key={id} className={`
//         grid
//         ${GRID_COLS}
//       `}>
//         <div className="flex justify-center">
//           {`${farmer.firstName} ${farmer.lastName}`}
//         </div>
//         <div className="flex justify-center">
//           {`$ ${totalNormalized}`}
//         </div>
//         <div className={`flex justify-center rounded-md text-white ${statusColor}`}>
//           {capitalizeFirst(status)}
//         </div>
//         <div className="flex justify-center">
//           {dueDate}
//         </div>
//       </div>
//     );

//     const SubItemHeader = () => (
//       <div key={id} className={`
//         grid
//         ${GRID_COLS_SUBITEMS}
//       `}>
//         <div className="flex justify-center">
//           Season
//         </div>
//         <div className="flex justify-center">
//           Amount Requested
//         </div>
//         <div className="flex justify-center">
//           Purpose
//         </div>
//         <div className="flex justify-center">
//           Due Date
//         </div>
//       </div>
//     );

//     const SubItemContent = () => 
//       creditRequests.map((cr) => {
//         const dueDate = new Date(
//           cr.due_date
//         ).toISOString().substring(0, 10);

//         return (
//           <div key={cr.id} className={`
//             grid
//             ${GRID_COLS_SUBITEMS}
//           `}>
//             <div className="flex justify-center">
//               {cr.season}
//             </div>
//             <div className="flex justify-center">
//               $ {normalizeCurrency(cr.amount)}
//             </div>
//             <div className="flex justify-center">
//               {cr.purpose[0]}
//             </div>
//             <div className="flex justify-center">
//               {dueDate}
//             </div>
//           </div>
//         );
//       });

//     return {
//       id,
//       item: <ItemContent />,
//       subItemsHeader: <SubItemHeader />,
//       subItems: SubItemContent(),
//     };
//   })
// );
