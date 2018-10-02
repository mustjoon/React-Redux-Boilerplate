import React from 'react'
import { reduxForm } from 'redux-form'
import Fields from '@components/form/fields';

class AlbumForm extends React.PureComponent {

  componentWillReceiveProps (nextProps) {
    if ( (!this.props.item && nextProps.item) || this.props.item.id !== nextProps.item.id ) {
      this.init(nextProps.item);
    }
  }

  componentDidMount() {
    const { item } = this.props;
    this.init(item)
  }

  init = (item) => {
    this.props.destroy();
    this.props.initialize({
      title: item.title,
      id: item.id
    });
  }

  render() {
    const { handleSubmit } = this.props

    const fields = [
      {
        name: 'title',
        type: 'text',
        label: 'Title',
        placeholder: 'title'
      },
      {
        name: 'Save',
        type: 'submit',
        label: 'Save',
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

AlbumForm = reduxForm({
  // a unique name for the form
  form: 'album'
})(AlbumForm)

export default AlbumForm