import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import IconContainer from '../../components/IconContainer';
import IntroductionTextContainer from '../../components/IntroductionTextContainer';
import { SMS_PERMISSIONS } from '../../../assets/text/eng/callLogPermissions';
import allStyles from '../../styles/allStyles';

const icon = require('../../../assets/img/phone-history-store-icon.png');


/**
 *
 * @param {*} navigation
 * @returns {*} SmsPermsReqsScreen
 * @function
 * @description it takes navigation from props and it returns the
 * SmsPermsReqsScreen UI
 */
const SmsPermsReqsScreen = ({ navigation }) => {
  SmsPermsReqsScreen.propTypes = {
    navigation: PropTypes.func.isRequired,
  };
  return (
    <View style={allStyles.container}>
      <IconContainer
        iconSource={icon}
      />
      <IntroductionTextContainer textToShow={SMS_PERMISSIONS} />
      <TouchableOpacity
        onPress={() => navigation.navigate('SmsListScreen')}
        style={allStyles.touchableBtn}
      >
        <Text style={allStyles.text}>Sync your sms</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SmsPermsReqsScreen;
