import React, { useState, useEffect } from 'react';
import { AppContext } from './Context';
import PropTypes from 'prop-types';

const Provider = ({children}) => {

    const [submit, setSubmit] = useState(false)
    const [inputValue, setInput] = useState("");
    const [email, setEmail] = useState("");
	useEffect(() => {
        
        }, []);
        return (
            <AppContext.Provider 
                value={{
                    submit,
                    setSubmit,
                    inputValue,
                    setInput,
                    setEmail,
                    email
                }} 
            >
                {children}
            </AppContext.Provider>
        );
    }
    Provider.propTypes = {
        children: PropTypes.object
     };

export default Provider;