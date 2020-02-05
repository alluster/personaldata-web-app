import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Gx from '@tgrx/gx';

const FooterContent = styled.div`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.persBlue};
    bottom: -600px;
    width: 100%;
    height: 600px;
    margin-top: 100px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
    
    }
`;

const Column = styled.div `
    display: flex;
    flex-direction: column;

`;
const ColumnLowLeft = styled.div`
    display: flex;
    align-items: flex-end;
    // flex-direction: column;
    height: 300px;
    color: #4B4B4B;
    font-size: 12px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        height: 100px;
 
     }
`;
const ColumnLowRight= styled.div`
    display: flex;
    align-items: flex-end;
    // flex-direction: column;
    height: 300px;
    justify-content: flex-end;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        height: 100px;
 
     }

`;

const ColumnHigh = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 200px;
    font-size: 12px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        height: 100px;
 
     }
`;

const Logo = styled.img`
    width: 150px;
    
`;

const Link = styled.a`
     font-weight: 700 !important;
     text-decoration: underline !important;
     :hover {
         cursor: pointer;
     }
`;



const disclaimer = "Personaldata.fi palvelu on luotu työkaluksi henkilökohtaisen sähköpostiosoitteen persuteella tallennetun informaation etsimiseen yritysten tietokannoista. Personaldata.fi ei ota vastuuta tiedoista, jotka käyttäjä vastaanottaa palvelun käytön tuloksena."
const Footer = () => {
    return(
        <FooterContent>
            <Container>
                <Gx col={6}>
                    <Column>
                        <ColumnHigh>
                            <Logo src="/logo.png" />
                            <h4>data@personaldata.fi</h4>
                            <span>Anna tukesi projektille. <Link href="https://shop.spreadshirt.fi/personaldatafi/">Osta huppari verkkokaupasta</Link></span>
                        </ColumnHigh>
                        <ColumnLowLeft>
                        {disclaimer}

                        </ColumnLowLeft>
                    </Column>
                </Gx>
                <Gx col={6} style={{ alignItems: "flex-end" }}>
                <Column>
                        <ColumnHigh>
                        </ColumnHigh>
                        <ColumnLowRight >
                            © 2020 Personaldata.fi
                        </ColumnLowRight>
                    </Column>
                </Gx>
            </Container>
        </FooterContent>
    );
};


export default Footer;