const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const routes = require('./routes');
const handle = routes.getRequestHandler(app);
const PORT = process.env.PORT || 3000;
var nodemailer = require('nodemailer');

app.prepare().then(() => {
    const server = express();

   
    var transporter = nodemailer.createTransport({
        host: 'whm32.louhi.net',
        auth: {
          user: 'data@personaldata.fi',
          pass: ''
        }
      });
      
      var mailOptions = {
        from: '',
        to: '',
        subject: 'Sending Email using Node.js',
        text: 'Yllättävän helposti voi lähettää mailia kenen tahansa nimellä näköjää :D t allu'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
   
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:' + PORT);
    });
});