import axios from "axios"; 

const mandarMails = (mails, result, sorteo) =>{
    
  const datos = [[mails], result, sorteo];

    axios
    .post("http://localhost:4000/mailer", datos)
    .then((error)=>console.log(error))
    .catch((err)=>console.log(err))

}



export {mandarMails};