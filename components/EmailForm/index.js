import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context/Context'


const FormContainer = styled.div`
    margin-bottom: 30px;
	width: 100%;
	
`;
const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 20px;
`;
const InputField = styled.input`
	padding-left: 60px;
	padding-right: 60px;
    height: 56px;
    font-size: 18px;
    color: #000;
    max-width: calc(100% - 120px);
    text-align: center;
    background-color: white;
	border: 1px solid gray;
	border-radius: 8px;
    -webkit-transform: translateZ(0px);
    -webkit-appearance: none;
    -webkit-text-fill-color: #000;
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
	padding-left: 30px;
	padding-right: 30px;
    margin-top: 20px;
    @media (max-width: 900px) {
        margin: 20px 0px 0px 0px;


     }

`;




const EmailForm = () => {
	const context = useContext(AppContext)

	return (
		<FormContainer>
			<InputContainer>
				<InputField value={context.inputValue} onChange={(e) => context.setInput(e.target.value)} type="text" placeholder="Syötä sähköpostiosoite" />
			</InputContainer>

			<ButtonContainer>
				{
					context.inputValue === "" ?
						null
						:
						<SubmitButton onClick={() => { context.setEmail(context.inputValue), context.EmailToUser(), context.setEmail('') }}>Lähetä</SubmitButton>
				}

			</ButtonContainer>


		</FormContainer>



	);
};


export default EmailForm;