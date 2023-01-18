import { GRID_COLS_HEADER } from "./styles";

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
      w-full
      overflow-hidden
      rounded-t-xl
      border-2
      border-b-0
      border-neutral-400
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
