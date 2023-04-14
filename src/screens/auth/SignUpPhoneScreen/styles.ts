import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    backgroundColor: '#44a4a5',
  },
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
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
