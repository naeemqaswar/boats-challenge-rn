import React, {useState} from 'react';

import DisplayContext from "./src/context";
import Home from './src/screens/Home';

export default function App() {
  const [displayStatus, setDisplayStatus] = useState(false);

  return <DisplayContext.Provider value={{displayStatus, setDisplayStatus}}>
    <Home/>
  </DisplayContext.Provider>
}