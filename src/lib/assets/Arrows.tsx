import { ReactComponent as RightArrowRaw } from './images/rightArrow.svg';

interface Props {
  onClick?: () => void,
  title?: string,
  className?: string,
  disabled?: boolean,
  'data-testid'?: string,
}

const MainArrow = ({ className, onClick, title = '', disabled, 'data-testid': dataTestid  }: Props) => (
  <RightArrowRaw
    data-testid={dataTestid}
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
  <MainArrow data-testid="downarrow-testid" className={`${className} rotate-90`} onClick={onClick} title={title} />
);

export const UpArrow = ({ className = '', onClick, title }: Props) => (
  <MainArrow data-testid="uparrow-testid" className={`${className} -rotate-90`} onClick={onClick} title={title} />
);
