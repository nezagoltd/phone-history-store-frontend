import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import PhoneNumberScreen from './src/screens/signup/PhoneNumberScreen';
import obj from './src/screens/welcome/WelcomeScreen';
import store from './src/store';
import EnterNamesScreen from './src/screens/signup/NamesScreen';
import EnterEmailAndAgeScreen from './src/screens/signup/EmailAndAgeScreen';
import EnterPasswordScreen from './src/screens/signup/PasswordScreen';

const { WelcomeScreen } = obj;

/**
 * @return {*} renders the UI
 */
const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="WelcomeScreen"
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="PhoneNumberScreen"
            component={PhoneNumberScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EnterNamesScreen"
            component={EnterNamesScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EnterEmailAndAgeScreen"
            component={EnterEmailAndAgeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EnterPasswordScreen"
            component={EnterPasswordScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
