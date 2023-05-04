const seleccionarAleatorio = (options, num) => {
  let res = [];
  let aux = 0;
  let opt = options
  for (let i = 0; i < num; i++){
    aux = Math.floor(Math.random() * ((opt.length - 1) - 0 + 1) + 0)
    res.push(opt[aux]);
    console.log(opt)
    opt.splice(aux, 1);
   
  }
  
  
  return res;
 
};

export { seleccionarAleatorio };
