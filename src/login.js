import 'bootstrap/dist/css/bootstrap.min.css';
import React , {useState, useEffect} from 'react';
import './App.css';




import { Amplify, Auth,  } from 'aws-amplify';


 

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

     
  }
});


const initialFormState ={
  username:'', password:'', email:'', authCode:'', formType:'signUp'

}


function App (){
  const [formState, updateFormState] = useState(initialFormState)
  function onChange(e){
    e.persist()
    updateFormState(() => ({...formState,[e.target.name]: e.target.value}))
   
}
const {formType} =formState

async function signUp(){
  const {username,email,password } =formState
  await Auth.signUp({username, password , attrinute:{email}})
  updateFormState(() => ({...formState, formType:"confirmSignUp"}))
}

async function confirmSignUp(){
  const {email,authcode } =formState
  await Auth.confirmSignUp(email,authCode)
  updateFormState(() => ({...formState, formType:"signIn"}))
}
async function signIn(){
  const {email,password } =formState
  await Auth.signIn(email,password)
  updateFormState(() => ({...formState, formType:"signedIn"}))
}

  return(
    <div className="App">
{
  formType === 'signUp ' && (
    <div>
      <input name="username" onChange={onChange} placeholder ="username" />
      <input name="password" type="password" onChange={onChange} placeholder ="password" />
      <input name="email" type="email" onChange={onChange} placeholder ="email" />
      <button onclick={signUp}>Sign Up</button>


      </div>
  )
}

{
  formType === 'confirmSignUp ' && (
    <div>
       <input name="authCode"  onChange={onChange} placeholder ="confirmation Code" />
      <button onclick={confirmSignUp}>Confirm SignUp</button>
      

      </div>
  )
}


{
  formType === 'signIn ' && (
    <div>
       <input name="email" type="email" onChange={onChange} placeholder ="email" />
      <input name="password" type="password" onChange={onChange} placeholder ="password" />
     
      <button onclick={signIn}>Sign In</button>
      

      </div>
  )
}



{
  formType === 'signedIn ' && (
    <div>
     <h1>welcome</h1>
      </div>
  )
}


    </div>
  );
}




export default App;
