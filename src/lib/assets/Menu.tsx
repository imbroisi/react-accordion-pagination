import { ReactComponent as MenuIconRaw } from './images/menu.svg';

interface Props {
  onClick?: () => void,
  title?: string,
  className?: string,
  disabled?: boolean,
}

export const MenuIcon = ({ className, onClick, title = '', disabled }: Props) => (
  <MenuIconRaw
    data-testid="menuitem-testid"
    className={`
      w-6
      ${className || ''}
      ${onClick ? 'cursor-pointer': ''}
      ${disabled ? 'cursor-default opacity-30 ': ''}
    `}
    onClick={onClick}
    title={title} />
);
