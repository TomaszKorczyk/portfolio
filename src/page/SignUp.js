import React from "react";
import { ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

export default function SignUp() {
    const history = useHistory();
    return(
        <Formik
            initialValues= {{email: "", password:""}}
            onSubmit= {(value, formikBag) => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(value.email, value.password)
                    .then((res) => {
                        history.replace("/");    
                    })
                    .catch((e) => {
                        formikBag.setFieldError("email", e.message); 
                    });
            }}
            validationSchema= {Yup.object({
                email: Yup.string()
                    .required("Email is required")
                    .email(),
                password: Yup.string()
                    .required("Password is required")
                    .min(6),
            })}
        >
            <div className="flex h-screen text-white text-2xl font-bold bg-gray-700">
                <div className="bg-gradient-to-br from-yellow-900 to-yellow-700 m-auto w-3/5 text-white flex flex-wrap justify-center shadow-lg rounded-lg">
                    <Form className="m-5 w-10/12">
                        <h1 className="w-full text-4xl tracking-widest text-center my-6">
                            Sign Up Here
                        </h1>
                        <div className="w-full my-6">
                            <Field 
                                name="email"
                                type="email"
                                className="p-2 rounded shadow w-full text-black"
                                placeholder="Email or User" 
                            />
                            <ErrorMessage name="email" />
                        </div>
                        <div className="w-full my-6">
                            <Field 
                                name="password" 
                                type="password"
                                autoComplete="on"
                                className="p-2 rounded shadow w-full text-black"
                                placeholder="Password"
                            />
                            <ErrorMessage name="password" />
                        </div>
                        <div className="w-full my-5">
                            <button 
                                type="submit"
                                className="p-2 rounded shadow w-full bg-gradient-to-br from-purple-800 to-purple-400 text-black font-bold"
                            >
                                Sign Up
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </Formik>
    );
}