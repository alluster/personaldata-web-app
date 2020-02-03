import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Link from 'next/link';
import Gx from '@tgrx/gx';


const LinkText = styled.h3`
    font-weight: 500;
    text-align: center;
    color: white;
`;

const NavContainer = styled(Container)`
    text-align: center;
    margin-bottom: 30px;

`
const NavWrapper = styled.div `
    background-color: ${props => props.theme.colors.persBlue}

`

const Navigation = () => {
    return(
        <NavWrapper>
            <NavContainer>
                <Gx col={3}>
                    <Link href="/product">
                        <a>
                        <LinkText>Collection</LinkText> 
                        </a>
                    </Link>
                </Gx>
                <Gx col={3}>
                    <Link href="/">
                        <a>
                        <LinkText>Custom</LinkText> 
                        </a>
                    </Link>
                </Gx>
                <Gx col={3}>
                    <Link href="/">
                        <a>
                            <LinkText>About</LinkText> 
                        </a>
                    </Link>
                </Gx>
                <Gx col={3}>
                    <Link href="/">
                        <a>
                            <LinkText>Studio</LinkText> 
                        </a>
                    </Link>
                </Gx>
            </NavContainer>

        </NavWrapper>
           

    );
};


export default Navigation;