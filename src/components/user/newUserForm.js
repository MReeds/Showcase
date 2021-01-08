import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../user/userDataProvider";
import { Formik } from 'formik';

const FormContainer = (props) => {
  const { user, get, setUser, loading, setLoading, add } = useContext(DataContext);
  const [image, setImage] = useState("");
  
  const handleFieldChange = (evt) => {
      const stateToChange = { ...user };
      stateToChange[evt.target.name] = evt.target.value;
      setUser(stateToChange);
      console.log({...user});
  };

  let createNewUser = (e) => {
    e.preventDefault();
    add(user);
    //   push to created profile
  };

  //this handles cloudnairy upload

  const handleUpload = async (e) => {
    let files = e.target.files;
    let data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "showcaseApp");
    console.log(data);
    setLoading(true);
    let responseUrl = "https://api.cloudinary.com/v1_1/mreeds123/image/upload";
    let response = await fetch(`${responseUrl}`, {
      method: "POST",
      body: data,
    });
    let file = await response.json();
    console.log(file);
    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div>
    <h1>Create Profile</h1>
    <Formik
      initialValues={{ user }}
      validate={values => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Required';
        }
        if (!values.lastName) {
          errors.lastName = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit, createNewUser}>
             <label>First Name: </label>
           <input
             type="text"
             name="firstName"
             onChange={handleFieldChange}
             onBlur={handleBlur}
             value={values.firstName}
           />
           {errors.firstName && touched.firstName && errors.firstName}
           <label>Last Name: </label>
           <input
             type="text"
             name="lastName"
             onChange={handleFieldChange}
             onBlur={handleBlur}
             value={values.lastName}
           />
           {errors.lastName && touched.lastName && errors.lastName}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 );
};
export default FormContainer;