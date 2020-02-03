import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Gx from '@tgrx/gx';
import { ProductContext } from '../../context/Context';
import Container from '../Container';

const LOGO_IMG = '/logo.png';



const NavWrapper = styled.div `
    width: 100%;
    margin-top: 20px;

`

const NavContainer = styled(Container)`
    margin-top: 20px;

`;

const Logo = styled.img `
    object-fit: cover;
    padding: 10px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        width: 100px;
     }
    
`;
const BurgerContainer = styled.div`
    display: flex;
   justify-content: flex-end;

`

const StyledBurger = styled.button`
    top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    
    &:focus {
        outline: none;
    }
    
    div {
        width: 2rem;
        height: 0.25rem;
        background: ${props => props.theme.colors.persOrange};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }
`;


const BurgerMenu = ({ className }) => {
    const state = useContext(ProductContext)
    return(
        <NavWrapper className={className}>
            <NavContainer >
            <Gx col={4} breakpoint={300} >
                    <Logo src={LOGO_IMG} />
                </Gx>
                <Gx col={8} breakpoint={300} >
                    <BurgerContainer>
                        <StyledBurger>
                            <div/>
                            <div/>
                            <div/>
                        </StyledBurger>
                    </BurgerContainer>
                </Gx>
            </NavContainer>
        </NavWrapper>
        
    );
};


export default BurgerMenu;