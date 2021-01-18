import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useDispatch } from 'react-redux';
import { postComment } from '../redux/comment/commentActions';


enum FormFields {
    name = "name",
    comment = "comment",
}

type Props = {
    dishId: number,
    toggleModal: () => void
}

export default function CommentForm({ dishId, toggleModal }: Props): JSX.Element {

    const dispatch = useDispatch();

    function addCommentFromForm(values: { name: string, comment: string }) {
        dispatch(
            postComment({
                comment: values.comment,
                rating: 3,
                author: values.name,
                dishId: dishId
            })
        )
    }

    return (
        <Formik
            initialValues={ {
                name: '',
                comment: ''
            } }
            validateOnChange
            onSubmit={ (values, formikBag) => {
                toggleModal();
                addCommentFromForm(values);
            } }
            validationSchema={
                Yup.object({
                    name: Yup.string().min(6).required(),
                    comment: Yup.string().min(6).required()
                })
            }
        >

            <div className="flex h-screen bg-gray-200">
                <div className="m-auto w-1/3 text-black flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
                    <Form className="m-5 w-10/12" >
                        <h1 className="w-full text-4xl tracking-widest text-center">Comment</h1>
                        <div className="w-full my-6">
                            <Field
                                type="text"
                                className="p-2 rounded shadow w-full text-black"
                                placeholder="Username"
                                name={ FormFields.name }
                            />
                            <ErrorMessage name={ FormFields.name } />
                        </div>
                        <div className="w-full my-6">
                            <Field
                                type="text"
                                className="p-2 rounded shadow w-full text-black"
                                placeholder="Comment"
                                name={ FormFields.comment }
                            />
                            <ErrorMessage name={ FormFields.comment } />

                        </div>
                        <button
                            type="submit"
                            className="p-2 w-full rounded shadow text-black bg-gradient-to-tr from-yellow-600 to-yellow-400"
                        >
                            Submit
                        </button>
                    </Form>
                </div>
            </div>
        </Formik>
    )

}
