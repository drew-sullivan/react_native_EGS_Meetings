import React, { Component } from "react";
import { Button, Alert, View, StyleSheet } from "react-native";

export class AppButton extends Component {
  _onPressButton(btnTitle) {
    Alert.alert(`You pressed ${btnTitle}!`);
  }
  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          onPress={(e) => this._onPressButton(this.props.title)}
          title={this.props.title}
          color='black'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '40%',
  },
})
