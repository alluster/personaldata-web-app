import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Gx from '@tgrx/gx';
import Container from '../Container';
import PropTypes from 'prop-types';
import { Links } from '../links';
const LOGO_IMG = '/logo.png';

const LinkText = styled.h3`
    font-weight: 400;
    font-size: 12px;
    color: white;
    :hover {
        cursor: pointer;
    }
`;


const NavContainer = styled.div`
    text-align: center;
    padding-top: 20px;
`;

const Logo = styled.img `
    width: 100%;
    object-fit: cover;
    padding: 10px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        width: 100px;
     }
    
`


const TopNavigation = ({ className }) => {
    return(
        <Container >
            <NavContainer className={className} >

                <Gx col={2}>
                    <Link href="/">
                        <a>
                        <Logo src={LOGO_IMG} />
                        </a>
                    </Link>                
                </Gx>
                <Gx col={6}>

                </Gx>
            { Links.map((item, i) => {
                return (
                    <Gx key={i} col={1}>
                        <Link href={item.link}>
                            <a>
                            <LinkText>{item.name}</LinkText> 
                            </a>
                        </Link>
                    </Gx>
                )
            })}
            </NavContainer>        
        </Container>
            
    );
};
TopNavigation.propTypes = {
    className: PropTypes.object
 };

export default TopNavigation;