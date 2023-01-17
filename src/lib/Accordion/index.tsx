import { ReactNode, useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";

export interface AccordionContentProps {
  id: string,
  item: ReactNode | (ReactNode | ReactNode[])[],
  subItems: (ReactNode | ReactNode[])[],
  subItemsHeader: ReactNode | ReactNode[],
} 

export interface AccordionProps {
  content: AccordionContentProps[]
} 

const Accordion = ({ content }: AccordionProps) => {
  const [openItem, setOpenItem] = useState<number>(-1);

  useEffect(() => {
    setOpenItem(-1);
  },[content]);

  return (
    <div className="border-b-2 border-neutral-400">
      {
        content.map(({ item, id, subItems, subItemsHeader }, index: number) => (
          <AccordionItem
            key={id}
            open={openItem === index}
            allClosed={openItem === -1}
            onChevronClick={() => setOpenItem (openItem === index ? -1 : index)}
            subItems={subItems}
            subItemsHeader={subItemsHeader}
          >
            {item}
          </AccordionItem> 
        ))
      }
    </div>
  );
};

export default Accordion;

// import { ReactNode } from "react";

// const itemClass = 'flex justify-center whitespace-nowrap';

// interface ContentItemProps {
//   children?: ReactNode,
//   children: string[] | ReactNode[],
//   gridCols: string,
//   borderColor: string,
//   open?: boolean,
//   onChevronClick?: (isOpen: boolean) => void
// } 

// const Accordion = ({ children, open, onChevronClick, children, gridCols, borderColor }: ContentItemProps) => {
//   console.log('--> onChevronClick', onChevronClick);
//   return (
//     <div>
//       <div
//         className={`
//           grid
//           ${gridCols}
//           border-b-2
//           ${borderColor}
//           h-16
//           content-center
//           p-3
//         `}
//       >
//         {
//           onChevronClick && (
//             <div className={`${itemClass} cursor-pointer`} onClick={() => onChevronClick && onChevronClick(!!open)}>
//               {
//                 open ? 'A': 'V'
//               }
//             </div>
//           )
//         }
//         {
//           children.map((item) => (
//             <div key={item?.toString()} className={itemClass}>
//               {item}
//             </div>
//           ))
//         }
//       </div>
//       {open && children}
//     </div>
//   );
// };

// export default Accordion;
