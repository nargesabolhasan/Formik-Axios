import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import axios from "axios";

const Form = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        name: ''
    });
    console.log(data)
    debugger
    
    useEffect(() => {
        axios.get('http://localhost:3001/profile').then(res => {
            setData(res.data)
        }).catch(err => alert(err.response.statusText))
    }, [])

    return (
        <div>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    email: data.email,
                    password: data.password,
                    name: data.name
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (values.password.length < 6) {
                        errors.password = 'password have to be at least 6 characters';
                    }
                    if (values.name.length < 6) {
                        errors.name = 'name have to be at least 6 characters';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form
                        className="form"
                        onSubmit={handleSubmit}>
                        <h1>Profile:</h1>
                        <div className="field">
                            <input
                                placeholder=' '
                                className="form-iput"
                                id="email-input"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}

                            />
                            <label htmlFor="email-input" >Email</label>
                        </div>
                        <p className="error">
                            {errors.email && touched.email && errors.email}
                        </p>
                        <div className="field">
                            <input
                                placeholder=' '
                                className="form-iput"
                                id="pass-input"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <label htmlFor="pass-input" >Password</label>
                        </div>
                        <p className="error">
                            {errors.password && touched.password && errors.password}
                        </p>
                        <div className="field">
                            <input
                                placeholder=' '
                                className="form-iput"
                                id="name-input"
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <label htmlFor="name-input" >name</label>
                        </div>
                        <p className="error">
                            {errors.password && touched.password && errors.name}
                        </p>


                        <button
                            className="form-button"
                            type="submit"
                            disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>

        </div>
    )
}

export default Form