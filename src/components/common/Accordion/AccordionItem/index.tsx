import { ReactNode } from "react";
import AccordionSubitem from "./AccordionSubitem";

interface Props {
  children: ReactNode | ReactNode[],
  open: boolean | undefined,
  onChevronClick: (isOpen: boolean) => void
  index: number,
  subItems: (ReactNode | ReactNode[])[],
} 

const AccordionItem = ({ open, onChevronClick, children, subItems, index }: Props) => {
  return (
    <div>
      <div className={`
        flex
        h-14
        border-2
        border-b-0
        border-neutral-400
      `}>
        <div className="flex w-12 items-center justify-center">
          <div
            className="cursor-pointer"
            onClick={() => onChevronClick(!!open)}
          >
            {open ? 'A': 'V'}
          </div>
        </div>
        <div className="flex items-center justify-center">
          {children}
        </div>
      </div>
      <AccordionSubitem subItems={subItems} open={open} />
    </div>
  );
};

export default AccordionItem;

// import { ReactNode } from "react";

// const itemClass = 'flex justify-center whitespace-nowrap';

// interface ContentItemProps {
//   children?: ReactNode,
//   items: string[] | ReactNode[],
//   gridCols: string,
//   borderColor: string,
//   open?: boolean,
//   onChevronClick?: (isOpen: boolean) => void
// } 

// const Accordion = ({ children, open, onChevronClick, items, gridCols, borderColor }: ContentItemProps) => {
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
//           items.map((item) => (
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
