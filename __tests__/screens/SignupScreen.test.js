import SignupScreen from '../../src/screens/signup/SignupScreen';
import {shallow}from 'enzyme';

describe('Signup test', ()=>{
    it('Will show signup screen', ()=>{
        const wrapper = shallow(<SignupScreen/>);
    });
});
