import React, { Component } from "react";
import { Alert, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { QUESTIONS_AND_ANSWERS } from "./shared/questionsAndAnswers";

export class AppButton extends Component {
  _onPressButton(btnTitle) {
    if (btnTitle === "Yes") {
      this.props.incrementCurrentIndex();
      this.props.isLastQuestion();
    }
    if (btnTitle === "Previous") {
      this.props.decrementCurrentIndex();
      this.props.isFirstQuestion();
    } else {
      return;
    }
  }
  render() {
    const title = this.props.title;
    const isYesNoButton = title !== "Previous";
    const yesNoButtonStyles = [styles.button, styles.yesNoButton];
    const prevButtonStyles = [styles.button, styles.prevButton];
    const isFirstQuestion = this.props.currentIndex === 0;
    const isLastQuestion = this.props.currentIndex === QUESTIONS_AND_ANSWERS.length - 1;
    if (isFirstQuestion) {
      return (
        <TouchableOpacity>
          <Text style={{display: 'none'}}>{title}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={(e) => this._onPressButton(title)}>
        <Text style={isYesNoButton ? yesNoButtonStyles : prevButtonStyles}>{title}</Text>
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
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  }
});
