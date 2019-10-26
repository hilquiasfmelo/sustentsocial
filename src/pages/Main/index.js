import React, { Component } from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

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
    backgroundColor: '#25C86F',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
    paddingBottom: 90,
    padding: 0,
    marginTop: 0,
  },
  folha: {
    width: 90,
    height: 90,
    padding: 0,
    margin: 0,
    paddingBottom: 50,
    justifyContent: 'center',
  },
  input: {
    height: 45,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderRadius: 5,
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttom: {
    height: 45,
    backgroundColor: '#069',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttomText: { color: '#FFF', fontWeight: 'bold' },
  footer: {
    fontSize: 10,
    padding: 5,
    color: '#FFF',
  },
});
export default class App extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <>
        <ImageBackground
          style={styles.container}
          resizeMode="cover"
          source={require('../../images/logo.jpeg')}
        >
          <ImageBackground
            style={styles.folha}
            resizeMode="cover"
            source={require('../../images/folha.png')}
          />
          <Text style={styles.textMain}>SustentSocial</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={this.state.password}
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
          <TouchableOpacity
            style={styles.buttom}
            onPress={() => this.props.navigation.navigate('User')}
          >
            <Text style={styles.buttomText}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.footer}>Version 1.0.0</Text>
        </ImageBackground>
      </>
    );
  }
}
