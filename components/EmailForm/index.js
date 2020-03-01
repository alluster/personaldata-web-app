import React, { useContext }from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Gx from '@tgrx/gx';
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
    color: #191919;
    min-width: 100%;
    text-align: center;
    background-color: white;
    -webkit-transform: translateZ(0px);
    -webkit-appearance: none;
    -webkit-text-fill-color: #191919;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: gray;
        opacity: 1; /* Firefox */
        -webkit-appearance: none;
        -webkit-text-fill-color: gray;
    }
      
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: gray;
    }
    
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: gray;
    }
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        font-size: 16px;
        text-align: center;
        padding-left: 0;
        padding-right: 0;
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
    margin-top: 20px;
    @media (max-width: 900px) {
        margin: 20px 0px 0px 0px;


     }

`




const EmailForm = () => {
    const context = useContext(AppContext)  
 
    return(
        <Wrapper>
            <FormContainer>

                <Gx col={12} breakpoint={800}>
                        <InputField value={context.inputValue} onChange={(e) => context.setInput(e.target.value)} tyoe="text" placeholder="Syötä sähköpostiosoite" />
                    
                </Gx>
                <Gx col={12} breakpoint={800}>
                    {
                        context.inputValue === "" ?
                        null
                            :
                        <SubmitButton onClick={() => {context.setEmail(context.inputValue), context.EmailToUser()}}>Lähetä</SubmitButton>
    
                    }
                </Gx>

            </FormContainer>

        </Wrapper>
           

    );
};


export default EmailForm;