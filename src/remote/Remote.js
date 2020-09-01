import React, { useEffect, useState } from "react";
import { postTo } from './Utils';
import { API } from 'aws-amplify';

  export const useGetRemote = (api,service) =>{
 
    const [data, setData] = useState({});

    useEffect(() => {

        API.get(api, service, {})
        .then(response => setData(response))
        .catch(error => console.log(error))

    },[])
 
     
    return [data]
  }