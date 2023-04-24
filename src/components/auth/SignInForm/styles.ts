import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: '#44a4a5',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerView: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: '#44a4a5',
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 8,
  },
  socialWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
    gap: 8,
    width: '100%',
  },
  fb: {
    backgroundColor: '#0B7DFD',
  },
  apple: {
    backgroundColor: '#354052',
  },
  google: {
    backgroundColor: '#FF695B',
  },
  socialBtn: {
    paddingVertical: 11,
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  socialFbBtnIcon: {
    width: 10,
  },
  socialBtnIcon: {
    flex: 1,
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  disabled: {
    color: 'white',
    backgroundColor: 'gray',
  },
});
