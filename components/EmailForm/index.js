import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Gx from '@tgrx/gx';




const FormContainer = styled(Container)`
    margin-bottom: 30px;

`
const Wrapper = styled.div `
    background-color: ${props => props.theme.colors.persBlue}

`
const InputField = styled.input`
    height: 40px;
    font-size: 20px;
    color: gray;
    min-width: 100%;
    padding-left: 15px;
    padding-right: -15px;
    background-color: white;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        font-size: 16px;
        text-align: center;
        padding-left: 0;
        padding-right: 0;
     }

`

const InputContainer = styled(Container)`
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        margin: 0px 0px 0px 0px !important;
    }

`

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

`

const EmailForm = () => {
    return(
        <Wrapper>
            <FormContainer>
                <Gx col={8} breakpoint={800}>
                    <InputContainer>
                        <InputField  placeholder="Submit your email here" />
                    </InputContainer>
                </Gx>
                <Gx col={4} breakpoint={800}>
                    <SubmitButton>Submit</SubmitButton>
                </Gx>
               
            </FormContainer>

        </Wrapper>
           

    );
};


export default EmailForm;