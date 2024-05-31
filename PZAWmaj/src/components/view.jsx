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

    const [listOne, setListOne] = useState(null)
    const [name, setName] = useState("")
    const oneHandler = async() => {
        const response = await axios.get(`http://localhost:8000/api/gotham/${name}`)
        console.log(response.data)
        let One = response.data
        setListOne(One)
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

        <input type="text" placeholder="nazwa osadzonego" onChange={e=>{setName(e.target.value)}}></input>
        <input type="button" value="pokaż osadzonego" onClick={oneHandler}></input>
        <table>
            <tr>
                <td>main</td>
                <td>info</td>
                <td>specinfo</td>
            </tr>
            { listOne != null ?
            <tr>
                <td>{listOne.main}</td>
                <td>{listOne.info}</td>
                <td>{listOne.specinfo}</td>
            </tr>
            :null
        }
        </table>
    </>
    )
}

export default View