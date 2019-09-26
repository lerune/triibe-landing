import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import RegisterFormView from './register-form-view'

export default function RegisterForm() {
  const ADD_USER = gql`
    mutation CreateUser($name: String!, $email: String!) {
      createUser(name: $name, email: $email) {
        id
        email
      }
    }
  `
  const [addUser, { data }] = useMutation(ADD_USER)
  const handleSubmit = values => {
    addUser({ variables: values })
  }
  return <RegisterFormView handleSubmit={handleSubmit} />
}
