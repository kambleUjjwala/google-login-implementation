import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect}  from 'react';

import {useNavigate } from 'react-router-dom';
import { Formik ,Form,Field, ErrorMessage} from 'formik';
import { Amplify, Auth } from 'aws-amplify';




 



const signin=({email,password})=>{

  Auth.signIn(email,password).then(user => console.log('success',user))
  .catch(err => console.log("failed", err));
  
}

{/* new code */}


const SignInuser=()=>{

  useEffect(()=>{
    Auth.currentAuthenticatedUser()
    .then(data => console.log("User Already Logged In ", data))
    .catch(err => console.log(err));
  }, [])
 
    const navigate = useNavigate();

    const navigateTocreateuser = () => {
      // 👇️ navigate to /contacts
      navigate('/Creatuser');
    };
  return(
    <>
  
 

    <div className="col-md-12">
   <div className="container text-center">
      <div className="row">
        <div class="col-md-4"></div>
        
       <div className=" col-md-6 card">
      
       <p>If you don't have account then <button className="useraccount" onClick={navigateTocreateuser}>CREATE ACCOUNT</button>  </p>
          <h2 className="formtitle"> Sign IN </h2>
          <Formik 
          initialValues={{name: '', email:'',password:''}}
       
           onSubmit={(values) =>{ console.log("values",values)
           signin(values)
          }}
          >


        {(props)=>( <Form>
          <label className="labelname"> Name:</label>
          <Field name="fullname" placeholder='enter your name'/>
          <br/>
          <br/>
          <label className="labelname"> Email ID:</label>
          <Field name="email" placeholder='enter your email'/>
          <br/>
           <br/>
           <label className="labelname"> Password:</label>
           <Field type="password" name="password" placeholder='Enter full password' /><br/>
           <br/> <button className="text-center btnclass">Sign In</button>


           </Form>)}
        
           </Formik>
           <button className='btnstylesignin' onClick={() =>{

Auth.federatedSignIn({ provider: 'Google'})

 }}> Sign In With Google</button>

    </div>
   
    <div class="col-md-2"></div>
    </div>
         
      </div>
   </div>
    
    
    </>

  )
}

export default SignInuser;