import React from 'react'
import { reduxForm } from 'redux-form'
import Fields from '@components/form/fields';

class RegisterForm extends React.PureComponent {

  render() {
    const { handleSubmit, isSubmitting } = this.props;
    const fields = [
      {
        name: 'username',
        type: 'text',
        label: 'Username',
        placeholder: 'John Doe..'
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: '...'
      },
      {
        name: 'password_confirm',
        label: 'Password',
        type: 'password',
        placeholder: '...'
      },
      {
        name: 'Save',
        type: 'submit',
        disabled: isSubmitting,
        label: 'Login',
        placeholder: 'Save'
      }
    ]

    return (
      <form onSubmit={handleSubmit}>
        <Fields fields={fields}/>
      </form>
    )
    }
}

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'register'
})(RegisterForm)

export default RegisterForm