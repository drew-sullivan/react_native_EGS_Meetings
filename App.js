import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextBubble from './textBubble';
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
    return (
      <View style={styles.container}>
        <View style={[styles.centerItems, styles.textBubbleContainer, styles.topContainer]}>
          <TextBubble text={text}/>
        </View>
        <View style={[styles.centerItems, styles.buttonContainer]}>
          <AppButton title="Yes" />
          <AppButton title="No" />
        </View>
        <View style={[styles.centerItems, styles.textBubbleContainer, styles.bottomContainer]}>
          <TextBubble text={text}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBubbleContainer: {
    flex: 4,
  },
  topContainer: {
    paddingTop: 90,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomContainer: {
    paddingBottom: 90,
  },
});
