import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Question extends Component {
  render() {
    return(
      <Text style={styles.container}>{this.props.text}</Text>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    color: "white",
    backgroundColor: "#00B5EE"
  }
});
