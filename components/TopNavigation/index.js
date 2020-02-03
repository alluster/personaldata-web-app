import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Gx from '@tgrx/gx';
import { ProductContext } from '../../context/Context';
import Container from '../Container';

const LOGO_IMG = '/logo.png';

const LinkText = styled.h3`
    font-weight: 400;
    font-size: 12px;
    color: white;
    :hover {
        cursor: pointer;
    }
`;

const NavWrapper = styled.div `
    background-color: ${props => props.theme.colors.persBlue}

`

const NavContainer = styled(Container)`
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
    const state = useContext(ProductContext)
    return(
        <NavWrapper className={className}>
            <NavContainer>
                <Gx col={2}>
                    <Logo src={LOGO_IMG} />
                </Gx>
                <Gx col={8}>

                </Gx>
                <Gx col={1}>
                    <Link href="/product">
                        <a>
                        <LinkText>Login</LinkText> 
                        </a>
                    </Link>
                </Gx>
                <Gx col={1}>
                    <Link href="/product">
                        <a>
                        <LinkText>Account</LinkText> 
                        </a>
                    </Link>
                </Gx>
            
            </NavContainer>

        </NavWrapper>
        
    );
};


export default TopNavigation;