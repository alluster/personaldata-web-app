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
const sgTransport = require('nodemailer-sendgrid-transport');
const companiesEmailList = require('./companies.json')


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
		const userEmailOptions = {
			title: `Thank you for using our service ${process.env.SERVICE_DOMAIN}`,
			body: "We have sent GDPR personal data request associated with {email} to organisations listed bellow.  We hope that all listed organisations would send all your personal data to {email} however we cannot guarantee this. The organizations state that collecting and sending all GDPR data associated with your email might take a while so we ask for your patience. In case you won’t receive data from some of the listed organisations we kindly ask you to report this to us so we can make sure data will be received in the future.",
		}
		
		const companyEmailOptions = {
			title: "GDPR personal data request for data associated with email: \u00A0" + `${req.body.email}` + "\u00A0",
			body: "\u00A0" + `${req.body.email}` + "\u00A0  has made an GDPR personal data request to your organisation using our service {process.env.SERVICE_DOMAIN}."
		}
		
		const emailToCompanies =
			`${companyEmailOptions.title}
			${companyEmailOptions.body}
			`
		const emailToUser = `
			${userEmailOptions.title}
			${userEmailOptions.body}
				`


		var mailToUser = {
			to: `${req.body.email}`,
			from: process.env.SENDER_EMAIL,
			bcc: `${req.body.email}`,
			subject: `${userEmailOptions.title}`,
			text: `${userEmailOptions.ingress}`,
			replyTo: process.env.SENDER_EMAIL,
			html: `${emailToUser}`
		};
	

		transporter.sendMail(mailToUser, function (error, info) {
			if (error) {
				console.log(error);
			} else {
			}
		});
		companiesEmailList.forEach(function (address) {
			transporter.sendMail({
				to: address.email,
				from: process.env.SENDER_EMAIL,
				bcc: `${companiesEmailList}`,
				subject: `${companyEmailOptions.title}`,
				text: `${companyEmailOptions.ingress}`,
				replyTo: process.env.SENDER_EMAIL,
				html: `${emailToCompanies}`
			}, function (error, info) {
				if (error) {
					console.log(error);
				} else {
					console.log(info)
				}
			});
		});
	});


	server.get('*', (req, res) => {
		return handle(req, res);
	});
	server.get("/user/:slug", (req, res) => {
		return app.render(req, res, "/", { slug: req.params.slug })
	})
	server.listen(PORT, err => {
		if (err) throw err;
		console.log('> Ready on http://localhost:' + PORT);
	});
});
