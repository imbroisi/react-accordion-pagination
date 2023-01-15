import { ChildrenProps } from 'interfaces';

export const Container = ({ children }: ChildrenProps) => (
  <div className="mt-16 flex w-full flex-col items-center">
    {children}
  </div>
);
