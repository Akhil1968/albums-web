import React, { Component } from 'react';

import { connect } from 'react-redux';

import AlbumDetail from './AlbumDetail';

import { GetAlbumsAction } from 'albums-shared2/src/actions/AlbumActions';

class AlbumList extends Component {

  componentDidMount() {
    this.props.GetAlbumsAction();
  }

  renderAlbums() {
    return this.props.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.props);

    return (
      <div>
        {this.renderAlbums()}
      </div>
    );
  }
}
/* mapStateToProps is a function that returns an object that has mapping of store values*/
const mapStp = state => {
  return {
      albums: state.alb.albums,
      loading: state.alb.loading
  };
}

/* mapDispatchToProps is an object that has mapping for action creator functions*/
const mapDtp =  {
  GetAlbumsAction: GetAlbumsAction
};

export default connect(mapStp, mapDtp)(AlbumList);
