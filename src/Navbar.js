import React, { useContext } from 'react'
import { Globalinfo } from './App'
import Gujarati from './Gujarati';
import Hindi from './Hindi';


export default function Navbar() {
    const data = useContext(Globalinfo);
    console.log(data);

    const handal = (val) => {
        data[1](val)
    }

    return (
        <>
            <select style={{ margin: "10px" }} onClick={(e) => handal(e.target.value)}>
                <option value="english" >English</option>
                <option value="ગુજરાતી"  >ગુજરાતી</option>
                <option value="hindi"  >Hindi</option>
            </select>

            {
                data[0] == "english" ? (
                    <div style={{ margin: "10px" }}>
                        <h1>Hardik panchal</h1>
                        <h1>i am react developer</h1>
                    </div>)

                    : data[0] == "ગુજરાતી" ? (<Gujarati />)

                        : (<Hindi />)
            }

        </>

    )
}
