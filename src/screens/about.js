import React,{useState,useEffect} from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';
import { globalStyles } from '../styles/global';

import {  Auth  } from 'aws-amplify';
import { withAuthenticator,Greetings  } from 'aws-amplify-react-native'

import UserDetails from '../components/userDetails'



//https://docs.amplify.aws/ui/auth/authenticator/q/framework/react-native#using-withauthenticator-hoc

const logout = () => {

  console.log("sing out")
  Auth.signOut()
  .catch(err => console.log(err));

}


const About = ({ navigation })  => {


  const [formState, setFormState] = useState()

  useEffect(() => load(),[]);

  const load = () => {
      Auth.currentUserInfo()
      .then(response => {
          console.log(response.attributes)
          if (response.attributes){
              setFormState(response.attributes)
          }
      })
      .catch(error => console.log(error))        
  }

   


  return (
    <View style={globalStyles.container}>
        <Text>email: {formState ?  formState.email : ''}</Text>
        
        <UserDetails  api="userdetails-service" section="profile"/>

        <Button
          onPress={logout}
          title="Logout"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

     
    </View>
  );
}


export default withAuthenticator(About)