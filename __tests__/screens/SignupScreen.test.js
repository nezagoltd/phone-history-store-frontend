import PhoneNumberScreen from '../../src/screens/signup/PhoneNumberScreen';
import {shallow}from 'enzyme';

describe('Signup test', ()=>{
    it('Will show signup screen', ()=>{
        const wrapper = shallow(<PhoneNumberScreen/>);
    });
});
