import React from 'react';
import Navigator from './routes/drawer';

import Amplify from 'aws-amplify';
// Get the aws resources configuration parameters
import awsconfig from './aws-exports'; // if you are using Amplify CLI

Amplify.configure(awsconfig);


export default function App() {
  return (
    <Navigator />
  );
}
