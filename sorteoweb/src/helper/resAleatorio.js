const seleccionarAleatorio = (options) => {
  let res = Math.floor(Math.random() * ((options.length - 1) - 0 + 1) + 0);
  return options[res];
};

export { seleccionarAleatorio };
