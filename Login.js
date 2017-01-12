/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StatusBar,
  Navigator,
  Image,

} from 'react-native';

import Register from './Register';
export default class Login extends Component {
  linker(comp){
    this.props.navigator.push({
      component: comp
    })
  }

  renderScene(route, navigator) {
    return <route.component navigator={navigator} props={route.passProps} />
  }

  render() {
    return (
      <Image source={require('./lin.png')} style={styles.container}>
        {/*
          add the logo
          add the BYOP text
        */}
      <Image source={require('./logo.png')} style={styles.logo} resizeMode={'contain'}/>
        <TouchableHighlight onPress={this.linker.bind(this, Register)} underlayColor={'transparent'}>
        <View style={styles.bigbutt}></View>
        </TouchableHighlight>
      </Image>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: null,
    width: null,
    alignItems: "center"
  },
  bigbutt: {
    backgroundColor: "rgb(0,235,194)",
    height:60,
    width:300,
  },
  logo: {
    width:100,
  }
});

AppRegistry.registerComponent('testcoolapp', () => testcoolapp);
