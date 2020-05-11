import React, { Component } from 'react';
import { View, Text } from 'react-native';

/**
 * @class
 * @classdesc It contains the Welcome screen UI
 */
class WelcomeScreen extends Component {
  /** @constructor */
  constructor() {
    super();
    this.state = {};
  }

  /**
   * @method
   *  @returns {*} WelcomeUI
   * */
  render() {
    return (
      <View>
        <Text>Welcome</Text>
      </View>
    );
  }
}

export default WelcomeScreen;
