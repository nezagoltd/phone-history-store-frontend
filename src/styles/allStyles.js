import { StyleSheet } from 'react-native';

const allStyles = StyleSheet.create({
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
