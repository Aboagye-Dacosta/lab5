import { PropsWithChildren } from "react";
import { ButtonInterface } from "../types/button";

const Button: React.FC<PropsWithChildren<Partial<ButtonInterface>>> = ({
  children,
  variant = "btn-primary",
  onClick,
  ...rem
}) => {
  return (
    <button
      {...rem}
      className={`${variant} white radius-[8px] p-y-[14px] p-x-[24px] weight-500 fs-md pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
