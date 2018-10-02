import React from 'react'
import { Field } from 'redux-form'
import H1 from '@common/h1/H1';

const renderField = (
  { input, label, placeholder, type, meta: { asyncValidating, touched, error } },
) =>  {
  return (
    <div>
      <div>
        <input  {...input} type={type} placeholder={placeholder} />
      </div>
      {touched && error && <span className='error'>{error}</span>}
    </div>
  )
}

  


const TextInput = props => {

  const component = props.type === 'textarea' ? 'textarea' : renderField;

  
  return (
    <div>
      <label>
        <H1>{props.label}</H1>
        <Field
          placeholder={props.placeholder ? props.placeholder : null}
          name={props.name}
          component={component}
          type={props.type}
          onChange={props.onChange}
        />{' '}
      </label>
    </div>
  )
}

export default TextInput