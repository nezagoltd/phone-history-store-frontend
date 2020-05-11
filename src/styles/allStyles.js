import { StyleSheet } from 'react-native';

const allStyles = StyleSheet.create({
  loadingIcon: {
    height: 50,
    width: 50,
    marginBottom: 100,
  },
  welcomeScreen: {
    backgroundColor: 'rgb(90,100,100)',
    display: 'flex',
    flex: 1,
    padding: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeScreenText: {
    color: 'rgb(255,255,255)',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Cochin',
  },
  getStartedBtn: {
    marginTop: '10%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '5%',
    borderRadius: 50,
    width: '80%',
  },
  signupFormContainer: {
    backgroundColor: 'rgba(90,100,100,0.8)',
    width: '100%',
    height: '100%',
    padding: '2%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  signupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    color: 'rgb(255,255,255)',
  },
  signupInput: {
    color: 'rgb(255,255,255)',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    fontSize: 18,
    width: '100%',
    marginBottom: 5,
  },
  signupBtn: {
    padding: '4%',
    margin: '1%',
    width: '50%',
    borderRadius: 50,
    backgroundColor: 'rgb(200,200,220)',
  },
  nextBtn: {
    height: 60,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,

  },
  nextText: {
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default { allStyles };
