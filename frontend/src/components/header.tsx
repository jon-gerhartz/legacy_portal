import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <div className="w-screen bg-slate-200 mb-8 py-32 mb-10 justify-center">
      <div className="container mx-auto md:mx-12">{children}</div>
    </div>
  );
};

export default Header;
