import axios from "axios"; 

const mandarMails = (mails, result, sorteo) =>{
    
  const datos = [[mails], result, sorteo];

    axios
    .post("http://15.237.138.68/mailer", datos)
    .then((error)=>console.log(error))
    .catch((err)=>console.log(err))

}



export {mandarMails};