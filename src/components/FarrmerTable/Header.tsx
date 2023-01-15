import { BORDER_COLOR, GRID_COLS } from "./styles";

interface HeaderProps {
  labels: string[]
} 

const Header = ({ labels }: HeaderProps) => (
  <div className={`
    grid
    ${GRID_COLS}
    border-b-2
    ${BORDER_COLOR}
    bg-neutral-700
    p-4
  `}>
    <div />
    {
      labels.map((label,) => (
        <div key={label} className="flex justify-center whitespace-nowrap">
          {label}
        </div>
      ))
    }
  </div>
);

export default Header;
