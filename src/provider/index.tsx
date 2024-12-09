import { PropsWithChildren } from "react";
import FormProvider from "./FormProvider";

const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  return <FormProvider>{children}</FormProvider>;
};

export default Provider;
