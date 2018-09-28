import React, { PureComponent } from 'react';
import TextAreaField from './text-area-field/Text-Area-Field';
import TextField from './text-field/Text-Field';
import SubmitField from './submit-field/Submit-Field';

class Fields extends PureComponent {

  renderTextArea = (props) => {
    return <TextAreaField key={props.name} name={props.name} label={props.label} />
  }

  renderText = (props) => {
    return <TextField type={props.type}  key={props.name} name={props.name} label={props.label} />
  }

  renderSubmit = (props) => {
    return <SubmitField key={props.name} label={props.label}/>
  }

  getField = (props) => {
    switch(props.type) {
      case 'text':
        return this.renderText(props);
      case 'textarea':
        return this.renderText(props);
      case 'submit':
        return this.renderSubmit(props);
      default:
        return null;
    }
  }

  renderFields = (fields) => {
    return fields.map((field, index) => {
      return this.getField(field);
    })
  }

  render() {

    return (
      <div>
        {this.renderFields(this.props.fields)}
      </div>     
    )
  }
}

export default Fields;