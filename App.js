import React, { useEffect } from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';

import rootReducer from './src/state/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import AppContent from './AppContent'
import Amplify from 'aws-amplify-react-native'
import {  Auth  } from 'aws-amplify';

 // create redux store
 const loggerMiddleware = createLogger();

 const store = createStore(
   rootReducer,
   applyMiddleware(
     thunkMiddleware,
     loggerMiddleware
   )
 );


 Amplify.configure({
  
  Auth: {
      identityPoolId: "eu-west-1:75e3b1a5-aa70-4d12-a95a-8607bce7d378",
      region: 'eu-west-1', 
      userPoolId: "eu-west-1_mYdYam566",
      userPoolWebClientId: 'm7hlnqu5a0b2247ek46foi4e6',
  },
  API: {
      endpoints: [
        
        {
          name: "userdetails-service",
          endpoint: "https://qg0h01w3zg.execute-api.eu-west-1.amazonaws.com/dev/details/",
          custom_header: async () => {         
             return { Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}` , 'X-Api-Key': 'ldamobile'}
        }},
      
  ]
  }
});


export default function App() {

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;


  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <AppContent />
      </NavigationContainer>
    </Provider>
  );
}
