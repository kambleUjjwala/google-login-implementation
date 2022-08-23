import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { Formik ,Form,Field, ErrorMessage} from 'formik';
import { Amplify, Auth } from 'aws-amplify';
 


const ConfirmCode=(email,code)=>{
  Auth.confirmSignUp(email,code,{
   
    forceAliasCreation:true
    
  })
  .then(data => window.location.href = "/Home")
  .catch(err => console.log("failed", err));

}

{/* new code */}


const Confirmuser=()=>{
  return(
    <>
    <div className="col-md-12">
   <div className="container text-center">
      <div className="row">
      <div class="col-md-4"></div>
        
        <div className=" col-md-6 card">
         
          <Formik 
          initialValues={{name: '', email:'',password:''}}
       
           onSubmit={(values) =>{ console.log("values",values)
           ConfirmCode(values.email,values.code)
          }}
          >


        {(props)=>( <Form>
          <label className="labelname"> Email:</label>
            <Field type="email" name="email" placeholder='Enter full Email'/>
            <br/>
            <br/>
            <label className="labelname"> Verfication Code:</label>
           <Field name="code" placeholder='Enter confirm code'/>
           <br/>
            <br/>
           <button className="text-center btnclass">Log In</button>
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

export default Confirmuser;
