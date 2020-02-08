import React, { useContext } from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import EmailForm from '../components/EmailForm';
import Hero from '../components/Hero';
import { createGlobalStyle } from "styled-components";
import { AppContext } from '../context/Context';

const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0px;
        padding: 0px;
        max-width: 100%;
        height: 100%;
        font-family: "Montserrat", Arial, sans-serif;
        font-weight: 400;
    }
    h1 {
        margin: 0
    }
    img {
        max-width: 100%;
    }
    a {
        all: unset;
    }
    a:link {
        all: unset;
    }
    a:focus {
        all: unset;
    }
    a:active {
        all: unset;
    }
    a:visited {
        all: unset;
    }
    a:hover {
        all: unset;
    }
    button {
        all: unset;
    }
`;


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
				<GlobalStyle />
			</Layout>
		
	)
}

export default Home
