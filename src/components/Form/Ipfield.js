import '../Form/Form.css'
// import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'

const IpField = () => (
    // const [data, setData] = useState({
    //     fname: '',
    //     email: '',
    //     birthDate: '',
    //     gender: '--Select--',
    //     address: '',
    //     contact: ''
    // })

    // const handlechange = (e) => {
    //     setData({
    //         ...data,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(data);
    // };

    <Formik
        initialValues={{
            fullName: '',
            email: '',
            address: '',
            birthDate: '',
            gender: '',
            contact: '',
        }}

        validate={values => {
            const errors = {};

            // Validation for Email
            if (!values.email) {
                errors.email = 'Required!!!';
            }
            else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address'
            }

            // Validation for Contact
            if (!values.contact) {
                errors.contact = 'Required!!!'
            }
            if (values.contact && !/^[0-9]{0,12}$/.test(values.contact)) {
                errors.contact = 'Please enter number only!!!'
            }
            else if (
                !/^[0-9]$/
            ) {
                errors.contact = 'Invalid number'
            }
            // Validation for Gender
            if (!values.gender) {
                errors.gender = "Select the option"
            }

            return errors;
        }}

        onSubmit={(values, { setSubmitting }) => {
            console.log('Submit button clicked!!!');
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false)
            }, 400)
        }}
    >
        {({ isSubmitting }) => (
            <Form className='form' >
                <div className='inputSection'>
                    <div className='inputbox'>
                        <label  >Full Name</label>
                        <Field type='text' name='fullName' />
                        <ErrorMessage name='fullName' component='div' />
                    </div>
                    <div className='inputbox'>
                        <label>Email</label>
                        <Field type='email' name='email' />
                        <ErrorMessage name='email' component='div' className='errorMessage' />
                    </div>
                    <div className='pair'>
                        <div className='inputbox'>
                            <label>Birth Date</label>
                            <Field type='date' name='birthDate' className='date' />
                            <ErrorMessage name='birthDate' component='div' className='errorMessage' />
                        </div>
                        <div className='inputbox'>
                            <label>Gender</label>
                            <Field className='select' as='select' name='gender' >
                                <option value='' disabled>-Select Gender-</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='other'>Other</option>
                            </Field>
                            <ErrorMessage name='gender' component='div' className='errorMessage' />
                        </div>
                    </div>
                    <div className='inputbox'>
                        <label>Address</label>
                        <Field type='text' name='address' />
                        <ErrorMessage name='address' component='div' />
                    </div>
                    <div className='inputbox'>
                        <label>Contact number</label>
                        <Field type='tel' name='contact' maxLength='12'
                        // pattern='[0-9]*' 
                        />
                        <ErrorMessage name='contact' component='div' className='errorMessage' />
                    </div>
                    <button type='submit' id='formBtn' className='btn' disabled={isSubmitting}>Submit</button>
                </div>
            </Form>

        )}
    </Formik >


)
export default IpField;