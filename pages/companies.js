import React from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import Hero from '../components/Hero';


const Companies = () => {
	
    const pageTitle = "Personladata.fi yritysten rajapintana asiakkaiden datan visualisoinnissa";
    const pageIngress = "Onko yrityksesi valmistautunut yksityishenkilöiden tekemiä henkilökohtaiseen dataan liittyviä vaatimuksia varten? ";


	return(
			<Layout title="About" >
				<Container>
                    <Hero title={pageTitle} ingress={pageIngress} />
                    <h3>Liitä yrityksesi Personaldata yritysrekisteriin</h3>
                    <p>Mikäli yrityksellänne on tietopyyntöjä varten toimiva sähköpostiosoite, voitte ilmoittaa sen osoitteeseen data@personaldata.fi. Lisäämme yrityksenne yritysrekisteriimme.</p>
				</Container>
			</Layout>
		
	)
}

export default Companies
