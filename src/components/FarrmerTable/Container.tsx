import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode | ReactNode[],
}

const Container = ({ children }: ContainerProps) => (
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
