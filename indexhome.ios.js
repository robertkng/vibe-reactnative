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


} from 'react-native';

export default class testcoolapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hello !'
    };
  }

  clickedme(){
    // alert("ouch");
    // cmd + d to activate debugger
    // debugger;
    this.setState({
      message: "yucky"
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden/>
        <TouchableHighlight onPress={this.clickedme.bind(this)} underlayColor={'transparent'}>
          <View style={styles.circle}>
            <Text style={styles.inner}>
              {this.state.message}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  circle: {
    backgroundColor: "red",
    height:200,
    width:200,
    borderRadius:100,
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    fontSize: 42,
    color: "white",
    fontWeight: '400'
  },
});

AppRegistry.registerComponent('testcoolapp', () => testcoolapp);
