const routes = module.exports = require('next-routes')();

routes
    .add('index', '/')
    .add('about', '/about')
    .add('contact', '/contact')
    .add('product', '/product/:slug')
    .add('sendemail', '/sendemail');
