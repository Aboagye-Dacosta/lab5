import { PropsWithChildren } from "react";
import { FormContext, useFormContext } from "../context/form_context";

const FormProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <FormContext.Provider value={useFormContext()}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
