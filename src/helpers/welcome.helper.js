import axios from 'axios';
/**
 * @param {*} component
 * @return {*} welcomeText
 * @description it calls the end point of welcome screen and it sets the state
 * to welcome message returned by the enpoint
 */
const welcomeFunction = async (component) => {
  const welcomeText = await axios.get('http://phone-history-store-backend.herokuapp.com/');
  component.setState({ welcomeText: welcomeText.data.message });
};

export default welcomeFunction;
