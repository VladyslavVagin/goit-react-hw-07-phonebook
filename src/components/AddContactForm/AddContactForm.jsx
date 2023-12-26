import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './AddContactForm.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().min(1).max(24).required(),
  number: yup.number().required(),
});

const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)

  const handleSubmit = (data, { resetForm }) => {
    const contNames = contacts.map(contact => contact.name);
    if (!contNames.includes(data.name)) {
      dispatch(addContact({name: data.name, phone: data.number.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3')}));
      resetForm();
      toast.success('Contact was ADDED');
    } else {
      toast.error('Contact with the same name has already exist!');
    }
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm} autoComplete="true">
        <label className={css.label} htmlFor="name"><span className={css.astericks}>&#42;</span>Name:
          <Field
            type="text"
            name="name"
            className={css.input}
            required
          />
          <span className={css.additional}>(1 - 24) symbols</span>
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={css.label} htmlFor="number"><span className={css.astericks}>&#42;</span>Phone number:
          <Field
            type="tel"
            name="number"
            className={css.input}
            required
            pattern="[0-9]{9,16}"
          />
          <span className={css.additional}>(9 - 14) numbers</span>{' '}
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
