import React from 'react'
import { Formik } from 'formik'
import { TextField, FormContainer, Button } from './style'
import PropTypes from 'prop-types'

const RegisterFormView = ({ handleSubmit }) => (
  <Formik
    initialValues={{ email: '', name: '', profession: '' }}
    onSubmit={values => {
      handleSubmit(values)
    }}
    render={({ errors, status, touched, isSubmitting }) => (
      <FormContainer>
        <TextField type="email" name="email" />
        {errors.email && touched.email && <div>{errors.email}</div>}
        <TextField type="text" name="name" />
        {errors.social && errors.social.facebook && touched.social.facebook && (
          <div>{errors.social.facebook}</div>
        )}
        <TextField type="text" name="profession" />
        {errors.social && errors.social.twitter && touched.social.twitter && (
          <div>{errors.social.twitter}</div>
        )}
        {status && status.msg && <div>{status.msg}</div>}
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </FormContainer>
    )}
  />
)
RegisterFormView.propTypes = {
  handleSubmit: PropTypes.func
}

RegisterFormView.defaultProps = {
  handleSubmit: () => console.error('Submit Function Not Passed')
}

export default RegisterFormView
