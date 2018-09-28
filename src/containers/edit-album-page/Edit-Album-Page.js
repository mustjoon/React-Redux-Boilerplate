import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';

import AlbumForm from '@components/form/album/Album';
import Button from '@common/button/Button';
import { loadAlbum, createAlbum, editAlbum, removeAlbum, clearAlbumRedirect } from '@redux/modules/album/actions';
import { getActiveAlbum, getAlbumLoading, getRedirect, getRedirectURL } from '@redux/modules/album/selectors';

const propTypes = {
  match: PropTypes.object.isRequired,
  activeAlbum: PropTypes.object.isRequired,
  loadAlbum: PropTypes.func.isRequired,
  createAlbum: PropTypes.func.isRequired,
  editAlbum: PropTypes.func.isRequired,
  clearAlbumRedirect: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
  removeAlbum: PropTypes.func.isRequired
}

const defaultProps = {
  match: {},
  activeAlbum: {},
  loadAlbum: () => {},
  createAlbum: () => {},
  editAlbum: () => {},
  clearAlbumRedirect: () => {},
  removeAlbum: () => {},
  redirect: false
}

class EditAlbumPage extends React.Component {

  onSubmit = (values) => {
    const { createAlbum, activeAlbum, editAlbum } = this.props;
    if(activeAlbum.id) {
      editAlbum(values)
    } else {
      createAlbum(values);
    }
  }

  onRemoveClick = () => {
    const { removeAlbum, activeAlbum: { id } } = this.props;
    removeAlbum(id);
  }

  componentDidMount() {
    const { activeAlbum } = this.props;
    if(!activeAlbum.id) {
      const { loadAlbum, match: {params: { id }} } = this.props;
      loadAlbum(id);
    }
  }

  componentWillUnmount() {
    this.props.clearAlbumRedirect();
  }

  render() {
    const { activeAlbum, redirect, redirectURL } = this.props;

    return (
      <div>
        {redirect && <Redirect to={redirectURL}/>}
        {activeAlbum.id && <Button onClick={this.onRemoveClick}>X</Button>}
        <AlbumForm item={activeAlbum} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

EditAlbumPage.propTypes = propTypes;
EditAlbumPage.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    activeAlbum: getActiveAlbum(state),
    isLoading: getAlbumLoading(state),
    redirect: getRedirect(state),
    redirectURL: getRedirectURL(state)
  }
}


export default connect(mapStateToProps, {
  loadAlbum,
  createAlbum,
  editAlbum,
  clearAlbumRedirect,
  removeAlbum
})(EditAlbumPage)