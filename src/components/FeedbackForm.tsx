import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react';
import * as Yup from 'yup';


type MyForm = {
    firstname: string,
    lastname: string,
    telnum: string,
    email: string,
    agree: boolean,
    contactType: string,
    message: string,
}

export default function FeedbackForm() {

    const FORM_FIELDS = {
        firstname: "firstname",
        lastname: "lastname",
        email: "email",

    }

    const initFormValues: MyForm = {
        firstname: "",
        lastname: "",
        telnum: "",
        email: "",
        agree: false,
        contactType: "",
        message: "",
    }

    const validationSchema = Yup.object({
        firstname: Yup.string().required(),
        lastname: Yup.string().required(),
        email: Yup.string().email().required(),
        telnum: Yup.string(),

    });


    return (
        <div className="row row-content">
            <div className="col-12">
                <h3>Send us your Feedback</h3>
            </div>
            <div className="col-12 col-md-9">
                <Formik
                    validateOnChange
                    initialValues={ initFormValues }
                    onSubmit={ (values, formikBag) => {
                        console.log(values);

                    } }
                    validationSchema={ validationSchema }
                >
                    <Form>
                        <label>Firstname</label>
                        <Field name={ FORM_FIELDS.firstname } type="text" />
                        <ErrorMessage name={ FORM_FIELDS.firstname } />

                        <label>Lastname</label>
                        <Field name={ FORM_FIELDS.lastname } type="text" />
                        <ErrorMessage name={ FORM_FIELDS.lastname } />

                        <label>Email</label>
                        <Field name={ FORM_FIELDS.email } type="text" />
                        <ErrorMessage name={ FORM_FIELDS.email } />

                        <button type="submit">Submit</button>
                    </Form>

                </Formik>
            </div>
        </div>
    )
}
