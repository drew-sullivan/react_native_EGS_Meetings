import React, { Component } from "react";
import { Alert, View, StyleSheet, TouchableOpacity, Text } from "react-native";

export class AppButton extends Component {
  _onPressButton(btnTitle) {
    if (btnTitle === "Yes") {
      this.props.incrementCurrentIndex();
    } else if (btnTitle === "No") {
      this.props.decrementCurrentIndex();
    } else {
      return;
    }
  }
  render() {
    const title = this.props.title;
    const isYesNoButton = title !== "Previous";
    return (
      <TouchableOpacity
        onPress={(e) => this._onPressButton(this.props.title)}>
        <Text style={isYesNoButton ? [styles.button, styles.yesNoButton] : [styles.button, styles.prevButton]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 25,
    marginRight: 25,
  },
  yesNoButton: {
    fontSize: 40,
  },
  prevButton: {
    fontSize: 20,
  }
});
