import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import getUserData from '../../actions/getUserData';

/**
 * @class
 * @classdesc
 */
class UserProfileScreen extends Component {
  /**
     * @constructor
     */
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount=() => {
    const { myData } = this.props;
    const { token } = myData.userData;
    this.setState({ sessionUser: jwtDecode(token) });
  }

  /**
     * @method
     * @returns {*} UI
     */
  render() {
    return (
      <View>
        <Text>Hello user, welcome to your profile</Text>
        <TouchableOpacity>
          <Text>Touch me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

UserProfileScreen.propTypes = {
  myData: PropTypes.object.isRequired,
  getUserData: PropTypes.func.isRequired,
};

/**
 *
 * @param {*} state
 * @returns {*} state
 */
const mapStateToProps = (state) => ({
  myData: state.myReducers,
});

export default connect(mapStateToProps, { getUserData })(UserProfileScreen);
