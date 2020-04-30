import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import CallLogPermsReqsScreen from './src/screens/permissionScreen/CallLogPermsReqsScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import DashbordScreen from './src/screens/DashboardScreen';
import SmsPermsReqsScreen from './src/screens/permissionScreen/SmsPermsReqsScreen';
import SmsListScreen from './src/screens/listingScreens/sms/SmsListScreen';
import IncomingCallScreen from './src/screens/listingScreens/calls/IncomingCallScreen';
import OutgoingCallScreen from './src/screens/listingScreens/calls/OutgoingCallScreen';
import MissedCallScreen from './src/screens/listingScreens/calls/MissedCallScreen';
import RejectedCallScreen from './src/screens/listingScreens/calls/RejectedCallScreen';
import BlockedCallScreen from './src/screens/listingScreens/calls/BlockedCallScreen';

const navigator = createSwitchNavigator(
  {
    WelcomeScreen,
    DashbordScreen,
    CallLogPermsReqsScreen,
    SmsPermsReqsScreen,
    SmsListScreen,
    IncomingCallScreen,
    OutgoingCallScreen,
    MissedCallScreen,
    RejectedCallScreen,
    BlockedCallScreen
  },
  {
    initialRouteName: 'DashbordScreen',
    defaultNavigationOptions: {
      title: 'Phone History Store',
    },
  },
);

export default createAppContainer(navigator);
