import { useAPI } from 'api/apiContext';
// import getTraiveData from 'api/getTraiveData';
import Pagination from 'lib/Pagination/';
import { useRef } from 'react';

const Footer = () => {
  const { getNewPage, totalPages } = useAPI();
  const selectedRef = useRef<HTMLDivElement | null>(null);

  const handleOnSelect = async (page: number) => {
    getNewPage(page);
    // @ts-ignore
    selectedRef.current.innerHTML = `${(page * 10) - 9} - ${page * 10} of ${totalPages}`;
  };
  
  return (
    <div className="
      flex
      w-full
      justify-between
      rounded-b-xl
      border-2
      border-t-0
      border-neutral-400
      py-4
      px-6
    ">
      <div className="select-none" ref={selectedRef} />
      <Pagination total={10} onSelect={handleOnSelect} />
    </div>
  );
};

export default Footer;
