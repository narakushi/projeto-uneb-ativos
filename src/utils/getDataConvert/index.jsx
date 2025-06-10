export const getDataConvert = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const newDate = `${year}-${month}-${day}`;

  const options = { timeZone: "America/Sao_Paulo" };
  const hourBrazil = date.toLocaleTimeString("pt-BR", options);
  return `${newDate} ${hourBrazil}`;
};
