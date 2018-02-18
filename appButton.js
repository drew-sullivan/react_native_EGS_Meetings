import React, { Component } from "react";
import { Alert, View, StyleSheet, TouchableOpacity, Text } from "react-native";

export class AppButton extends Component {
  _onPressButton(btnTitle) {
    Alert.alert(`You pressed ${btnTitle}!`);
  }
  render() {
    return (
      <TouchableOpacity
        onPress={(e) => this._onPressButton(this.props.title)}>
        <Text style={styles.button}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    marginLeft: 25,
    marginRight: 25,
  }
});
