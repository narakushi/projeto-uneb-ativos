import { createContext, useEffect, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formStepOne, setFormStepOne] = useState({});
  const [formStepTwo, setFormStepTwo] = useState({});
  const [formStepThree, setFormStepThree] = useState({});
  const [idForm, setIdForm] = useState(0);
  const formUrlsEnv = {
    urlAtores: process.env.NEXT_PUBLIC_ATORES,
    urlTipoAtores: process.env.NEXT_PUBLIC_TIPO_SETOR,
    urlTipoSetores: process.env.NEXT_PUBLIC_ATORES,
    urlNecessidade: process.env.NEXT_PUBLIC_NECESSIDADE_ATOR,
    urlNecessidadeOne: process.env.NEXT_PUBLIC_NECESSIDADE,
  };

  const [formRouter, setFormRouter] = useState("");
  const [back, setBack] = useState(false);
  const [idEditState, setIdEditState] = useState(-1);

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

    const storeIdNecessidade = JSON.parse(
      localStorage.getItem("idFormNecessidade")
    );
    setIdEditState(storeIdNecessidade);
  }, []);

  useEffect(() => {
    if (idForm) {
      localStorage.setItem("idForm", JSON.stringify(idForm));
    }

    if (idEditState) {
      localStorage.setItem(
        "idFormidFormNecessidade",
        JSON.stringify(idEditState)
      );
    }
  }, [idForm, idEditState]);

  return (
    <FormContext.Provider
      value={{
        formStepOne,
        setFormStepOne,
        formStepTwo,
        setFormStepTwo,
        formStepThree,
        setFormStepThree,
        idForm,
        setIdForm,
        formRouter,
        setFormRouter,
        formUrlsEnv,
        back,
        setBack,
        idEditState,
        setIdEditState,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
