import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getMyProfile from '../../../actions/getMyProfile';
import checkNetworkConnectivity from '../../../helpers/checkInternetConnection.helper';
import styles from '../../../styles/allStyles';

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


  UNSAFE_componentWillMount = async () => {
    checkNetworkConnectivity(this);
  }

  componentDidMount = async () => {
    const { isInternetReachable } = this.state;
    const { getMyProfile: myFunc } = this.props;
    if (isInternetReachable) {
      const { myData } = this.props;
      const { token } = myData.userData;
      await myFunc(token);
    } else {
      alert('We lost your internet, try again');
    }
  }

  /**
   * @method
   * @returns {*} UI
   */
  render() {
    const { myData } = this.props;
    const { myProfile } = myData;
    const myProfPic = require('../../../../assets/img/phone-history-store-icon.png');
    const { allStyles } = styles;
    let displayMyProfile;
    if (myProfile) {
      const myDevices = myProfile.data.devices.map((device) => (
        <View key={device.id}>
          <Text>{device.deviceName}</Text>
        </View>
      ));
      displayMyProfile = (
        <View>
          <Text>
            Age :
            {' '}
            {myProfile.data.age}
          </Text>
          <Text>
            Email :
            {' '}
            {myProfile.data.email}
          </Text>
          <Text>
            Phone Number :
            {' '}
            {myProfile.data.phoneNumber}
          </Text>
          <Text>My devices : </Text>
          {myDevices}
        </View>
      );
    }

    return (
      <View style={allStyles.profileContainterStyles}>
        <ScrollView>
          <View style={allStyles.profilePicContainerStyles}>
            <Image style={allStyles.profilePicStayles} source={myProfPic} />
            <Text style={allStyles.profileNames}>{myProfile ? `${myProfile.data.firstName} ${myProfile.data.lastName}` : ''}</Text>
          </View>
          <View>
            {displayMyProfile}
          </View>
        </ScrollView>
      </View>
    );
  }
}

ProfileTab.propTypes = {
  myData: PropTypes.object.isRequired,
  getMyProfile: PropTypes.func.isRequired,
};

/**
 *
 * @param {*} state
 * @returns {*} state
 */
const mapStateToProps = (state) => ({
  myData: state.myReducers,
});

export default connect(mapStateToProps, { getMyProfile })(ProfileTab);
