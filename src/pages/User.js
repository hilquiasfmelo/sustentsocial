import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

export default class User extends Component {
  static navigationOptions = {
    title: 'SustentSocial',
  };

  render() {
    return (
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={require('../images/logo.jpeg')}
      >
        <ImageBackground
          style={styles.folha}
          resizeMode="cover"
          source={require('../images/folha.png')}
        />
        <Text style={styles.textMain}>"Juntos somos todos mais fortes"</Text>
        <TouchableOpacity style={styles.buttom}>
          <Text style={styles.buttomText}>Pontos de coleta</Text>
          <Image
            style={styles.folhinha}
            source={require('../images/lixo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttom}>
          <Text style={styles.buttomText}>Adicionar empresa</Text>
          <Image
            style={styles.folhinha}
            source={require('../images/lixo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttom}>
          <Text style={styles.buttomText}>Comunidades e grupos</Text>
          <Image
            style={styles.folhinha}
            source={require('../images/lixo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttom}>
          <Text style={styles.buttomText}>Sobre</Text>
          <Image
            style={styles.folhinha}
            source={require('../images/lixo.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
    paddingBottom: 250,
  },
  textMain: {
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    fontFamily: 'Lucida Calligraphy',
    marginVertical: 20,
    paddingBottom: 0,
    padding: 0,
    marginTop: 0,
  },
  buttomText: {
    color: '#069',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  footer: {
    fontSize: 10,
    padding: 5,
    color: '#FFF',
  },
  folhinha: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 50,
    height: 50,
  },
  folha: {
    width: 150,
    height: 150,
    padding: 0,
    margin: 0,
    paddingBottom: 50,
    justifyContent: 'center',
  },
  buttom: {
    height: 45,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: 5,
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginBottom: 10,
  },
});
