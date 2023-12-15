import { Logo } from "@/components/Logo";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full flex-col space-y-6 flex items-center justify-center">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
