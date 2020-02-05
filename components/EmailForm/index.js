import React, { useState, useContext }from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Gx from '@tgrx/gx';
import axios from 'axios';
import BarLoader from "react-spinners/BarLoader";
import { AppContext } from  '../../context/Context'


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
    margin-top: 0px;
    @media (max-width: 900px) {
        margin: 20px 0px 0px 0px;


     }

`


const SubmitButtonDeActive = styled.button`
    background-color: ${props => props.theme.colors.persOrangeDark};
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

const EmailForm = () => {
    const context = useContext(AppContext)
    const [loading, setLoading] = useState(false)

    const handleSubmit = () => {
        context.setSubmit(true)
        context.setEmail(context.inputValue)

        setTimeout(!loading, function(){ setLoading(!loading); }, 3000);
        axios.post('/sendemail',
            {
                body: {
                    "email": "jell"
                },
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            },  
            context.setInput("")
        )
         
        

          .then(function () {
            // setLoading(!loading)
          })
    }
 
    return(
        <Wrapper>
            <FormContainer>
                <Gx col={8} breakpoint={800}>
                    <InputContainer>
                        <InputField value={context.inputValue} onChange={(e) => context.setInput(e.target.value)} placeholder="Anna sähköpostiosoite" />
                    </InputContainer>
                </Gx>
                <Gx col={4} breakpoint={800}>
                {
                            context.inputValue === "" ?
                            <SubmitButtonDeActive >Täytä hakukenttä</SubmitButtonDeActive>
                                :
                            <SubmitButton onClick={() => handleSubmit(context.inputValue)}>Lähetä</SubmitButton>
   
                        }
                </Gx>
                <BarLoader
                    size={150}
                    //size={"150px"} this also works
                    color={"white"}
                    loading={loading}
                    />
            </FormContainer>

        </Wrapper>
           

    );
};


export default EmailForm;