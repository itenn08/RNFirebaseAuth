import {Provider as PaperProvider} from 'react-native-paper';
import RootNavigator from './src/components/Navigation';
import {theme} from './src/constants/theme';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import AppWrapper from './src/components/AppWrapper';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppWrapper>
          <RootNavigator />
        </AppWrapper>
      </PaperProvider>
    </Provider>
  );
}
