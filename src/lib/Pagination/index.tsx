/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { RightArrow, LeftArrow } from 'lib/assets/Arrows';

interface PaginationProps {
  total: number,
  onSelect?: (s: number) => void,
}

const Pagination = ({ total, onSelect }: PaginationProps) => {
  const [selected, setSelected] = useState(1);

  const handlePlus = () => {
    if (selected < total) {
      setSelected(selected + 1);
    }
  };

  const handleMinus = () => {
    if (selected > 1) {
      setSelected(selected - 1);
    }
  };

  useEffect(() => {
    if (onSelect) {
      onSelect(selected);
    }
  }, [selected, onSelect]);

  let schema;
  if (total < 7) {
    const nullArray = Array(total).fill(null);
    schema = nullArray.map((_, index) => index + 1);
  } else {
    schema = Array(7).fill(null);
    schema[0] = 1;
    schema[6] = total;

    if (selected <= 4) {
      schema[1] = 2;
      schema[2] = 3;
      schema[3] = 4;
      schema[4] = 5;
      schema[5] = '...';
    } else if (selected > total - 4) {
      schema[1] = '...';
      schema[2] = total - 4;
      schema[3] = total - 3;
      schema[4] = total - 2;
      schema[5] = total - 1;
    } else {
      schema[1] = '...';
      schema[2] = selected - 1;
      schema[3] = selected;
      schema[4] = selected + 1;
      schema[5] = '...';
    }
  }
  
  return (
    <div className="flex">
      <LeftArrow
        onClick={handleMinus}
        disabled={selected === 1}
      />
      {
        schema.map((value, index) => {
          const borderColor = isNaN(value)
            ? 'border-transparent'
            : (value === selected ? 'border-white' : 'border-gray-500');

          return (
            <div
              key={index}
              onClick={() => !isNaN(value) && setSelected(value)}
              className={`
                mx-[6px]
                flex
                w-[28px]
                select-none
                justify-center
                rounded
                border
                py-[1px]
                ${borderColor}
                ${selected === value ? 'text-white' : 'text-gray-500'}
                ${!isNaN(value) ? 'cursor-pointer' : ''}
              `}
            >
              {value}
            </div>
          );  
        })
      }
      <RightArrow
        onClick={handlePlus}
        disabled={selected === total}
      />
    </div>
  );
};

export default Pagination;
