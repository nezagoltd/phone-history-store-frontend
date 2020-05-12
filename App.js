import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import SignupScreen from './src/screens/signup/SignupScreen';
import WelcomeScreen from './src/screens/welcome/WelcomeScreen';
import store from './src/store';

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
            name="SignupScreen"
            component={SignupScreen}
            options={{ title: 'Signup' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
