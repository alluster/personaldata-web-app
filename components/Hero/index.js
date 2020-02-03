import React from 'react';
import styled from 'styled-components';
import Container from '../Container';

const Title = styled.h1`
    text-align: center;
    color: white;
    font-weight: 400;
    font-size:  ${props => props.theme.fontSize.h3}
`;

const Ingress = styled.p `
    font-size:  ${props => props.theme.fontSize.h5};
    color: white;
    font-weight: 400;
    text-align: center;
    margin-top: 50px;
`


const HeroStyled = styled.div`
    background-color: ${props => props.theme.colors.persBlue};
    min-height: 200px;
    padding-top: 100px;
`


const Hero = () => {
    return(
        <HeroStyled>
            <Container>
                <Title>
                    Uusi tapa selvittää henkilökohtainen datajälkesi
                </Title>
                <Ingress>
                    Syötä sähköpostiosoitteesi niin lähetämme sinulle yritysten sinusta tallentamat tiedot.
                </Ingress>

            </Container>
        </HeroStyled>
        
    );
};


export default Hero;