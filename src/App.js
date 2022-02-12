import './App.css';
import {useEffect, useState} from "react";
import Axios from "axios";
import Coin from "./components/Coin"

function App() {

 const [listOfCoins,setListOfCoins] =  useState([])
 const [searchWord, setSearchWord] = useState("");

   useEffect(() =>{
   Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then(
     (response) => {
      setListOfCoins(response.data.coins);
   }
   );
   },[]);

   const filteredCoins = listOfCoins.filter((coin) => {
     return coin.name.toLowerCase().includes(searchWord.toLocaleLowerCase());
   });




  return (
    <div className="App">
      <div className="header">
        <input  type="text" placeholder = "Search.." 
        onChange={(event) => {
          setSearchWord(event.target.value)
          }}>

        </input>
      </div>
      <div className="display">
        {filteredCoins.map((coin) => {
          return (
          <Coin 
            icon = {coin.icon}
            name={coin.name} 
            price={coin.price} 
            symbol= {coin.symbol} 
            websiteUrl={coin.websiteUrl}
          />)
        })}
      </div>
        
    </div>
  );
}

export default App;
