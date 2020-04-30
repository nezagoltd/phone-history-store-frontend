import React from 'react';
import { TextInput } from 'react-native';
import myStyle from '../styles/allStyles';

/**
 * @param {*} props
 * @return {*} InputContainer
 */
const InputComponent = (props) => {
  const { allStyles } = myStyle;
  const { numberOfInputs } = props;
  const inputs = [];
  if (numberOfInputs) {
    for (let i = 1; i <= numberOfInputs; i += 1) {
      inputs.push(<TextInput
        style={allStyles.signupInput}
        placeholderTextColor="rgb(255,255,255)"
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />);
    }
  }
  return inputs;
};

export default InputComponent;
