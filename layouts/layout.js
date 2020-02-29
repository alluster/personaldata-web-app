import React from 'react';
import styled from 'styled-components';
import Head from '../components//head';
import { createGlobalStyle } from "styled-components";
import TopNavigation from '../components/TopNavigation';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import theme from "../theme";
import { ThemeProvider } from 'styled-components';
import BurgerMenu from '../components/BurgerMenu';

const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0px;
        padding: 0px;
        max-width: 100%;
        color: white;
        height: 100%;
        font-family: "Montserrat", Arial, sans-serif;
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
    input {
        all: unset;
        ::-webkit-input-placeholder {
        color: red;
    }
    :-moz-placeholder {
        /* FF 4-18 */
        color: red;
        opacity: 1;
    }
    ::-moz-placeholder {
        /* FF 19+ */
        color: red;
        opacity: 1;
    }
    :-ms-input-placeholder {
        /* IE 10+ */
        color: red;
    }
    ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: red;
    }
    ::placeholder {
        /* modern browser */
        color: red;
    }
    }
    
`;

const Background = styled.div `
    background-color: ${props => props.theme.colors.persBlue}


`
const Burger = styled(BurgerMenu)`
    display: none;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        display: inline-block
     }


`
const Nav = styled(TopNavigation)`
    display: inline-block;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        display: none
     }

`


const Layout = ({title, children}) => {
    return(
            <ThemeProvider theme={theme}>
            <Background>
                <Head>
                        <title>{ title }</title>
                        <meta charSet='utf-8' />
                        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                <header>
                    
                    <Nav />
                    <Burger />

                </header>
                <GlobalStyle />
                { children }
                <Footer />

            </Background>
               
            </ThemeProvider>

        );
}
    
Layout.propTypes = {
	children: PropTypes.object,
	title: PropTypes.string
}
    

export default Layout;