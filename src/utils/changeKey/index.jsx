export const changeKey = (array) => {
  const newArray = array.map((tipo) => {
    const novo = {};
    const key = Object.keys(tipo);

    novo["id"] = tipo[key[0]];
    novo["nome"] = tipo[key[1]];

    return novo;
  });

  return newArray;
};
