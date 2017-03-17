/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import SearchBar from 'react-native-search-bar';
import Button from '../../components/Button/Button';
import {images} from '../../config/images';
import {colors} from '../../config/appstyles';
import {capitalizeFirst} from '../../lib/string';
import {capitalizeAll} from '../../lib/string';
import styles from './styles';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
  TextInput

} from 'react-native';

export default class MovieDetail extends Component {

  constructor(props){
    super(props);
    this.state={
    data:'-1',
    movie_id:this.props.mId // Get value(s)
  }
  }
  /*this function will call first */
componentDidMount(){
    this.getMoviesFromApiAsync()
  }

 getMoviesFromApiAsync() {
      return fetch('https://api.themoviedb.org/3/movie/'+this.state.movie_id+'?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({isLoading: false, jsonData: responseJson});
          console.log(responseJson);
          console.log("Movie detail : "+ responseJson.overview);
          this.setState({ 
            data: responseJson
           });
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
    }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress = {this.props.clickRed}>
       
        <View style={{marginLeft:4,flexDirection: 'row'}}>
        <Image style = {{width: 20, height:20}} source={images.ic_backpress} />
        <Text style={styles.textBack}>Back</Text>
        </View>
     </TouchableOpacity>
      <View style = {styles.viewPhoto}>
      
      <Image style={styles.photoBanner} source={{uri:'https://image.tmdb.org/t/p/original'+this.state.data.poster_path}} />
       
       
       <View style ={{backgroundColor:'#FF0000',opacity:0.6,width:300,maxWidth:300, height:200, position: 'absolute', bottom: 0, flexDirection:'row', marginLeft:30, marginRight:30,}}>
          <Text>{this.state.data.original_title}</Text>
           <Text>{this.state.data.overview}</Text>
            <Text>{this.state.data.release_date}</Text>
             <Text>{this.state.data.runtime}</Text>
       </View>  

      </View>
      </View>
    );
  }
}



/*
{
  "adult": false,
  "backdrop_path": "/5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg",
  "belongs_to_collection": {
    "id": 748,
    "name": "X-Men Collection",
    "poster_path": "/1Zo4J5SAni8lyXt7NxJwJZ0f0ip.jpg",
    "backdrop_path": "/Abnosho2v3bcdvDww6T7Hfeczm1.jpg"
  },
  "budget": 97000000,
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    }
  ],
  "homepage": "http://www.foxmovies.com/movies/logan",
  "id": 263115,
  "imdb_id": "tt3315342",
  "original_language": "en",
  "original_title": "Logan",
  "overview": "In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan's attempts to hide from the world and his legacy are up-ended when a young mutant arrives, being pursued by dark forces.",
  "popularity": 170.249545,
  "poster_path": "/45Y1G5FEgttPAwjTYic6czC9xCn.jpg",
  "production_companies": [
    {
      "name": "Twentieth Century Fox Film Corporation",
      "id": 306
    },
    {
      "name": "Donners' Company",
      "id": 431
    },
    {
      "name": "Marvel Entertainment",
      "id": 7505
    },
    {
      "name": "TSG Entertainment",
      "id": 22213
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2017-02-28",
  "revenue": 460961042,
  "runtime": 141,
  "spoken_languages": [
    {
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "His Time Has Come",
  "title": "Logan",
  "video": false,
  "vote_average": 7.7,
  "vote_count": 1325
}
*/