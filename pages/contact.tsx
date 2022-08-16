import React, { useState } from "react";
import Head from "next/head";
import validate from "../formUtils/validate";
import useForm from "../formUtils/useForm";
import contactStyle from "../styles/Contact.module.scss";

const contact: React.FC = () => {
  const [emailV, setEmailV] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [resultmessage, setResultMessage] = useState<{
    class: string;
    text: string;
  }>();

  const submitForm = async () => {
    setSubmitting(true);

    let details = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    try {
      await fetch(
        " https://iz8csz9uqa.execute-api.us-east-1.amazonaws.com/testing",
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(details),
          headers: new Headers({
            "content-type": "application/json",
            Accept: "application/json",
          }),
        }
      );

      setSubmitting(false);

      setResultMessage({
        class: contactStyle.successResult,
        text: "Thanks, We'll be in touch shortly.",
      });
    } catch (err) {
      console.log(err);

      setResultMessage({
        class: contactStyle.failResult,
        text: "Sorry, there was a problem. Please try again later.",
      });
    }
    resetForm();
    setSubmitting(false);
  };
  const { handleChange, handleSubmit, values, errors, resetForm } = useForm(
    submitForm,
    validate
  );

  return (
    <div>
      <Head>
        <title>ZOIE | About</title>
        <meta name="description" content="contact ali zoie - email ali zoie" />
      </Head>
      <div className={contactStyle.myworksbackground}>
        <div className={contactStyle.form_container}>
          <h1>Contact Us</h1>
          {resultmessage && (
            <div className={resultmessage.class}>{resultmessage.text}</div>
          )}
          <form
            id="contact-form"
            action="submit"
            className={contactStyle.contact_form}
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className={contactStyle.inputs}>
              <label htmlFor="name" className={contactStyle.input_label}>
                Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                className={contactStyle.input_text}
                name="name"
                id="name"
                value={values.name}
              />
            </div>
            <div className={contactStyle.inputs}>
              <label htmlFor="email" className={contactStyle.input_label}>
                Email
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="email"
                className={contactStyle.input_text}
                id="email"
                value={values.email}
              />
            </div>
            <div className={contactStyle.inputs}>
              <label htmlFor="message" className={contactStyle.input_label}>
                {!emailV ? <h1> Please Enter a Valid Email </h1> : ""} Message
              </label>
              <textarea
                id="message"
                name="message"
                cols={30}
                rows={10}
                className={contactStyle.massege_area}
                value={values.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              disabled={submitting}
              className={contactStyle.submit_button}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        <div className={contactStyle.spacer}></div>
      </div>
    </div>
  );
};

export default contact;
