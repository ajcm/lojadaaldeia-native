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
import Amplify from "aws-amplify";
import rootReducer from './src/state/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Auth, Hub } from 'aws-amplify';

import AuthStack from './src/routes/authStack';
import AppStack from './src/routes/appStack';


Amplify.configure(
  {
    Auth: {
        identityPoolId: "eu-west-1:75e3b1a5-aa70-4d12-a95a-8607bce7d378",
        region: 'eu-west-1', 
        userPoolId: "eu-west-1_mYdYam566",
        userPoolWebClientId: 'm7hlnqu5a0b2247ek46foi4e6',
    },
    Analytics: {
      disabled: true,
    },
    API: {
        endpoints: [
          {
              name: "userdetails-service111",
              endpoint: "https://qg0h01w3zg.execute-api.eu-west-1.amazonaws.com/dev/details/",
          },
          {
            name: "userdetails-service",
            endpoint: "https://qg0h01w3zg.execute-api.eu-west-1.amazonaws.com/dev/details/",
            custom_header: async () => {         
              return { Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`}
          },
        
        }
      ]
    }
  }
);

 // create redux store
 const loggerMiddleware = createLogger();

 const store = createStore(
   rootReducer,
   applyMiddleware(
     thunkMiddleware,
     //loggerMiddleware
   )
 );

export default function App({props}) {

  let [user, setUser] = React.useState(null);

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

  const theme = false ? CustomDarkTheme : CustomDefaultTheme;

  useEffect(() => {
    let updateUser = async authState => {
      try {
        let user = await Auth.currentAuthenticatedUser()
        setUser(user)
      } catch {
        setUser(null)
      }
    }
    Hub.listen('auth', updateUser);
    updateUser();
    return () => Hub.remove('auth', updateUser)
  }, []);

  return (    
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        {
          user ? (<AppStack />) : (<AuthStack />)
        }
      </NavigationContainer>
    </Provider>
  );
}
