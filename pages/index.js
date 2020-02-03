import React from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import { createGlobalStyle } from "styled-components";

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
	

	return(
			<Layout title="Home" >
				<Container>
						
				</Container>
				<GlobalStyle />
			</Layout>
		
	)
}

export default Home
