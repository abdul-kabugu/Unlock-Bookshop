import { InstagramFilled, InstagramOutlined, MediumCircleFilled, TwitterCircleFilled } from '@ant-design/icons';
import React from 'react';

const Footer = () => {
    return <div className=' container footer-continer'>
   <div className='footer-left'>
       <h1 className='footer-titles'>About Us</h1>
       <p className='desc'>
       Add memberships
to yourwebsite app game shopAPI<br />
Unlock ownership of your community, <br /> across all your platforms.
       </p>
       <div className='social-container'>
           <div className='social-icon ig'>
               <InstagramFilled style={{color: "#f759ab", fontSize: "35px", cursor: "pointer"}}/>
           </div>
           <div className='social-icon twitter'>
               <TwitterCircleFilled style={{color: "#69c0ff", fontSize: "35px", cursor: "pointer"}}/>
           </div>
           <div className='social-icon medium' >
               <MediumCircleFilled style={{color: "#262626", fontSize: "35px", cursor: "pointer"}}/>
           </div>

       </div>
   </div>
   <div className='footer-center'>
       <h1 className='footer-titles'>useful  links </h1>
       <ul className='center-list'>
        <li className='center-items'> home</li>
        <li className='center-items'> account</li>
        <li className='center-items'> dashboard</li>
        <li className='center-items'> app store</li>
        <li className='center-items'> play store</li>
        <li className='center-items'> payment methods</li>
       </ul>
   </div>
   <div className='footer-right'>
       <h1 className='footer-titles'>contct us</h1>
       <ul className='right-list'>
           <li className='right-items'>abdulkabugu@gmail.com</li>
           <li className='right-items'>+9109.......</li>
           <li className='right-items'>mumbai pos.. jk..</li>
           <li className='right-items'>costomer care</li>
           <li className='right-items'>abdulkabugu@gmail.com</li>
         
       </ul>
   </div>
    </div>;
}



export default Footer;