import React, { Component } from "react";
import { Button, Alert, View } from "react-native";

export class AppButton extends Component {
  _onPressButton(btnTitle) {
    Alert.alert(`You pressed ${btnTitle}!`);
  }
  render() {
    return (
      <View>
        <Button
          onPress={(e) => this._onPressButton(this.props.title)}
          title={this.props.title}
        />
      </View>
    );
  }
}
