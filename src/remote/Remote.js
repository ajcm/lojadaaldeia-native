import React, { useEffect, useState } from "react";
import { postTo } from './Utils';
import { API } from 'aws-amplify';

  export const useGetRemote = (api,service) =>{
 
    const [data, setData] = useState({});

    useEffect(() => {


        console.log('Load *****************') 
        API.get(api, service, {})
        .then(response =>  { setData(response)
                      console.log(response) } )
        .catch(error => console.log(error))

    },[])
 
     
    return [data]
  }