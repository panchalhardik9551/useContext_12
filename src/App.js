import { createContext, useState } from 'react';
import './App.css';
import Navbar from './Navbar';


const Globalinfo = createContext()

function App() {

  // const [data, setdata] = useState("english")
  const data = useState("english")
  // const [input, setinput] = useState(data)

  return (
    <>
      <Globalinfo.Provider value={data}>
      {/* <Globalinfo.Provider value={[input, setinput]}> */}
        <Navbar />
      </Globalinfo.Provider>
    </>
  );
}

export default App;
export { Globalinfo }
