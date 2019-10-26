import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

// import { Container } from './styles';

export default class User extends Component {
  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        source={require('../../images/logo.jpeg')}
      />
    );
  }
}
