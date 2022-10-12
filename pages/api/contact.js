// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
    let nodemailer = require('nodemailer') 

//     MAIL_MAILER=smtp
// MAIL_HOST=smtp.titan.email
// MAIL_PORT=587
// MAIL_USERNAME=contato@argilatech.com.br
// MAIL_PASSWORD="gwCu67QTAEh2THp"
// MAIL_ENCRYPTION=null
// MAIL_FROM_ADDRESS=contato@argilatech.com.br


    var transport = nodemailer.createTransport({
        host: "smtp.titan.email",
        port: 587,
        auth: {
            user: "contato@argilatech.com.br",
            pass: "gwCu67QTAEh2THp"
        }
    });

    const mailData = { 
        from: 'contato@argilatech.com.br', 
        to: 'pibg1971@gmail.com', 
        subject: `E-mail da LandingPage`, 
        text: req.body.message, 
        html: `<p>Nome: ${req.body.first}</p> <p>Telefone: ${req.body.last}</p>`
    }

    return transport.sendMail(mailData, function (err, info) { 
        if(err) 
            console.log(err) 
        else 
            console.log(info);
            alert('ola')
            document.location.reload(true);
            
    });
}