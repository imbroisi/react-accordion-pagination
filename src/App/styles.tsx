import { ChildrenProps } from 'interfaces';

export const Container = ({ children }: ChildrenProps) => (
  <h1 className="text-3xl font-bold underline">
    {children}
  </h1>
);
