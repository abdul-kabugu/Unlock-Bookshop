import { FileSearchOutlined,DownloadOutlined } from '@ant-design/icons/lib/icons';
import React from 'react';
import { Button, Typography } from 'antd';
import { Books } from '../Books';
const { Title, Text} = Typography

console.log(Books)
const Products = ({payWallStatus}) => {
    console.log("this  is is paywall from product" +  " " + payWallStatus)
    return <div className=' container products-container'>
    
       <Title>trending  books</Title> 
       <div className='book-card-container'>
       {Books.map(book =>(
       
           <div className='book-card' key={book.id}>
               <img src={book.img}  alt='' className='card-img'   />
               <p className='card-title'>{book.title}</p>
               {//payWallStatus === 'unlock' && book.isFree !== true?  <button className='card-btn'> <DownloadOutlined  style={{color: "white", fontSize: "20px",}}/> donload </button>:
               //<button className='card-btn'> <DownloadOutlined  style={{color: "white", fontSize: "20px",}}/> buy NFT</button>
                payWallStatus === 'unlocked'?  <button className='card-btn'> <DownloadOutlined  style={{color: "white", fontSize: "20px",}}/> donload </button>:
                <button className='card-btn' onClick={() => window.unlockProtocol && window.unlockProtocol.loadCheckoutModal()}> <DownloadOutlined  style={{color: "white", fontSize: "20px",}}/> buy NFT</button>
 
               }
           </div>
          
       ))}
       </div>
       
    </div>;
}



export default Products;


   // payWallStatus === 'locked'  && book.isFree === 'false'?
    //><button className='card-btn'> <DownloadOutlined  style={{color: "white", fontSize: "20px",}}/> buy NFT</button:
  //   <button className='card-btn'> <DownloadOutlined  style={{color: "white", fontSize: "20px",}}/> donload </button>
   