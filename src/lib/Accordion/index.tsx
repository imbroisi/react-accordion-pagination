import { ReactNode, useEffect, useRef, useState } from "react";
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
  const [openMenu, setOpenMenu] = useState<number>(-1);
  const menuRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // close opened subitems on new page
    setOpenItem(-1);
  },[content]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as HTMLElement)) {
        setOpenMenu(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="border-b-2 border-neutral-400">
      {
        content.map(({ item, id, subItems, subItemsHeader }, index: number) => (
          <div key={id} className="relative">
            <AccordionItem
              open={openItem === index}
              allClosed={openItem === -1}
              onChevronClick={() => setOpenItem (openItem === index ? -1 : index)}
              subItems={subItems}
              subItemsHeader={subItemsHeader}
              onMenuOpenClick={() => (openItem === index || openItem === -1) && setOpenMenu(index)}
            >
              {item}
            </AccordionItem>
            {
              openMenu === index && (
                <div ref={menuRef} className="
                  absolute
                  right-16
                  top-8
                  z-10
                  flex
                  flex-col
                  content-center
                  items-center
                  rounded
                  border
                  border-neutral-400
                  bg-slate-300
                  py-1
                  text-black
                ">
                  <div className="mb-1 w-full cursor-pointer px-6 hover:bg-slate-400" onClick={() => setOpenMenu(-1)}>
                    Approve
                  </div>
                  <div className="w-full border border-neutral-400" />
                  <div className="mt-1 w-full cursor-pointer px-6 hover:bg-slate-400" onClick={() => setOpenMenu(-1)}>
                    Reject
                  </div>
                </div>
              )
            }
          </div>
        ))
      }
    </div>
  );
};

export default Accordion;
