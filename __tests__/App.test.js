/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Renders correctly', () => {
  renderer.create(<App />);
});
// import App from '../App';
// import SignupScreen from '../../src/screens/signup/SignupScreen';
// import {shallow}from 'enzyme';

// describe('Signup test', ()=>{
//     it('Will show signup screen', ()=>{
//         const wrapper = shallow(<App/>);
//         expect(wrapper.contains(<SignupScreen/>))
//     });
// });

