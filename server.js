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

const userEmailOptions = {
  title: "Kiitos kun käytit palveluamme!",
  ingress: "Olemme lähettäneet tietosi yritysrekisteriimme. Tarkkaile sähköpostiasi mahdollisten yhteydenottojen varalta.",
  body: "Oletamme yritysten lähettävän sinulle sähköpostiosoitteeseesi liittyvät datat. Emme kuitenkaan voi taata että näin käy joten olethan kärsivällinen. Mikäli yrityksistä ei kuulu, olethan kiltti ja annat meille palautetta niin tarkistamme yrityksen tilanteen. ",
}

const companyEmailOptions = {
  title: "Hei yrityksellenne on tehty tietopyyntö",
  ingress: "Olkaa hyvä ja lähettäkää kaikki tähän email osoitteeseen liittyvä GDPR mukainen data tähän sähköpostiin.",
  body: "Kiitos paljon.",
}

const companiesEmailList = [
	"aleksanteri.heliovaara@helsinki.fi"

]
const emailToCompanies = `
<html>
<head>
<style>
background {
  width: 100%;
  height: 100%;
  padding: 30px;
  }
h1 {
	font-family: Montserrat;
  font-size: 300%;
}
  h3 {
	 font-size: 220%;

  }
p  {
  font-family: Montserrat;
  font-size: 160%;
  margin-bottom: 20px;
}

</style>
</head>
	<body>
	<div style="padding: 30px;width: 100%;height:100%">
	<div>
		<img style="max-width: 200px" src="https://personaldata.herokuapp.com/logo-dark.png"  alt="Personaldata.fi"/>
	</div>
	<div style="max-width: 80%;">
		<h1>${companyEmailOptions.title}</h1>
		<h3>${companyEmailOptions.ingress}</h3>
		<p>${companyEmailOptions.body}</p>
	</div>

	<div>
		<a style=" font-size: 14px; text-decoration: underline" href="/http://personaldata.fi">Palaa sivustolle</></a>
	</div>
	<div>
		<a style=" font-size: 14px; text-decoration: underline" href="/https://shop.spreadshirt.fi/personaldatafi/">Tue projektia ja hanki huppari</a>
	</div>
	<p>
	data@personaldata.fi
	</p>
	</div>
	</body>
</html>`

const emailToUser = `
<html>
<head>
<style>
background {
  width: 100%;
  height: 100%;
  padding: 30px;
  }
h1 {
	font-family: Montserrat;
  font-size: 300%;
}
  h3 {
	 font-size: 220%;

  }
p  {
  font-family: Montserrat;
  font-size: 160%;
  margin-bottom: 20px;
}

</style>
</head>
	<body>
	<div style="padding: 30px;width: 100%;height:100%">
	<div>
		<img style="max-width: 200px" src="https://personaldata.herokuapp.com/logo-dark.png"  alt="Personaldata.fi"/>
	</div>
	<div style="max-width: 80%;">
		<h1>${userEmailOptions.title}</h1>
		<h3>${userEmailOptions.ingress}</h3>
		<p>${userEmailOptions.body}</p>
	</div>

	<div>
		<a style=" font-size: 14px; text-decoration: underline" href="/http://personaldata.fi">Palaa sivustolle</></a>
	</div>
	<div>
		<a style=" font-size: 14px; text-decoration: underline" href="/https://shop.spreadshirt.fi/personaldatafi/">Tue projektia ja hanki huppari</a>
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
				api_key: process.env.ADMIN_EMAIL_API_KEY 
			}
        }));
        
        var mailToUser = {
			from: 'data@personaldata.fi',
			to: `${req.body.email}`,
			subject: `${userEmailOptions.title}`,
			text: `${userEmailOptions.ingress}`,
			replyTo: 'data@personaldata.fi',
			html: `${emailToUser}`
		};
		var mailToCompanies = {
			from: `${req.body.email}`,
			to: `${companiesEmailList}`,
			subject: `${companyEmailOptions.title}`,
			text: `${companyEmailOptions.ingress}`,
			replyTo: `${req.body.email}`,
			html: `${emailToCompanies}`
        };
        
        transporter.sendMail(mailToUser, function(error, info){
          if (error) {
            console.log(error);
          } else {
          	}
		});
		transporter.sendMail(mailToCompanies, function(error, info){
			if (error) {
			  console.log(error);
			} else {
				}
		  });
	});
		
   
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:' + PORT);
    });
});