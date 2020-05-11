import NetInfo from '@react-native-community/netinfo';
/**
 * @param {*} component
 * @return {*} connectivity
 * @description it checks the network connectivity
 */
const checkNetworkConnectivity = (component) => {
  NetInfo.addEventListener((state) => {
    component.setState({
      networkInfo: state.type,
      isConnected: state.isConnected,
      isInternetReachable: state.isInternetReachable,
    });
  });
};

export default checkNetworkConnectivity;
