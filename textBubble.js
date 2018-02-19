import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TextBubble extends Component {
  render() {
    const isFirstQuestion = this.props.currentIndex === 0;
    if (isFirstQuestion) {
      return (
        <Text style={[styles.container, styles.firstbackgroundColor]}>{this.props.text}</Text>
      );
    }
    return(
      <Text style={[styles.container, styles.nonFirstbackgroundColor]}>{this.props.text}</Text>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    fontSize: 50,
    color: "white",
    backgroundColor: "#241F20",
    padding: 18,
    borderRadius: 20,
    overflow: 'hidden',
  },
  firstbackgroundColor: {
    backgroundColor: "#241F20",
  },
  nonFirstbackgroundColor: {
    backgroundColor: "#00B5EE",
  }
});
