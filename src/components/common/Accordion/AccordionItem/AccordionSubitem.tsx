import { ReactNode } from "react";

interface Props {
  subItems: (ReactNode | ReactNode[])[]
  open: boolean | undefined,
}
interface OpenHeight {
  [n: number]: string;
}
const OPEN_HEIGHT_MAP: OpenHeight = {
  1: 'h-[50px]',
  2: 'h-[100px]',
  3: 'h-[150px]',
  4: 'h-[200px]',
};

const AccordionSubitem = ({ subItems, open }: Props) => {
  const openHeight = OPEN_HEIGHT_MAP[subItems.length];
 
  return (
    <div className={`
      ${open ? openHeight : 'h-0'}
      transform
      overflow-hidden
      border-x-2
      border-t
      border-neutral-400
      bg-slate-700
      transition-height
      duration-500
      ease-in-out
    `}>
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
                border-neutral-400
                ${index !== 0 ? 'border-t' : ''}
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
