import React, { Component } from 'react';
import { View, Button } from 'react-native';

import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  const = { textStyle } = styles;
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    const { textStyle } = styles;
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
        {/* <Button
          onPress={this.changeColor}   
          title='press me'       
        /> */}
      </View>
    );
  }
}
//   changeColor = () => {
//     console.log('clicado');
//     this.setState({color: 'green'});
//   }
// }



const styles = {
  textStyle: {
    backgroundColor: 'white'
  }
}

export default AlbumList;