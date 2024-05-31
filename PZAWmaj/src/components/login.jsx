import { useState } from "react";

const Login = () => {
    const [textLogin, setTextLogin]= useState("")
    const [textHaslo, setTextHaslo]= useState("") 
    const [logowanie, setLogowanie] = useState(false)
    const buttonHandler = () =>{
        if(textLogin == "batman3"){
            if(textHaslo == "batman69PL"){
                setLogowanie(true)
            }
        }
    }
    return(<>
        {logowanie ? <div>LALALA</div>:<div>
    <input type="text" placeholder="login" onChange={e=>{setTextLogin(e.target.value)}}></input>
    <input type="text" placeholder="hasło" onChange={e=>{setTextHaslo(e.target.value)}}></input>
    <input type="button" value="zaloguj" onClick={buttonHandler}></input>
    </div>
    }
    </>

    )
}

export default Login