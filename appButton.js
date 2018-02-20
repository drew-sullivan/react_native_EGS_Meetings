import React, { Component } from "react";
import { Alert, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { QUESTIONS_AND_ANSWERS } from "./shared/questionsAndAnswers";

export class AppButton extends Component {
  _onPressButton(btnTitle, currentIndex) {
    if (btnTitle === "Yes") {
      this.props.incrementCurrentIndex();
    };
    if (btnTitle === "Previous") {
      this.props.decrementCurrentIndex();
    };
  };
  render() {
    const isYesNoButton = this.props.title === "Yes" || this.props.title === "No";
    const isFirstQuestion = this.props.currentIndex === 0;
    const isLastQuestion = this.props.currentIndex === QUESTIONS_AND_ANSWERS.length - 1;
    const yesNoButtonStyles = [styles.button, styles.yesNoButton];
    const prevButtonStyles = [styles.button, styles.prevButton];

    if ((isYesNoButton && isLastQuestion) || (!isYesNoButton && isFirstQuestion)) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={(e) => this._onPressButton(this.props.title, this.props.currentIndex)}>
        <Text style={isYesNoButton ? yesNoButtonStyles : prevButtonStyles}>{this.props.title}</Text>
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
    fontWeight: 'bold',
  },
  prevButton: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  doNotDisplay: {
    display: 'none'
  }
});
