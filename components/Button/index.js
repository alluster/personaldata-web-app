import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button `
    width: 200px;
    height: 40px;
    border: 3px solid black;
    padding: 5px;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;


`

const Button = (props) => {
    return(
        <StyledButton>{props.text}</StyledButton>
    );
};

Button.propTypes = {
    text: PropTypes.string
 };

export default Button;