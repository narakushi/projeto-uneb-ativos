import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { Input } from "../input";
import { Select } from "../select";
import { TextArea } from "../textarea";
import styles from "./index.module.css";
import { Button } from "../button";

export const FormInter = () => {
  const inputs = [
    { label: "Razão Social", type: "text" },
    { label: "Nome Fantasia", type: "text" },
    { label: "CNPJ/CPF", type: "text" },
    {
      label: "Tipo de organização",
      options: [
        "Empresa demandante",
        "Empresa ofertante",
        "Startup",
        "ICT (UNEB, IF BAIANO, FATEC, etc)",
      ],
    },
    {
      label: "Setor Principal de Atuação",
      options: [],
    },
    {
      label: "Setor Secundário de Atuação",
      options: [],
    },
    {
      label: "Descrição das atividades",
      name: "descricao-atividades",
      rows: "5",
    },
    {
      label: "Porte",
      options: [],
    },
    { label: "CEP", type: "text" },
    { label: "Endereço", type: "text" },
    { label: "Número", type: "text" },
    { label: "Bairro", type: "text" },
    { label: "Cidade", type: "text" },
    {
      label: "UF",
      options: [
        "AC",
        "AL",
        "AP",
        "AM",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MT",
        "MS",
        "MG",
        "PA",
        "PB",
        "PR",
        "PE",
        "PI",
        "RJ",
        "RN",
        "RS",
        "RO",
        "RR",
        "SC",
        "SP",
        "SE",
        "TO",
      ],
    },
    { label: "Complemento", type: "text" },
    { label: "Telefone Principal", type: "text" },
    { label: "Email Principal", type: "email" },
    { label: "Ano Fundação", type: "text" },
    { label: "Website", type: "text" },
    { label: "Redes Sociais", type: "text" },
    { label: "Telefone Contato Principal", type: "text" },
    { label: "Nome Contato Principal", type: "text" },
    { label: "Cargo Contato Principal", type: "text" },
    { label: "E-mail Contato Principal", type: "email" },
    {
      label: "Status da Empresa",
      options: [],
    },
    {
      label: "Origem do cadastro",
      type: "text",
    },
    {
      label: "Observações Gerais",
      name: "observacoes-gerais",
      rows: "5",
    },
  ];

  return (
    <div className={styles.containerFormInter}>
      <div className={styles.formInterStages}>
        <span className={styles.stagesChild}>
          <FaCheckCircle size={15} color=" #00a6245c" />
          Dados da organização
        </span>
        <span className={styles.stagesChild}>
          <FaCheckCircle size={15} color="#00a6245c" />
          Necessidades e desafios tenológicos
        </span>
      </div>

      <form action="" className={styles.form}>
        <div className={styles.formInputs}>
          {inputs.map((input) => (
            <>
              {input.type ? (
                <Input {...input} />
              ) : input.rows ? (
                <TextArea {...input} />
              ) : (
                <Select {...input} />
              )}
            </>
          ))}
        </div>
        <div className={styles.containerBtn}>
          <Button text="Continuar" url="/client" customClass="btnColor" />
        </div>
      </form>
    </div>
  );
};
