import React, { useState, useEffect } from 'react';
import './Contact.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';


const Contact = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("first name is required"),
        lastName: Yup.string().required("last name is required"),
        email: Yup.string().email().required("enter a valid email"),
        message: Yup.string().max(255).required("message must not exceed 255 characters"),
    });

    // submitting info to mysql
    const onSubmit = (data) => {
        axios.post("https://e-com-version2.herokuapp.com//create", data).then((response) => {
            console.log("Success");
            setIsSubmit(true);
        })
            .catch((error) => {
                console.log(error.message);
            })
    };

    useEffect(() => {
        if (isSubmit) {
            console.log('true');
        }
    }, []);


    return (
        <>
            <section className='contact'>
                <div className='container'>
                    <div className='contact-form'>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}>
                            <Form className="formContainer">
                                <h1 className='contact-caption'>Get in touch!</h1>
                                <label>First Name: </label>
                                <Field className='input'
                                    name="firstName"
                                />
                                <ErrorMessage className='error' name="firstName" component="span" />
                                <label>Last Name: </label>
                                <Field className='input'
                                    name="lastName"
                                />
                                <ErrorMessage className='error' name="lastName" component="span" />
                                <label>Email: </label>
                                <Field className='input'
                                    name="email"
                                />
                                <ErrorMessage className='error' name="email" component="span" />
                                <label>Message: </label>
                                <Field as='textarea' className='input' id='text-area'
                                    name="message"
                                />
                                <ErrorMessage className='error' name="message" component="span" />

                                <button type="submit" onClick={onSubmit}>Send</button>

                                {isSubmit ? (
                                    <div className="submit-message">Message sent!</div>
                                ) : (
                                    <div className='submit-message'></div>
                                )}
                            </Form>
                        </Formik>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Contact;