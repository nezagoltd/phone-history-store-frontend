import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SignupScreen from './src/screens/signup/SignupScreen';

const navigator = createSwitchNavigator(
  {
    SignupScreen,
  },
  {
    initialRouteName: 'SignupScreen',
    defaultNavigationOptions: {
      title: 'Phone History Store',
    },
  },
);

export default createAppContainer(navigator);
