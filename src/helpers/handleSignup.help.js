import axios from 'axios';

/**
 *
 * @param {*} component
 * @return {*} message
 */
const handleSignup = async (component) => {
  const SIGNUP_URL = 'https://phone-history-store-backend.herokuapp.com/users/signup';
  const data = component.state.signupData;
  const res = await axios.post(SIGNUP_URL, data);
  component.setState({ result: res.data });
};

export default handleSignup;
