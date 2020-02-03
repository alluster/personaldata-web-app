import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;

`;



const Container = ({children}) => {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    );
};

 Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired
 }

export default Container;