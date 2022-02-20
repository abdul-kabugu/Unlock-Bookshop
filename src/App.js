import './App.css';
import  {useState, useEffect} from "react"
import Navbar from './Components/Navbar';
import MainView from './Components/MainView';
import Products from './Components/Products';
import NewsUpdates from './Components/NewsUpdates';
import Footer from './Components/Footer';


function App() {
  const  [payWallStatus, setPayWallStatus] = useState()
  const  [userInfo, setUserInfo] = useState()
 
console.log( "this  is  paywall status" + " " + payWallStatus)
console.log( "this  is  user info" + " " + userInfo)
  
  useEffect(() => {
    window.addEventListener("unlockProtocol.status", function (event) {
        console.log("this  is  from inside  take  a look " + " " + event.detail.state)
        setPayWallStatus(event.detail.state)
    });
    
    window.addEventListener("unlockProtocol.authenticated", function (event) {
      // event.detail.addresss includes the address of the current user, when known
      setUserInfo(event.detail.address)
      
    });
    
    window.addEventListener("unlockProtocol.transactionSent", function (event) {
      // event.detail.hash includes the hash of the transaction sent
    });

 


  }, [])

 
  return (
    <div className="App">
       
      <Navbar />
      <MainView />
      <Products payWallStatus= {payWallStatus}/>
      <NewsUpdates />
      <Footer />
       
      </div>
  );
}

export default App;
