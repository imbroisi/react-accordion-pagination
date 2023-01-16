import { ReactNode } from "react";

interface Props {
  subItems: (ReactNode | ReactNode[])[]
  subItemsHeader: ReactNode | ReactNode[],
  open: boolean | undefined,
}
interface OpenHeight {
  [n: number]: string;
}
const OPEN_HEIGHT_MAP: OpenHeight = {
  1: 'h-[102px]',
  2: 'h-[152px]',
  3: 'h-[200px]',
  4: 'h-[250px]',
};

const AccordionSubitem = ({ subItems, subItemsHeader, open }: Props) => {
  const subitemHeight = open ? OPEN_HEIGHT_MAP[subItems.length] : 'h-0';
 
  return (
    <div className={`
      ${subitemHeight}
      transform
      overflow-hidden
      border-x-2
      border-neutral-400
      pl-20
      transition-height
      duration-500
      ease-in-out
    `}>
      <div className="
        flex
        h-12
        items-center
        rounded-tl-md
        border
        border-r-0
        border-neutral-400
        bg-slate-800
        font-bold
        "
      >
        {subItemsHeader}
      </div>
      {
        subItems.map((subItem, index) => {
          return (
            <div
              key={index}
              className={`
                my-px
                flex
                h-12
                items-center
                overflow-hidden
                border-l
                border-neutral-400
                bg-slate-700
                ${index !== 0 ? 'border-t' : ''}
                ${index === subItems.length - 1 ? 'border-b' : ''}
              `}
            >
              {subItem}
            </div>
          );
        })
      }
    </div>
  );
};

export default AccordionSubitem;
