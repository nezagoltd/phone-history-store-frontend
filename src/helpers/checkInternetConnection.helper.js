import NetInfo from '@react-native-community/netinfo';
/**
 * @param {*} component
 * @return {*} connectivity
 * @description it checks the network connectivity
 */
const checkNetworkConnectivity = (component) => {
  const networkInfo = [];
  NetInfo.addEventListener((state) => {
    networkInfo.push(state.type, state.isConnected, state.isInternetReachable);
    component.setState({
      networkInfo: state.type,
      isConnected: state.isConnected,
      isInternetReachable: state.isInternetReachable,
    });
  });
  return networkInfo;
};

export default checkNetworkConnectivity;
