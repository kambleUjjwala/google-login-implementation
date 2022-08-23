import React from 'react'
import {useNavigate } from 'react-router-dom';
import { Formik ,Form,Field, ErrorMessage} from 'formik';
import { Amplify, Auth } from 'aws-amplify';




const Home =()=>{
    const navigate = useNavigate();

    const navigateTosignin = () => {
      // 👇️ navigate to /contacts
      navigate('/');

     
    };


    
   
  return (
    <>
    <div class="col-md-12">
    
        
   
    <div className='homeheading'>This Is My Home Page </div>
    <div class="lastbtn">
<button className="text-center btnclass" onClick={navigateTosignin}>Sign Out</button>


</div>
    </div>


    </>
   
  )
}

export default Home;