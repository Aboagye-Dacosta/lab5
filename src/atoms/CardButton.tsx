import { PropsWithChildren } from "react";

const CardButton: React.FC<PropsWithChildren<{ onClick: () => void }>> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className="flex flex-col border p-x-[16px] p-y-[20px] :hover:border-purple :focus:border-purple :focus:bg-grey radius-[8px] w-full flex-1 lg:w-[138px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CardButton;
