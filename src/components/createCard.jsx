import { Form, Formik, Field } from "formik";
import PageHeader from "./common/pageHeader";
import * as Yup from "yup";
import CustomInput from "./common/customInput";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cardServices from "../services/cardsService";

const CreateCard = () => {
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    bizName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    bizDescription: Yup.string()
      .min(10, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    bizPhone: Yup.string().min(9).required("Required"),
    bizAddress: Yup.string().min(8).max(30).required(),
    bizImage: Yup.string().url().nullable().default(""),
  });

  return (
    <>
      <PageHeader title="Create Card With" />
      {error && <div className="alert alert-danger">{error}</div>}
      <Formik
        initialValues={{
          bizName: "",
          bizAddress: "",
          bizDescription: "",
          bizPhone: "",
          bizImage: "",
        }}
        validationSchema={SignupSchema}
        validateOnMount
        onSubmit={async (valuse) => {
          const { bizImage, ...rest } = valuse;
          if (bizImage) rest.bizImage = bizImage;
          try {
            await cardServices.createCard(rest);
            navigate("/allcards");
          } catch ({ response }) {
            setError(response.data);
          }
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <Field
              name="bizName"
              type="text"
              label="Name"
              error={touched.bizName && errors.bizName}
              required
              component={CustomInput}
            ></Field>
            <Field
              name="bizAddress"
              type="text"
              label="Address"
              error={touched.bizAddress && errors.bizAddress}
              required
              component={CustomInput}
            ></Field>
            <Field
              name="bizDescription"
              type="text"
              label="Description"
              error={touched.bizDescription && errors.bizDescription}
              required
              component={CustomInput}
            ></Field>
            <Field
              name="bizPhone"
              type="text"
              label="Phone"
              error={touched.bizPhone && errors.bizPhone}
              required
              component={CustomInput}
            ></Field>
            <Field
              name="bizImage"
              type="text"
              label="Image"
              error={touched.bizImage && errors.bizImage}
              component={CustomInput}
            ></Field>
            <button className="btn btn-dark" type="submit" disabled={!isValid}>
              create
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateCard;
