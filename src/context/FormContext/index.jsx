import { createContext, useEffect, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formStepOne, setFormStepOne] = useState({});
  const [formStepTwo, setFormStepTwo] = useState({});
  const [idForm, setIdForm] = useState(0);
  const formUrlsEnv = {
    urlAtores: process.env.NEXT_PUBLIC_ATORES,
    urlTipoAtores: process.env.NEXT_PUBLIC_TIPO_SETOR,
    urlTipoSetores: process.env.NEXT_PUBLIC_ATORES,
    urlNecessidade: `${process.env.NEXT_PUBLIC_NECESSIDADE}`,
  };
  const [formRouter, setFormRouter] = useState("");
  const [back, setBack] = useState(false);

  useEffect(() => {
    if (formRouter) {
      localStorage.setItem("urlChoice", JSON.stringify(formRouter));
    }
    if (formRouter == "") {
      setFormRouter(JSON.parse(localStorage.getItem("urlChoice")));
    }
  }, [formRouter]);

  useEffect(() => {
    const storedId = JSON.parse(localStorage.getItem("idForm"));
    setIdForm(storedId);
  }, []);

  useEffect(() => {
    if (idForm) {
      localStorage.setItem("idForm", JSON.stringify(idForm));
    }
  }, [idForm]);

  return (
    <FormContext.Provider
      value={{
        formStepOne,
        setFormStepOne,
        formStepTwo,
        setFormStepTwo,
        idForm,
        setIdForm,
        formRouter,
        setFormRouter,
        formUrlsEnv,
        back,
        setBack,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
