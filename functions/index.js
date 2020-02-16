// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

'use strict';
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

const sender = "porfolioedson@gmail.com";
const pass = "Dinhonnm4";
const to = "dinhocmenezes@hotmail.com"

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Serviço responsável pelo envio do e-mail (gmail, outlook ou sua hospedagem) - Esse host, possuí um limite de 500 e-mails por dia
    port: 587,
    secure: false,
    auth: {
        // Autentificação de envio
        user: sender,
        pass: pass
    }
});

exports.email = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        let subject = req.body['subject'];
        let name = req.body['name'];
        let from = req.body['from']
        let text = req.body['text'];
        let html = `
        <html>

        <head>
            <style></style>
        </head>

        <body>
            <div>
                    <h5>Enviado por: &nbsp;${from} </h5>
                    <h5>Nome: &nbsp; ${name} </h5>
                    <h5>Mensagem: &nbsp; ${text} </h5>
            </div>
        </body>

        </html>
        `;

        let email = {
            from: sender,
            to: to,
            subject: subject,
            html: html
        };

        transporter.sendMail(email, (error, info) => {
            if (error) {
                res.json(0);
                return;
            }

            res.json(1);
        });
    });
});