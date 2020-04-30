import React, { Component } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import CallLogs from 'react-native-call-log';
import { ListCalls } from '../../../components/ListingCalls';

/**
 * @class
 */
class BlockedCallScreen extends Component {
  /**
   *
   * @param {*} props
   * @constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
  }


  /**
  *
  * @returns {*} setStates
  * @function
  * @description it set the states
  */
  async componentDidMount() {
    if (Platform.OS !== 'ios') {
      try {
        // permission
        const callPermsGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
          {
            title: 'Phone History Store',
            message:
              'Phone History Store is requesting for permissions to access your call logs',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (callPermsGranted === PermissionsAndroid.RESULTS.GRANTED) {
          const allCalls = await CallLogs.loadAll();
          const clockedCalls = [];
          allCalls.forEach((currCall) => {
            const currentCall = currCall;
            if (currCall.rawType === 6) {
              currentCall.callType = 'Blocked call';
              clockedCalls.push(currentCall);
            }
          });
          this.setState({ FlatListItems: clockedCalls });
        } else {
          // alert('Access Call log permissions denied');
        }
      } catch (err) {
        // alert(err);
      }
    } else {
      // alert(
      //   'Sorry! You cannot get call logs on iPhone because of the security concern!',
      // );
    }
  }

  /**
  *
  * @returns {*} setStates
  * @function
  * @description it renders the ui
  */
  render() {
    const { FlatListItems } = this.state;
    return <ListCalls FlatListItems={FlatListItems} />;
  }
}

export default BlockedCallScreen;
