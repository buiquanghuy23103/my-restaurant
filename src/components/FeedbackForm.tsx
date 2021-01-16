import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react';
import { Button, Col, FormGroup, Label } from 'reactstrap';
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
        agree: "agree",
        contactType: "contactType",
        message: "message"
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
                    <Form className="row">
                        <FormGroup row>
                            <Label md={ 2 }>Firstname</Label>
                            <Col md={ 10 }>
                                <Field name={ FORM_FIELDS.firstname } type="text" />
                                <ErrorMessage name={ FORM_FIELDS.firstname } />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={ 2 }>Lastname</Label>
                            <Col md={ 10 }>
                                <Field name={ FORM_FIELDS.lastname } type="text" />
                                <ErrorMessage name={ FORM_FIELDS.lastname } />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={ 2 }>Email</Label>
                            <Col md={ 10 }>
                                <Field name={ FORM_FIELDS.email } type="text" />
                                <ErrorMessage name={ FORM_FIELDS.email } />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={ 2 }>Agree</Label>
                            <Col md={ 10 }>
                                <Field name={ FORM_FIELDS.agree } type="checkbox" />
                                <ErrorMessage name={ FORM_FIELDS.email } />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={ 2 }>Feedback</Label>
                            <Col md={ 10 }>
                                <Field name={ FORM_FIELDS.message } type="text" />
                                <ErrorMessage name={ FORM_FIELDS.email } />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={ { size: 10, offset: 2 } }>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>

                </Formik>
            </div>
        </div>
    )
}
