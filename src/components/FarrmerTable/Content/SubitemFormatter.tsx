import { GRID_COLS_SUBITEMS } from "../styles";

interface ItemContentProps {
  data: string[],
}

const ItemFormatter = ({ data }: ItemContentProps) => {
  return (
    <div className={`
      grid
      ${GRID_COLS_SUBITEMS}
    `}>
      {
        data.map((value, index) => {
          if (index === 0) {
            return null;
          }
          return (
            <div
              key={value}
              className="flex items-center justify-center text-center"
            >
              {value}
            </div>            
          );
        })
      }
    </div>
  );
};

export default ItemFormatter;
