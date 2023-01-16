import { ReactNode, useState } from "react";
import AccordionItem from "./AccordionItem";

// interface Items {
//   items: (ReactNode | ReactNode[])[]
// }

interface Data {
  item: (ReactNode | ReactNode[])[],
  id: string,
  subItems: (ReactNode | ReactNode[])[],
} 

interface Props {
  data: Data[]
} 

const Accordion = ({ data }: Props) => {
  const [openItem, setOpenItem] = useState(-1);

  console.log('--->> data', data);
  console.log('--->> Math.random().toString()', Math.random().toString());

  return (
    <div>
      <div>
        {
          data.map((tmp: any, index: number) => {
            console.log('--->>> tmp', tmp);

            const { item, id, subItems } = tmp;
            console.log('--->>> item', item);

            return(
              <AccordionItem
                key={id}
                open={openItem === index}
                onChevronClick={(isOpen) => setOpenItem (isOpen ? -1 : index)}
                index={index}
                subItems={subItems}
              >
                {item}
              </AccordionItem>
            );})
        }
      </div>
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
