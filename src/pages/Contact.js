
import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {

    const initialValues = { firstName: "", lastName: "", email: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstName) {
            errors.firstName = "First name is required!";
        }
        if (!values.lastName) {
            errors.lastName = "Last name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.message) {
            errors.message = "Password is required!";
        } else if (values.message.length > 255) {
            errors.message = "Message must exceed 255 characters";
        }
        return errors;
    };

    return (
        <>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="submit-message">Submitted!</div>
            ) : (
                <div className='submit-message'>Send us a message!</div>
            )}
            <form onSubmit={handleSubmit}>
                <h2>Contact Us</h2>
                {/* <label for="name">Name:</label> */}
                <input type="text" name="firstName" placeholder='first name' value={formValues.firstName}
                    onChange={handleChange}></input>
                <p>{formErrors.firstName}</p>

                <input type="text" name="lastName" placeholder='last name' value={formValues.lastName}
                    onChange={handleChange}></input>
                <p>{formErrors.lastName}</p>

                {/* <label for="email">Email:</label> */}
                <input type="text" name="email" placeholder='email' value={formValues.email}
                    onChange={handleChange}></input>
                <p>{formErrors.email}</p>

                {/* <label for="message">Message:</label> */}
                <textarea name="message" placeholder='message' rows='6' value={formValues.message}
                    onChange={handleChange}></textarea>
                <p>{formErrors.message}</p>

                <div className="center">
                    <button id="submitBtn" type="submit">SEND</button>
                </div>

            </form>

        </>
    )
};

export default Contact;