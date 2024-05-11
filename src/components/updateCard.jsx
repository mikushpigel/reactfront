import { useEffect, useState } from "react";
import PageHeader from "./common/pageHeader";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomInput from "./common/customInput";
import { getCard, updateCard } from "../services/cardsService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCard = () => {
  const [error, setError] = useState("");
  const [cardInfo, setCardInfo] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const update_card = async () => {
      try {
        const { data } = await getCard(id);
        setCardInfo(data);
      } catch (error) {
        setError(error);
      }
    };

    update_card();
  }, []);

  if (!cardInfo) return <p>something get wrong</p>;
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
  const { bizAddress, bizDescription, bizImage, bizName, bizPhone } = cardInfo;

  return (
    <>
      <PageHeader title="Update Your Card With" />
      {error && <div className="alert alert-danger">{error}</div>}
      <Formik
        initialValues={{
          bizName: bizName,
          bizDescription: bizDescription,
          bizAddress: bizAddress,
          bizPhone: bizPhone,
          bizImage: bizImage,
        }}
        validateOnMount
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          const { bizImage, ...rest } = values;
          if (bizImage) rest.bizImage = bizImage;
          try {
            const { data } = await updateCard(id, rest);
            console.log("data update card", data);

            toast.success("your card update successfuly!");
            navigate("/allcards");
          } catch ({ response }) {
            setError(response.data);
            console.log(response);
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
              Update Card{" "}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UpdateCard;
