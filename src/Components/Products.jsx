import { FileSearchOutlined,DownloadOutlined } from '@ant-design/icons/lib/icons';
import React,{useState} from 'react';
import { Alert, Button, Typography } from 'antd';
import { Books } from '../Books';
const { Title, Text} = Typography

console.log(Books)
const Products = ({payWallStatus}) => {
    const [isShowModal, setShowModal] = useState(false)
    const  showModal = () => {
        isShowModal === false? setShowModal(true) : setShowModal(false)
        
    }
    console.log("this  is is paywall from product" +  " " + payWallStatus)
    return <div className=' container products-container'>
      {isShowModal && <Alert 
          message="Success"
      description="This  Is  Demo No  Real Books 
      If You Like This Demo Let Me know On twitter / unlock  Discord server
      "
      type="success"
      showIcon
       
       
       />}
       <Title>Trending  books</Title>
        
       <div className='book-card-container'>
    
       {Books.map(book =>(
       
           <div className='book-card' key={book.id}>
               <img src={book.img}  alt='' className='card-img'   />
               <p className='card-title'>{book.title}</p>
               {
                payWallStatus === 'unlocked'?  <button className='card-btn' onClick={showModal}> <DownloadOutlined  style={{color: "white", fontSize: "20px",}}/> donload </button>:
                <button className='card-btn' onClick={() => window.unlockProtocol && window.unlockProtocol.loadCheckoutModal()}> <DownloadOutlined  style={{color: "white", fontSize: "20px",}}/> buy NFT</button>
 
               }
           </div>
          
       ))}
       </div>
       
    </div>;
}



export default Products;


  