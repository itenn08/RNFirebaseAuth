import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    height: '100%',
  },
  title: {},
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
  },
  button: {
    marginTop: 10,
    borderRadius: 50,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerView: {
    flex: 1,
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
  },
  socialWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
});
