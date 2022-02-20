import { CheckCircleFilled, NotificationOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
const {Search} = Input
const NewsUpdates = () => {
    return <div className='containiner news-container'>
     <div className='update-header'> <h3 className='update-title'>Sign Up for Updates</h3>    <div className='icon-container'>
         <NotificationOutlined style={{fontSize: "40px"}}/>
     </div></div> 
      <p className='update-body'>We'll send you fresh news 
      about our platform, <br />including new listed books
      and discounts for the community.</p>
      <div className='subscribe-container'>
      <Input   placeholder='Your Email Here'   style={{width: "70%", height: "50px"}}/>  
      <button className='submit-btn'> <CheckCircleFilled style={{fontSize: "20px", color: "white"}}/>  submit</button>
      </div>
      
    </div>;
}



export default NewsUpdates;