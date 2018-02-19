import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
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

  incrementCurrentIndex = () => {
    const newCurrentIndex = this.state.currentIndex += 1;
    this.setState({
      currentIndex: newCurrentIndex
    });
  }

  decrementCurrentIndex = () => {
    const newCurrentIndex = this.state.currentIndex -= 1;
    this.setState({
      currentIndex: newCurrentIndex
    });
  }

  render() {
    let question = QUESTIONS_AND_ANSWERS[this.state.currentIndex].question;
    let answer = QUESTIONS_AND_ANSWERS[this.state.currentIndex].answer;
    return (
      <View style={styles.container}>
        <View style={[styles.centerItems, styles.textBubbleContainer, styles.topContainer]}>
          <TextBubble text={question} currentIndex={this.state.currentIndex}/>
        </View>
        <View style={[styles.centerItems, styles.buttonContainer]}>
          <AppButton title="Yes" incrementCurrentIndex={this.incrementCurrentIndex}/>
          <AppButton title="No"/>
        </View>
          <View style={styles.centerItems}>
          <AppButton title="Previous" currentIndex={this.state.currentIndex} decrementCurrentIndex={this.decrementCurrentIndex} />
        </View>
        <View style={[styles.centerItems, styles.textBubbleContainer, styles.bottomContainer]}>
          <TextBubble text={answer} style={{backgroundColor: 'red'}}/>
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
