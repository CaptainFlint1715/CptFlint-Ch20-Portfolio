import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers'

function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [nameOf, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setError] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
            if (!validateEmail(inputValue)) {
                setError('Email is invalid');
                return;
            } else {
                setError('')
            }
        } else if (inputType === 'message') {
            setMessage(inputValue);
        } else if (inputType === 'nameof') {
            setName(inputValue)
        }
    };
    // handles when mouse leaves field that is selected
    const handleBlur = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputValue === '' && inputType === 'email') {
            setError('Email is required');
        } else if (inputValue === '' && inputType === 'nameof') {
            setError('Name is required');
        } else if (inputValue === '' && inputType === 'message') {
            setError('Message is required');
        } else {
            setError('');
        }
    }

    const isFormValid = !errorMessage

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        if (isFormValid) {
            setMessage('');
            setName('');
            setEmail('');
        } else {
            setError('Please fill in all required fields and correct any errors.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="form bg-gold shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="email"
                        placeholder="email"
                        className="text-black"
                    />
                </div>
                <div className="mb-4">
                    <input
                        value={nameOf}
                        name="nameof"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="name"
                        className="text-black"
                    />
                </div>
                <div className="mb-4">
                    <input
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="message"
                        className="text-black"
                    />
                </div>
                <button className="text-black mb-6" type="button" onClick={handleFormSubmit} disabled={!isFormValid}>Submit</button>
                {errorMessage && (
                <div>
                    <p className="error-text text-black">{errorMessage}</p>
                </div>
            )}
            </form>
            
        </div>
    );
}

export default Contact;