import React, { useContext } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { AppContext } from '../../context/Context';
import PropTypes from 'prop-types';

const Title = styled.h1`
    text-align: center;
    color: white;
    font-weight: 400;
    font-size:  ${props => props.theme.fontSize.h3}
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        font-size: 24px;


     }
`;

const Ingress = styled.p `
    font-size:  ${props => props.theme.fontSize.h5};
    color: white;
    font-weight: 400;
    text-align: center;
    margin-top: 50px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        font-size: 14px;
        margin-top: 20px;

     }
`;

const HeroStyled = styled.div`
    background-color: ${props => props.theme.colors.persBlue};
    min-height: 200px;
    margin-bottom: 100px;
    padding-top: 100px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        padding-top: 20px;

     }
`;
const SubmitButton = styled.button`
    background-color: ${props => props.theme.colors.persOrange};
    border: none;
    border-radius: 6px;
    color: white;
    font-size: 20px;
    min-height: 40px;
    line-height: 40px;
    text-align: center;
    min-width: 100%;
    margin: 0px 10px 0px 10px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        margin: 20px 0px 0px 0px;

     }

`;

const Link = styled.a`
     font-weight: 700 !important;
     text-decoration: underline !important;
     :hover {
         cursor: pointer;
     }
`;

const Info = styled.p`

    color: #4B4B4B;
    font-size: 12px;
    
`;
const Hero = ({title, ingress}) => {
    const context = useContext(AppContext)
    return(
        <HeroStyled>
            <Container>
                <Title>
                    { context.submit ? 
                    <div>
                        <h1>Kiitos</h1>
                    </div>:
                    title}
                </Title>
                <Ingress>
                    {
                        context.submit ?
                        <div>
                        <p>Tarkkaile sähköpostiasi. Lähetimme sähköpostiisi {context.email} varmistuksen.</p>
                        <span>Anna tukesi projektille. <Link href="https://shop.spreadshirt.fi/personaldatafi/">Osta huppari verkkokaupasta</Link></span>
                        <Info>Anna palautetta data@personaldata.fi</Info>
                        <SubmitButton onClick={() => context.setSubmit(!context.submit)} >Tee uusi haku</SubmitButton>
                        </div>
                            :
                            ingress
                            

                    }
                </Ingress>

            </Container>
        </HeroStyled>
        
    );
};

Hero.propTypes = {
    title: PropTypes.string,
    ingress: PropTypes.string

 };

export default Hero;