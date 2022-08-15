import React, { useState, useEffect } from "react";

const useForm = (
  callback: () => void,
  validate: (values: {
    name: string;
    email: string;
    message: string;
  }) => boolean
) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  const resetForm = () => {
    setValues({
      name: "",
      email: "",
      message: "",
    });
  };

  return { handleChange, handleSubmit, values, errors, resetForm };
};

export default useForm;
