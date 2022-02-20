import React from 'react';
import { Button, Input, Tooltip, Typography } from 'antd'
import {} from '@ant-design/icons'
import {} from 'react-moralis'
import { useMoralis } from 'react-moralis';

const {Search} = Input
const {Title, Text} = Typography

const Navbar = () => {
    const {authenticate, isAuthenticated, account, isAuthenticating} = useMoralis()
    return <div className=' container nav-container'>
        <div className='nav-left'>
            <p className='logo'> <span className='unlock-starter'>u</span>nlock book shop</p>
        </div>
        <div className='nav-center'>
           <Search
           placeholder='search books '   
           enterButton
           
           style={{width: 500}}


           />
        </div>
        <div className='nav-right'>
            <Button type='primary' style={{textTransform: "capitalize", fontSize: "14px"}} onClick={authenticate}>Connect Wallet</Button>
        </div>

    </div>;
}


export default Navbar;