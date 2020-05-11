/**
 *@param {*} component
 *@param {*} nextComponent
 @returns {*} state
 */
const nextFunction = (component, nextComponent) => {
  const { phoneNumber, firstName, lastName, email, age } = component.state;
  const { getUserData: funcGetData, navigation } = component.props;

  if (phoneNumber) {
    funcGetData({ phoneNumber, email, age });
  } else if (firstName || lastName) {
    funcGetData({ firstName, lastName });
  } else if (email || age) {
    funcGetData({ email, age });
  }

  navigation.navigate(nextComponent);
};

export default nextFunction;
