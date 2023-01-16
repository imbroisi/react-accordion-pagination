import { BORDER_COLOR, GRID_COLS_HEADER } from "./styles";

const headerLabels = [
  'Farmer',
  'Amount Requested',
  'Status',
  'Due Date',
  'Actions',
];

const Header = () => {
  return (
    <div className={`
      grid
      ${GRID_COLS_HEADER}
      border-2
      border-b-0
      ${BORDER_COLOR}
      overflow-hidden
      rounded-t-xl
      bg-slate-800
      p-4
      font-bold
    `}>
      <div />
      {
        headerLabels.map((label) => (
          <div key={label} className="flex justify-center whitespace-nowrap">
            {label}
          </div>
        ))
      }
    </div>
  );
};

export default Header;
