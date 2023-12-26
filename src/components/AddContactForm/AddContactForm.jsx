import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './AddContactForm.module.css';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().min(5).max(24).required(),
  number: yup.number().required(),
});

const AddContactForm = () => {

  // const handleSubmit = (data, { resetForm }) => {
  //   const contNames = contacts.map(contact => contact.name);
  //   if (!contNames.includes(data.name)) {
  //     resetForm();
  //     toast.success('Contact was ADDED');
  //   } else {
  //     toast.error('Contact with the same name has already exist!');
  //   }
  // };

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
    >
      <Form className={css.contactForm} autoComplete="true">
        <label className={css.label} htmlFor="name"><span className={css.astericks}>&#42;</span>Name:
          <Field
            type="text"
            name="name"
            className={css.input}
            required
          />
          <span className={css.additional}>(5 - 24) symbols</span>
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={css.label} htmlFor="number"><span className={css.astericks}>&#42;</span>Phone number:
          <Field
            type="tel"
            name="number"
            className={css.input}
            required
            pattern="[0-9]{1,14}"
          />
          <span className={css.additional}>(1 - 14) symbols</span>{' '}
          <ErrorMessage name="number" component="span" />{' '}
        </label>
        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default AddContactForm;
