const nodemailer = require("nodemailer");

class mailerController {
  enviarMails = async (req, res) => {
    let [mails] = req.body;
    let result = req.body[1];
    let sorteo = req.body[2];
    let now = new Date();
    console.log("resultado",result);
    
    console.log("******************", req.body);
    for (let i = 0; i < mails.length; i++) {
      let mailDestino = mails[i];
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "websorteoweb@gmail.com",
          pass: "nqqehobnazwkknos",
        },
      });

      var mailOptions = {
        from: "websorteoweb@gmail.com",
        to: mailDestino,
        subject: `Resultado del sorteo ${sorteo}`,
        text: ` Acabas de recibir el resultado de un sorteo organizado por SorteoWeb. ¿Serás el afortunado?.`,
        html: `<h2>Acabas de recibir el resultado de un sorteo organizado por SorteoWeb. ¿Serás el afortunado?.</h2>
        <h3>Este es el resultado:</h3>
        <h4>Nombre del sorteo: ${sorteo}.</h4>
        <h4>Fecha del sorteo: ${now} </h4>
        <h4>Y el ganador/es del sorteo es: </h4>
        <h1 style="color: red">${result.join(", ")}</h1>
        <a href="http://www.sorteoweb.com"><p>Gracias por usar SorteoWeb</p></a>
        `,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
  };
}

module.exports = new mailerController();
