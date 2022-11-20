import './App.scss';
import Header from './components/header';
import Body from './components/body';
import Wallet from './components/wallet';
import Main from './components/main';
import { useState } from 'react';

function App() {
  const [main, displayMain] = useState(false)

  const showMain = function() {
    displayMain(!main)
  }


  return (
    <div className="App">
      {main ? <Main />: <div><Header /> <Body />   <Wallet task={showMain}/>   </div>}
       
    </div>
  );
}

export default App;
