import { ReactNode } from "react";
import AccordionSubitem from "./AccordionSubitem";
import { UpArrow, DownArrow } from 'lib/assets/Arrows';
import { MenuIcon } from "lib/assets/Menu";

interface Props {
  children: ReactNode | ReactNode[],
  open: boolean | undefined,
  onChevronClick: () => void
  onMenuOpenClick: () => void
  subItems: (ReactNode | ReactNode[])[],
  subItemsHeader: ReactNode | ReactNode[],
  allClosed: boolean,
} 

const AccordionItem = ({
  open,
  onChevronClick,
  onMenuOpenClick,
  children,
  subItems,
  subItemsHeader,
  allClosed,
}: Props) => {
  return (
    <div>
      <div className={`
        relative
        border-2
        border-b-0
        border-neutral-400
      `}>
        <div className={`flex h-14 ${open || allClosed ? '' : 'opacity-40'}`}>
          <div className={`flex w-12 items-center justify-center`}>
            {
              open
                ? <UpArrow onClick={onChevronClick} />
                : <DownArrow data-testid="DownArrow-testid" onClick={onChevronClick} />
            }
          </div>
          <div className={`flex items-center justify-center`}>
            {children}
          </div>
          <div className="absolute right-10 flex h-full content-center">
            <MenuIcon onClick={onMenuOpenClick} disabled={!(allClosed || open)} />
          </div>
        </div>
      </div>
      <AccordionSubitem subItems={subItems} subItemsHeader={subItemsHeader} open={open} />
    </div>
  );
};

export default AccordionItem;
