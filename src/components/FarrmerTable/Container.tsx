import { ChildrenProps } from 'interfaces';
// import { BORDER_COLOR } from './styles';

const Container = ({ children }: ChildrenProps) => (
  <div className={`
    mt-16
    flex
    flex-col
    items-center
    bg-neutral-900
  `}>
    {children}
  </div>
);

export default Container;
