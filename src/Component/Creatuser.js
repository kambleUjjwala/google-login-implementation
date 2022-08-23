import React from 'react';

import {useNavigate } from 'react-router-dom';

import { Formik ,Form,Field, ErrorMessage} from 'formik';
import { Amplify, Auth } from 'aws-amplify';


const signup=({name,email,password})=>{
  Auth.signUp({
    username:email,
    password,
    attributes: {
      name,
        email,        
    }
    
  })
  .then(data => window.location.href = "/Confirmuser")
  
  .catch(err => console.log("failed", err));




}
const Creatuser=()=>{
 
  
  const navigate = useNavigate();

  const navigateTosignin = () => {
    // 👇️ navigate to /contacts
    navigate('/');
  };
  


  return(
    <>
    
    <div className="col-md-12">
   <div className="container text-center">
      <div className="row">
      <div class="col-md-4"></div>
        
        <div className=" col-md-6 card">
      <h2 className="formtitle"> Sign UP </h2>
      <p>If you  have account then <button className="useraccount" onClick={navigateTosignin}>Sign IN</button>  </p>
        
          <Formik 
          initialValues={{fullname:"userName"}}
           onSubmit={(values) =>{ console.log("values",values)
           signup(values)
          }}
          >


        {(props)=>( <Form>
          <label className="labelname"> Name:</label>
           <Field name="fullname" placeholder='Enter full name'/>
           <ErrorMessage name="fullname" component="div"></ErrorMessage>
           <br/>
           <br/>
           <label className="labelname"> Email ID:</label>
           <Field type="email" name="email" placeholder='Enter full Email'/>
           <br/>
           <br/>
           <label className="labelname"> Password:</label>
           <Field type="password" name="password" placeholder='Enter full password' />
           <br/>
           <br/>
           <button className="text-center btnclass">Sign Up</button>
           </Form>)}
        
           </Formik>
    </div>
           <div class="col-md-2"></div> 
      </div>
   </div>
   </div>
    
    </>

  )
}

export default Creatuser;