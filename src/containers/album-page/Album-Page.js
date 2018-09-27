import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { loadAlbum } from '../../actions/album'
import { getActiveAlbum } from '../../redux/modules/album/selectors';

import Link from '@common/link/Link';

const propTypes = {
  match: PropTypes.object.isRequired,
  activeAlbum: PropTypes.object.isRequired,
  loadTodo: PropTypes.func.isRequired
}

const defaultProps = {
  match: {},
  activeAlbum: {},
  loadTodo: () => {}
}

class AlbumPage extends Component {

  componentDidMount() {
    const { loadAlbum, match: {params: { id }} } = this.props;
    loadAlbum(id);
  }

  render() {
    return <Link to={'#'}>{this.props.activeAlbum.id}</Link>
  }
}

AlbumPage.propTypes = propTypes;
AlbumPage.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    activeAlbum: getActiveAlbum(state)
  }
}

export default connect(mapStateToProps, {
  loadAlbum
})(AlbumPage);