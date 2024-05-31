import { useState } from "react";
import axios from "axios";

const View = () => {
    const [listAll, setListAll] = useState([])
    const allHandler = async() => {
        const response = await axios.get("http://localhost:8000/api/gotham/")
        console.log(response.data)
        let All = response.data
        setListAll(All)
    }

         
 

    return(<>
        <input type="button" value="pokaż osadzonych" onClick={allHandler}></input>
        <table>
            <tr>
                <td>main</td>
                <td>info</td>
            </tr>{
                listAll.map((value,index)=>{return(
                    <tr key={index}><td>{value.main}</td><td>{value.info}</td></tr>
                )})
            }
        </table>


    </>
    )
}

export default View