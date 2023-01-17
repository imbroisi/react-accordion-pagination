/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { RightArrow, LeftArrow } from '../assets/Arrows';

interface PaginationProps {
  total: number,
  onSelect?: (s: number) => void,
}

const PATTERN = (total: number, selected: number) => {
  if (total <= 7) {
    return 'XXXXXXX';
  }

  if (selected <= 4) {
    return 'XXXXX_X';
  }

  if (selected > total - 5) {
    return 'X_XXXXX';
  }

  return 'X_XXX_X';
};

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

  const pattern = PATTERN(total, selected);
  let final = Array(7).fill(0);

  console.log('(2) --->>>> selected', selected);

  if (pattern.indexOf('_') === -1) {
    const nullArray = Array.apply(null, Array(total));
    final = nullArray.map((item, index) => index + 1);
  } else if (pattern[1] === '_' && pattern[pattern.length - 2] === '_') {
    final[0] = 1;
    final[1] = '...';
    final[2] = selected - 1;
    final[3] = selected;
    final[4] = selected + 1;
    final[5] = '...';
    final[6] = total;
  } else if (pattern[1] === '_') {
    final[0] = 1;
    final[1] = '...';
    final[2] = total - 4;
    final[3] = total - 3;
    final[4] = total - 2;
    final[5] = total - 1;
    final[6] = total;
  } else if (pattern[pattern.length - 2] === '_') {
    final[0] = 1;
    final[1] = 2;
    final[2] = 3;
    final[3] = 4;
    final[4] = 5;
    final[5] = '...';
    final[6] = total;
  }
  
  return (
    <div className="flex">
      <LeftArrow
        onClick={handleMinus}
        disabled={selected === 1}
      />
      {
        final.map((value, index) => {
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
