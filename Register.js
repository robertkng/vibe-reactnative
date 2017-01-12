import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
  TouchableHighlight,
} from 'react-native';


export default class Register extends Component {
  returner() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.returner.bind(this)}>
          <View style={styles.bigbutt}></View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  bigbutt: {
    backgroundColor: "rgb(0,235,194)",
    height:60,
    width:300,
  },
});
