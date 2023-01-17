import { GRID_COLS_SUBITEMS } from "../styles";

interface ItemContentProps {
  data: string[],
}

const ItemFormatter = ({
  data: [
    ,
    season,
    amount,
    purpose,
    dueDate,
  ]
}: ItemContentProps) => {
  return (
    <div className={`
      grid
      ${GRID_COLS_SUBITEMS}
    `}>
      <div className="flex justify-center">
        {season}
      </div>
      <div className="flex justify-center">
        {amount}
      </div>
      <div className="flex justify-center">
        {purpose}
      </div>
      <div className="flex justify-center">
        {dueDate}
      </div>
    </div>
  );
};

export default ItemFormatter;
