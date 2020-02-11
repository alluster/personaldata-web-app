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
sgTransport = require('nodemailer-sendgrid-transport');

const emailOptions = {
  title: "Kiitos kun käytit palveluamme!",
  ingress: "Olemme lähettäneet tietosi yritysrekisteriimme. Tarkkaile sähköpostiasi mahdollisten yhteydenottojen varalta.",
  body: "Oletamme yritysten lähettävän sinulle sähköpostiosoitteeseesi liittyvät datat. Emme kuitenkaan voi taata että näin käy joten olethan kärsivällinen. Mikäli yrityksistä ei kuulu, olethan kiltti ja annat meille palautetta niin tarkistamme yrityksen tilanteen. ",
}
const email = `<html>
<head>
<style>
background {
  width: 100%;
  height: 100%;
  background-color: #090D2A;
  padding: 30px;
  }
h1 {
	color: #FFFFFF;
	font-family: Montserrat;
  font-size: 300%;
}
  h3 {
	 color: white
	 font-size: 220%;

  }
p  {
  color: #FFFFFF;
  font-family: Montserrat;
  font-size: 160%;
  margin-bottom: 20px;
}

</style>
</head>
	<body>
	<div style="background-color: #090D2A;padding: 30px;width: 100%;height:100%">
	<div>
		<img style="max-width: 200px" src="https://personaldata.herokuapp.com/logo.png"  alt="Personaldata.fi"/>
	</div>
	<div style="max-width: 80%;">
		<h1>${emailOptions.title}</h1>
		<h3>${emailOptions.ingress}</h3>
		<p>${emailOptions.body}</p>
	</div>

	<div>
		<a style="color: #FFFFFF; font-size: 14px; text-decoration: underline" href="/http://personaldata.fi">Palaa sivustolle</></a>
	</div>
	<div>
		<a style="color: #FFFFFF; font-size: 14px; text-decoration: underline" href="/https://shop.spreadshirt.fi/personaldatafi/">Tue projektia ja hanki huppari</a>
	</div>
	<p>
	data@personaldata.fi
	</p>
	</div>
	</body>
</html>`


app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.json())

    server.use(bodyParser.urlencoded({
      extended: true
    }));
   
    server.post('/sendEmail', (req, res) => {
        var transporter = nodemailer.createTransport(sgTransport({
			auth: {
				api_key: process.env.ADMIN_EMAIL_API_KEY // your api key here, better hide it in env vars
			}
        //   host: `${process.env.EMAIL_HOST}`,
        //   auth: {
        //     user: `${process.env.EMAIL}`,
        //     pass: `${process.env.PASSWORD}`
        //   }
        }));
        
        var mailOptions = {
          from: 'data@personaldata.fi',
          to: `${req.body.email}`,
          subject: `${emailOptions.title}`,
		  text: `${emailOptions.ingress}`,
		  replyTo: 'data@personaldata.fi',

          html: `${email}`
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