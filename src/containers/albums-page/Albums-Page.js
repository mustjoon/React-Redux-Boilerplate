import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


//import { clear, getTasks } from '@redux/modules/task';
import { loadAlbums, createAlbum, removeAlbum, editAlbum } from '@redux/modules/album/actions'
import { getAlbums } from '@redux/modules/album/selectors';
import Button from '@common/button/Button';
import List from     '@components/list/List';
import ListItem from '@components/list/ListeItem';
import H1 from '@common/h1/H1';

import Error from '@components/common/error/Error';

const propTypes = {
  loadAlbums: PropTypes.func.isRequired,
  createAlbum: PropTypes.func.isRequired,
  removeAlbum: PropTypes.func.isRequired,
  editAlbum: PropTypes.func.isRequired,
  albums: PropTypes.array
}

const defaultProps = {
  loadAlbums: () => {},
  createAlbum: () => {},
  removeAlbum: () => {},
  editAlbum: () => {},
  albums: []
}

class AlbumsPage extends React.Component {

  componentDidMount() {
    this.props.loadAlbums();
  }

  componentWillUnmount() {
    console.log("Leaving SubPage");
  }

  onRemoveClick = (id) => {
    this.props.removeTodo(id)
  }

  onClick = () => {
    this.props.editTodo({id: 1});
  }

  renderTest = (item) => {
    return (
      <ListItem onClick={this._onRemove} key={item.id} item={item}/>
    )
  }
  
  render() {
    const { albums, error } = this.props;

    return (
      <div>
        <H1>Albums</H1>
        <List 
          onRemoveClick={this.onRemoveClick}
          onClick={this.onClick}
          prefix={'album'} 
          items={albums}
        />
        <Error error={error}/>
        <Button onClick={this._onClick}>Clear items</Button>
      </div>
    )
  }
}

AlbumsPage.propTypes = propTypes;
AlbumsPage.defaultProps = defaultProps;


function mapStateToProps(state) {
  const albums = getAlbums(state);
  return {
    albums
  }
}

export default connect(
  mapStateToProps,
  {
    loadAlbums,
    createAlbum,
    removeAlbum,
    editAlbum
  },
)(AlbumsPage)
