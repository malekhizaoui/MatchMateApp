import React from 'react';
import NavigationApp from './Navigation/NavigationApp';
import { ToastProvider } from 'react-native-toast-notifications'

function App(): React.JSX.Element {
  return <ToastProvider><NavigationApp/></ToastProvider> ;
}

export default App;
