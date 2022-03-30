import React, { useContext } from 'react';
import Layout from '../layouts/layout';
import EmailForm from '../components/EmailForm';
import Hero from '../components/Hero';
import { AppContext } from '../context/Context';
const Home = () => {
	const context = useContext(AppContext)
	const pageTitle = "Kaikki henkilökohtainen data yhdellä klikkauksella sadoilta yrityksiltä."
	const pageIngress = "Lähetämme sähköpostiosoitteesi yritysrekisterimme. Tämän jälkeen yritykset lähettävät sähköpostiisi liitetyt tiedot suoraan sinulle."
	return (
		<Layout title="Home" >

			<Hero title={pageTitle} ingress={pageIngress} />
			{context.submit ? null : <EmailForm />}

		</Layout>

	)
}

export default Home
