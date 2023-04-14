import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 16,
  },
  button: {
    marginTop: 10,
    borderRadius: 50,
    color: 'white',
    backgroundColor: '#44a4a5',
  },
  disabled: {
    color: 'white',
    backgroundColor: 'gray',
  },
});
