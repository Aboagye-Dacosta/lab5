import { PropsWithChildren } from "react";
import { TypographyInterface } from "../types/typography";

const Typography: React.FC<PropsWithChildren<Partial<TypographyInterface>>> = ({
  children,
  color = "denim",
  weight = "weight-400",
  variant = "p",
  size = "fs-x-sm",
  align = "left",
  ...rem
}) => {
  const Variant = variant;
  return (
    <Variant
      {...rem}
      className={`
    ${color} ${weight} ${size} text-${align}
  `}
    >
      {children}
    </Variant>
  );
};

export default Typography;
