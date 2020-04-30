import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import allStyles from '../styles/allStyles';

/**
 *
 * @param {*} navigation
 * @returns {*} DashbordScreen
 * @function
 * @description it takes navigation from props and it returns the
 * DashbordScreen UI
 */
const DashbordScreen = ({ navigation }) => {
  DashbordScreen.propTypes = {
    navigation: PropTypes.func.isRequired,
  };
  const { navigate } = navigation;

  return (
    <View style={allStyles.dashBoardContainer}>
      <TouchableOpacity
        style={allStyles.dashBoardBtns}
        onPress={() => navigate('IncomingCallScreen')}
      >
        <Text style={allStyles.dashboardText}>Incoming calls</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={allStyles.dashBoardBtns}
        onPress={() => navigate('OutgoingCallScreen')}
      >
        <Text style={allStyles.dashboardText}>Outgoing calls</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={allStyles.dashBoardBtns}
        onPress={() => navigate('MissedCallScreen')}
      >
        <Text style={allStyles.dashboardText}>Missed calls</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={allStyles.dashBoardBtns}
        onPress={() => navigate('RejectedCallScreen')}
      >
        <Text style={allStyles.dashboardText}>Rejected calls</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={allStyles.dashBoardBtns}
        onPress={() => navigate('BlockedCallScreen')}
      >
        <Text style={allStyles.dashboardText}>Blocked calls</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={allStyles.dashBoardBtns}
      >
        <Text style={allStyles.dashboardText}>Inbox SMS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={allStyles.dashBoardBtns}
      >
        <Text style={allStyles.dashboardText}>Sent box SMS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={allStyles.dashBoardBtns}
      >
        <Text style={allStyles.dashboardText}>Draft SMS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={allStyles.dashBoardBtns}
      >
        <Text style={allStyles.dashboardText}>Outbox SMS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashbordScreen;
