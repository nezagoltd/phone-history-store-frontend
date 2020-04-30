import { StyleSheet } from 'react-native';

const allStyles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(100,120,255)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontSize: 15,
    color: 'rgb(255,255,255)',
    textAlign: 'center',
  },
  touchableBtn: {
    marginTop: -20,
    marginBottom: 10,
    padding: 5,
    width: '80%',
    borderRadius: 30,
    backgroundColor: 'rgba(200,200,220,0.8)',
  },
  dashBoardContainer: {
    backgroundColor: '#4B4A67',
    height: '100%',
    padding: '10%',
    justifyContent: 'center',
  },
  dashBoardBtns: {
    padding: '4%',
    margin: '1%',
    width: '100%',
    borderRadius: 50,
    backgroundColor: 'rgb(200,200,220)',
  },
  dashboardText: {
    textAlign: 'center',
    fontSize: 18,
  },
  iconContainer: {
    marginTop: 50,
    height: 350,
    width: 350,
  },
  welcomeContent: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginTop: 10,
    padding: 10,
    borderRadius: 15,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  listingMainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  listingItem: {
    fontSize: 18,
    padding: 10,
  },
  flatlistItemSeparatorStyles: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgb(0,0,0)',
  },
});

export default allStyles;
