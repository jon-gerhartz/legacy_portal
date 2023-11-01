import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Body = ({ children }: Props) => {
  return (
    <div className="container mx-auto space-y-8 justify-center">{children}</div>
  );
};

export default Body;
