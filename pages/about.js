import React from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import Hero from '../components/Hero';



const About = () => {
	
    const pageTitle = "Yksilöllä on oikeus tietää mitä dataa hänestä on kerätty.";
    const pageIngress = "Tämän takia olemme rakentaneet personaldata.fi palvelun. Palvelun käyttö ei vaadi muuta kuin sen että sinulla on toimiva sähköpostiosoite.";

	return(
			<Layout title="About" >
				<Container>
                    <Hero title={pageTitle} ingress={pageIngress} />
				</Container>
			</Layout>
		
	)
}

export default About
