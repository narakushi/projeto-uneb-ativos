import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [idForm, setIdForm] = useState(0);

  return (
    <FormContext.Provider value={{ formData, setFormData, idForm, setIdForm }}>
      {children}
    </FormContext.Provider>
  );
};
