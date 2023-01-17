import { GRID_COLS_SUBITEMS } from "../styles";

const SubitemHeader = () => (
  <div className={`grid ${GRID_COLS_SUBITEMS}`}>
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

export default SubitemHeader;
