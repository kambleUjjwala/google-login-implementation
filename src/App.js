import 'bootstrap/dist/css/bootstrap.min.css';
import React  from 'react';
import './App.css';

import {Routes, Route } from 'react-router-dom';


import { Amplify, Auth } from 'aws-amplify';
import  SignInuser from './Component/SignInuser';
import  Creatuser from './Component/Creatuser';
import  Confirmuser from './Component/Confirmuser';
import  Home from './Component/Home';



 

Amplify.configure({
  Auth: {

      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      identityPoolId: "us-west-2:6609ec44-0bf3-4703-a3cf-c5802c1bb1bd",
      
      // REQUIRED - Amazon Cognito Region
      region: 'us-west-2',

      // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
      // Required only if it's different from Amazon Cognito Region
      identityPoolRegion: 'us-west-2',

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: 'us-west-2_ptOGhQuqz',

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: 'ukqrarmp6eo0qssprulo8hgbp',

        oauth:{
          domain: 'https://checkdemo.auth.us-west-2.amazoncognito.com',
          redirectSignIn:'https://localhost:3000/',
          redirectSignOut: 'https://localhost:3000/',
          responseType:'code'

        }
     
  }
});




const App=()=>{
  
  
  return(
    <>
  <Routes>
  <Route exact  path='/' element ={<SignInuser/>}/>
    <Route path='creatuser' element ={<Creatuser/>}/>
    <Route path='confirmuser' element ={<Confirmuser/>}/>
    <Route path='home' element ={<Home/>}/>
  </Routes>
 

 

    
    
    </>

  )
}

export default App;