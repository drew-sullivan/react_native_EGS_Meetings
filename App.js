import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Question from './question';
import { AppButton } from './appButton';
import { QUESTIONS_AND_ANSWERS, FINAL_ANSWER } from "./shared/questionsAndAnswers";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  render() {
    let text = QUESTIONS_AND_ANSWERS[this.state.currentIndex].question;
    let ans = QUESTIONS_AND_ANSWERS[this.state.currentIndex].answer;
    return (

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Question text={text} />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="Yes" />
          <AppButton title="No" />
        </View>
        <View style={styles.bottomContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: 'skyblue'
  },
});
