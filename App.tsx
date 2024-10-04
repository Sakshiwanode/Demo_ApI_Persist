import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { ActivityIndicator } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator size="large" color="#0000ff" />} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
