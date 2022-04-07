import React from 'react';
import { Formik } from 'formik';
const Form = () => {
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
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