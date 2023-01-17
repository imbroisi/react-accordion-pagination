import { ReactComponent as RightArrowRaw } from './rightArrow.svg';

interface Props {
  onClick?: () => void,
  title?: string,
  className?: string,
  disabled?: boolean,
}

export const MainArrow = ({ className, onClick, title = '', disabled }: Props) => (
  <RightArrowRaw 
    className={`
      w-6
      ${className || ''}
      ${onClick ? 'cursor-pointer': ''}
      ${disabled ? 'cursor-default opacity-30 ': ''}
    `}
    onClick={onClick}
    title={title} />
);

export const RightArrow = ({ className = '', onClick, title = '', disabled }: Props) => (
  <MainArrow className={className} onClick={onClick} title={title} disabled={disabled} />
);

export const LeftArrow = ({ className = '', onClick, title, disabled }: Props) => (
  <MainArrow className={`${className} rotate-180`} onClick={onClick} title={title}disabled={disabled} />
);

export const DownArrow = ({ className = '', onClick, title }: Props) => (
  <MainArrow className={`${className} rotate-90`} onClick={onClick} title={title} />
);

export const UpArrow = ({ className = '', onClick, title }: Props) => (
  <MainArrow className={`${className} -rotate-90`} onClick={onClick} title={title} />
);
