import { Form, Formik, Field, ErrorMessage } from "formik";
import PageHeader from "./common/pageHeader";
import * as Yup from "yup";
import CustomInput from "./common/customInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServic";
import { useAuth } from "../context/context";

const SignUpBiz = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn, SignUp } = useAuth();

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required")
      .test(
        "special-character",
        "Password must contain at least one special character",
        (value) => {
          return /[!@#$%^&*(),.?":{}|<>]/.test(value);
        }
      ),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <>
      <PageHeader title="Bussiness Acount With" />
      {error && <div className="alert alert-danger">{error}</div>}
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        validateOnMount
        onSubmit={async (valuse) => {
          try {
            await SignUp({ biz: true, ...valuse });
            await logIn({ email: valuse.email, password: valuse.password });
            navigate("/allcards");
          } catch ({ response }) {
            setError(response.data);
          }
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <Field
              name="name"
              type="text"
              label="Name"
              error={touched.name && errors.name}
              required
              component={CustomInput}
            ></Field>
            <Field
              name="email"
              type="email"
              label="Email"
              error={touched.email && errors.email}
              required
              component={CustomInput}
            ></Field>
            <Field
              name="password"
              type="password"
              label="Password"
              error={touched.password && errors.password}
              required
              component={CustomInput}
            ></Field>
            <button className="btn btn-dark" type="submit" disabled={!isValid}>
              Sign-Up
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpBiz;
