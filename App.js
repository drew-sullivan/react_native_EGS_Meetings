import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Question from './question';
import { AppButton } from './appButton';
import { QUESTIONS, ANSWERS } from "./shared/questionsAndAnswers";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }
  render() {
    let text = QUESTIONS[this.state.currentIndex];
    return (
      <View style={styles.container}>
        <Question text={text} />
        <AppButton title="Yes" />
        <AppButton title="No" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
