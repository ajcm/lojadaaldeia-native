import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
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
  let [isLoading, setIsLoading] = React.useState(true);
  let [hasError, setHasError] = React.useState(false);

  useEffect(() => {
    let updateUser = async authState => {
      try {
        await Auth.currentUserPoolUser().then((userInfo) => {
          setIsLoading(false);
          setUser(userInfo);
        }).catch(error => {
          setIsLoading(false);
        });
      } catch {
        setIsLoading(false);
        setUser(null);
        setHasError(true);
      }
    }
    Hub.listen('auth', updateUser);
    updateUser();
    return () => Hub.remove('auth', updateUser)
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (hasError) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Error</Text>
      </View>
    );
  }

  return (    
    <Provider store={store}>
        {
          user ? (<AppStack />) : (<AuthStack />)
        }
    </Provider>
  );
}
