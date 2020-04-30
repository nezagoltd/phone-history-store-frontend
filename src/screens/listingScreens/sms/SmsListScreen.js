import React, { Component } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';
import ListingSms from '../../../components/ListingSms';

/**
 * @class
 * @classdesc
 */
export default class SmsListScreen extends Component {
  /**
   * @constructor
   * @param {object} props
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
  componentDidMount = async () => {
    if (Platform.OS !== 'ios') {
      try {
        const smsPermsReq = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_SMS,
          {
            title: 'Phone History Store',
            message:
              'It is requesting for SMS permissions to access your SMS Boxes',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (smsPermsReq === PermissionsAndroid.RESULTS.GRANTED) {
          const smsFilter = {
            box: 'sent',
          };
          SmsAndroid.list(JSON.stringify(smsFilter),
            // eslint-disable-next-line no-unused-vars
            (fail) => {
              // console.log(
              //   'Retrieving sms failed because of the following error ',
              //   fail,
              // );
            },
            (count, smsList) => {
              const smsArr = JSON.parse(smsList);
              this.setState({ FlatListItems: smsArr });
            });
        }
      } catch (err) {
        // alert(err);
      }
    } else {
      // alert(
      //   'You cannot access sms list on iPhone, because of security concern!',
      // );
    }
  };

  /**
  *
  * @returns {*} ListOfSms
  * @function
  * @description it takes navigation from props and it returns the
  * ListOfSms UI
  */
  render() {
    const { FlatListItems } = this.state;
    return <ListingSms FlatListItems={FlatListItems} />;
  }
}
