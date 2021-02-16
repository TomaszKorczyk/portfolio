import React from "react";
import { useFormik } from "formik";

export default function SignUp() {
    const formik = useFormik({
        initialValues: {email: "", password:""},
        onSubmit: (value) => {
            console.log("Formik", value);
        },
        validate: (values) => {
            const errors = {};
            if(!values.email){
                errors.email = "Email Field is Required.";
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                errors.email = "Email is invalid";
            }
            
            if(!values.password){
                errors.password = "Password Field is Required.";
            } else if(values.password.length <= 6){
                errors.password = "Password must be longer than 6";
            }
            
            return errors;
        }
    });

    return(
        <div className="flex h-screen text-white text-2xl font-bold bg-gray-700">
            <div className="bg-gradient-to-br from-yellow-900 to-yellow-700 m-auto w-3/5 text-white flex flex-wrap justify-center shadow-lg rounded-lg">
                <form 
                    className="m-5 w-10/12"
                    onSubmit={formik.handleSubmit}
                >
                    <h1 className="w-full text-4xl tracking-widest text-center my-6">
                        Sign Up Here
                    </h1>
                    <div className="w-full my-6">
                        <input 
                            type="email"
                            className="p-2 rounded shadow w-full text-black"
                            placeholder="Email or User"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? 
                            (
                                <p className="text-yellow-400 my-2 text-center">{formik.errors.email}</p>
                            ) : null
                        }
                    </div>
                    <div className="w-full my-6">
                        <input 
                            type="password"
                            autoComplete="on"
                            className="p-2 rounded shadow w-full text-black"
                            placeholder="Password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? 
                            (
                                <p className="text-yellow-400 my-2 text-center">{formik.errors.password}</p>
                            ) : null
                        }
                    </div>
                    <div className="w-full my-5">
                        <button 
                            type="submit"
                            className="p-2 rounded shadow w-full bg-gradient-to-br from-purple-800 to-purple-400 text-black font-bold"
                        >
                            {/* {isLoading ? (
                                <i className="fas fa-circle-notch fa-spin"></i>
                                ) : ( */}
                                    Sign Up
                                {/* )
                            } */}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}