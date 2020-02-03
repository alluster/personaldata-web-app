import Client from 'shopify-buy';

const client = Client.buildClient({    
    domain: process.env.SHOPIFY_DOMAIN,
	storefrontAccessToken: "511cd147a817e9508e57354ce3157aa2" 
});

export default client;