
import React from 'react';
import Button from '@common/button/Button';

const SubmitField = (props) => {
  return (
    <Button type='button'>{props.label}</Button>
  )
}

export default SubmitField;