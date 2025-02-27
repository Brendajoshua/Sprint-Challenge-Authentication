import React from 'react';
import {Formik, Form, Field} from 'formik';
import axios from 'axios';
import './Register.scss'

function RegisterForm(props){
    const register = (formValue, actions) => {
        const newUser = {
          username: formValue.username,
          password: formValue.password
        }

        axios.post('http://localhost:3300/api/auth/register', newUser)
        .then(res => {
          localStorage.setItem('token', res.data.token)
          actions.resetForm();
          props.history.replace('/jokes')
        })
        .catch(err => {
          alert(err.message)
        })
      }

    const initialUser = {username: '', password: ''}
    return(
        <Formik 
        initialValues = {initialUser}
        onSubmit={register}
        render={props => {
            return(
                <Form className='form'>
                    <label htmlFor='username'>username</label>
                    <Field name='username' type='text' placeholder='username'/>
                    <label htmlFor='password'>password</label>
                    <Field name='password' type='password' placeholder='password'/>
                    <button type='submit'>Register</button>
                </Form>
            )
        }}/>
    )

}

export default RegisterForm; 