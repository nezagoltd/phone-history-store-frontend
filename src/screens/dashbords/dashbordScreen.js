import React, { Component } from 'react';
import { Text, View } from 'react-native';

/**
 * @class
 */
class DashboardScreen extends Component {
/**
 * @constructor
 */
  constructor() {
    super();
    this.state = {};
  }

  /**
   * @returns {*} DashboardScreenUI
   */
  render() {
    return (
      <View>
        <Text>
          Hello, welcome to the new world of digital store
        </Text>
      </View>
    );
  }
}

export default DashboardScreen;
