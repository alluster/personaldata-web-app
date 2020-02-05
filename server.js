require('dotenv').config()
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const routes = require('./routes');
const handle = routes.getRequestHandler(app);
const PORT = process.env.PORT || 3000;
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser')
var router = require('express').Router();


var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.urlencoded({
      extended: true
    }));
   
    server.post('/sendemail', (req, res) => {
     console.log(req)
        var transporter = nodemailer.createTransport({
          host: `${process.env.EMAIL_HOST}`,
          auth: {
            user: `${process.env.EMAIL}`,
            pass: `${process.env.PASSWORD}`
          }
        });
        
        var mailOptions = {
          from: 'data@personaldata.fi',
          to: 'm',
          subject: 'Kiitos testauksesta',
          text: 'Kiitos kun testasit Personaldata.fi -palvelua. Palvelumme on vielä testausvaiheessa mutta sen valmistuttua ilmoitamme sinulle sähköpostilla. Kiitos!'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            // console.log('Email sent: ' + info.response);
          }
        });
      
    
    })
   
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:' + PORT);
    });
});