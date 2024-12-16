import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { login,  currentUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, []);

  const API_URL =
  import.meta.env.VITE_NODE_ENV === 'production'
    ? 'https://innovit-server.onrender.com'
    : 'http://localhost:5000';

  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().when("isSignUp", {
      is: true,
      then: Yup.string().required("First name is required"),
    }),
    lastName: Yup.string().when("isSignUp", {
      is: true,
      then: Yup.string().required("Last name is required"),
    }),
    username: Yup.string().when("isSignUp", {
      is: true,
      then: Yup.string().required("Username is required"),
    }),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const url = isSignUp
        ? `${API_URL}/api/auth/signup`
        : `${API_URL}/api/auth/signin`;

      const response = await axios.post(url, values, { withCredentials: true });

      if (!isSignUp) {
        toast.success(response.data.message);
        login(response.data.username);
        navigate("/");
      } else {
        setIsSignUp(false);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
    }
  };



  return (
    <div className="flex justify-start items-center flex-col h-[87vh] bg-primary relative top-[13vh]">
      <div className="flex flex-col w-fit p-10 bg-secondary rounded-3xl max-h-[87vh] text-textColor">
        <div className="mb-8 text-center">
          {isAuthenticated ? (
            <div>Authenticated... Redirecting</div>
          ) : (
            <div>
              <h1 className="my-3 text-4xl font-bold">
                {isSignUp ? "Sign Up" : "Sign In"}
              </h1>
              <p className="text-sm text-gray-400">
                {isSignUp
                  ? "Create your account"
                  : "Sign in to access your account"}
              </p>
            </div>
          )}
        </div>

        {!isAuthenticated && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, handleBlur, touched, errors }) => (
              <Form className="space-y-5">
                {isSignUp && (
                  <>
                    <div className="flex gap-4">
                      <div className="w-[50%]">
                        <label
                          htmlFor="first-name"
                          className="block mb-2 text-sm"
                        >
                          First Name
                        </label>
                        <Field
                          type="text"
                          name="firstName"
                          id="first-name"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 placeholder:text-gray-400"
                        />
                        {touched.firstName && errors.firstName && (
                          <div className="text-red-500 text-sm">
                            {errors.firstName}
                          </div>
                        )}
                      </div>
                      <div className="w-[50%]">
                        <label
                          htmlFor="last-name"
                          className="block mb-2 text-sm"
                        >
                          Last Name
                        </label>
                        <Field
                          type="text"
                          name="lastName"
                          id="last-name"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 placeholder:text-gray-400"
                        />
                        {touched.lastName && errors.lastName && (
                          <div className="text-red-500 text-sm">
                            {errors.lastName}
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="username" className="block mb-2 text-sm">
                        Username
                      </label>
                      <Field
                        type="text"
                        name="username"
                        id="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 placeholder:text-gray-400"
                      />
                      {touched.username && errors.username && (
                        <div className="text-red-500 text-sm">
                          {errors.username}
                        </div>
                      )}
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 placeholder:text-gray-400"
                  />
                  {touched.email && errors.email && (
                    <div className="text-red-500 text-sm">{errors.email}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-sm">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 placeholder:text-gray-400"
                  />
                  {touched.password && errors.password && (
                    <div className="text-red-500 text-sm">
                      {errors.password}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
                >
                  {isSignUp ? "Sign Up" : "Sign In"}
                </button>

                <p className="px-6 text-sm text-center text-gray-400">
                  {isSignUp ? (
                    <>
                      Already have an account?{" "}
                      <span
                        className="text-violet-400 cursor-pointer"
                        onClick={() => setIsSignUp(false)}
                      >
                        Sign In
                      </span>
                    </>
                  ) : (
                    <>
                      Don't have an account yet?{" "}
                      <span
                        className="text-violet-400 cursor-pointer"
                        onClick={() => setIsSignUp(true)}
                      >
                        Sign Up
                      </span>
                    </>
                  )}
                </p>
              </Form>
            )}
          </Formik>
        )}

        
      </div>
    </div>
  );
};

export default AuthPage;
