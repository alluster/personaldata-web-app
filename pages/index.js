import React, { useContext } from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import EmailForm from '../components/EmailForm';
import Hero from '../components/Hero';
import { AppContext } from '../context/Context';
const Home = () => {
    const context = useContext(AppContext)
	const pageTitle = "Uusi tapa selvittää henkilökohtainen datajälkesi"
    const pageIngress = "Lähetämme sähköpostiosoitteesi yritysrekisterimme. Tämän jälkeen yritykset lähettävät sähköpostiisi liitetyt tiedot suoraan sinulle."
	return(
			<Layout title="Home" >
				<Container>
                    <Hero title={pageTitle} ingress={pageIngress}/>
                    { context.submit ? null :  <EmailForm />}
				</Container>
			</Layout>
		
	)
}

export default Home
