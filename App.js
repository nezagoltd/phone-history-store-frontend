import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import PhoneNumberScreen from './src/screens/signup/PhoneNumberScreen';
import store from './src/store';
import EnterNamesScreen from './src/screens/signup/NamesScreen';
import EnterEmailAndAgeScreen from './src/screens/signup/EmailAndAgeScreen';
import EnterPasswordScreen from './src/screens/signup/PasswordScreen';
import LoginScreen from './src/screens/login/loginScreen';
import WelcomeScreen from './src/screens/welcome/WelcomeScreen';
import obj from './src/database/connectToDb';
import DashboardScreen from './src/screens/dashbords/dashbordScreen';

/**
 * @return {*} renders the UI
 */
const App = () => {
  const Stack = createStackNavigator();
  obj.prepareDb();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
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
          <Stack.Screen
            name="DashboardScreen"
            component={DashboardScreen}
            options={{ title: 'Dashboard' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
