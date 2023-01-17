import { GRID_COLS } from "../styles";

interface StatusColors {
  [status: string]: string,
}

const STATUS_COLORS: StatusColors = {
  Ready: 'bg-yellow-800',
  Approved: 'bg-lime-800',
  Rejected: 'bg-red-800',
  Draft: 'bg-gray-700',
};

interface ItemContentProps {
  id: string,
  data: string[],
}

const ItemFormatter = ({
  id,
  data: [
    farmer,
    amount,
    status,
    dueDate,
  ]
}: ItemContentProps) => {
  const statusColor = STATUS_COLORS[status] || '';
  
  return (
    <div key={id} className={`grid ${GRID_COLS}`}>
      <div className="flex justify-center">
        {farmer}
      </div>
      <div className="flex justify-center">
        {amount}
      </div>
      <div className={`flex justify-center rounded-md text-white ${statusColor}`}>
        {status}
      </div>
      <div className="flex justify-center">
        {dueDate}
      </div>
    </div>
  );  
};

export default ItemFormatter;
