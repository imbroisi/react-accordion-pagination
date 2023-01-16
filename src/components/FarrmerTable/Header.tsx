import { BORDER_COLOR, GRID_COLS } from "./styles";

interface HeaderProps {
  labels: string[],
}

const Header = ({ labels }: HeaderProps) => {
  return (
    <div className={`
      grid
      ${GRID_COLS}
      border-2
      border-b-0
      ${BORDER_COLOR}
      overflow-hidden
      rounded-t-xl
      bg-neutral-700
      p-4
    `}>
      <div />
      {
        labels.map((label) => (
          <div key={label} className="flex justify-center whitespace-nowrap">
            {label}
          </div>
        ))
      }
    </div>
  );
};

export default Header;
