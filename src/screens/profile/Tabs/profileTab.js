import React, { Component } from 'react';
import { Text, View } from 'react-native';

/**
 * @class
 */
class ProfileTab extends Component {
  /**
     * @constructor
     */
  constructor() {
    super();
    this.state = {};
  }

  /**
   * @method
   * @returns {*} UI
   */
  render() {
    return (
      <View><Text>Hello user, this is your main profile</Text></View>
    );
  }
}

export default ProfileTab;
