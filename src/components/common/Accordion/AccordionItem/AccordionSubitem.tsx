import { ReactNode } from "react";

interface Props {
  subItems: (ReactNode | ReactNode[])[]
  open: boolean | undefined,
}

//       ${open ? '': 'hidden'}
//       ${open ? 'scale-1' : 'scale-0'}

const AccordionSubitem = ({ subItems, open }: Props) => {
  const openHeight = `h-[${subItems.length * 50}px]`; 
  return (
    <div className={`
      h-0
      transform
      overflow-hidden
      border-x-2
      border-t
      border-neutral-400
      transition-height
      duration-500
      ease-in-out
      ${open ? openHeight : 'h-0'}
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
