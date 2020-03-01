import React, { useState, useEffect } from 'react';
import { AppContext } from './Context';
import PropTypes from 'prop-types';
import axios from 'axios';

const Provider = ({children}) => {

    const [submit, setSubmit] = useState(false)
    const [inputValue, setInput] = useState("");
    const [email, setEmail] = useState("");

    const EmailToUser = () => {
        axios.post('/sendEmail',
    {
        email: inputValue
    },  
    setSubmit(true),
    setInput("")
)       }


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
                    email,
                    EmailToUser
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