import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {TextField,Button} from '@mui/material'
import {CreateUser} from '../config/firebase'

const Page2 = () => {
    console.log('aaa')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const  handleChange = (e) => {
        setEmail(() => e.target.value)
        
    }

    const  handlePass = (e) => {
        setPassword(() => e.target.value)
        
    }


    const handlelogin = () =>{
        console.log(email)
        console.log(password)
        CreateUser(email,password)
    }
    const handleloging = () =>{
        
        CreateUser(email,password)
    }
    

    
    

    return(
        <div>
            <h1>CreateUser</h1>
            <p><TextField id="standard-basic" label="email" variant="standard" onChange={handleChange} /></p>
            <p><TextField id="standard-basic" label="password" variant="standard" onChange={handlePass} /></p>
            <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/page3"
            onClick={handlelogin}
            >
                CREATE ACCOUNT
            </Button>
            <button onClick={handleloging}>a</button>
            <p><Link to='/'>Login画面に戻る</Link></p>
        </div>
    )

}

export default Page2