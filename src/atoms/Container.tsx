import { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[39px] bg-white radius-[8px] p-x-[24px] p-y-[20px] shadow">
      {children}
    </div>
  );
};

export default Container;
