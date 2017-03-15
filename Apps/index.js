/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import Button from '../Apps/components/Button/Button';
import {images} from '../Apps/config/images';
import {colors} from '../Apps/config/appstyles';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const onButtonPress = () => {
  alert('Button has been pressed!');
};

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button text = "thanhdz" onPress={onButtonPress} />
        <Image source={images.logo}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
