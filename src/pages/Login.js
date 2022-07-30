import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {TextField,Button} from '@mui/material'
import {Login, googleLogin} from '../config/firebase'
const Page1 = () => {
    console.log('aaa')
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const  handleChange = (e) => {
        setEmail(() => e.target.value)
        
    }

    const  handlePass = (e) => {
        setPassword(() => e.target.value)
        
    }

    const handlelogin = async () =>{
        try {
         
        console.log(email)
        console.log(password)
        const result = await Login(email,password)
        console.log(result)   
        navigate('/page3')
        } catch (error) {
            console.log('error now')
            setError('Eメールかパスワードが違います')
        }
        // if(result==='success'){
        //     
        // }else{
        //     console.log('error')
        //     setError('Eメールかパスワードが違います')
            
        //     if(email){
        //         
        //     }else if(){

        //     }
        // }
        // }
    }

    const handleloging = async() =>{ 
        try{
     await googleLogin()
    navigate('/page3')
        }catch (error) {
            console.log('error now')
            setError('パスコードが間違っています')
        }
    }


    

    return(
        <div>
            <h1>Login</h1>
            <TextField id="standard-basic" label="email" variant="standard" onChange={handleChange} />
        <TextField id="standard-basic" label="password" variant="standard" onChange={handlePass}/>
            <Button
            variant="contained"
            color="primary"
            onClick={handlelogin}
            >
                LOGIN
            </Button>
            <Button
            variant="contained"
            color="primary"
            onClick={handleloging}
            >
                Google Login
            </Button>
            <p>{error}</p>
            <Link to='page2'>アカウント作成</Link>
            
        </div>
    )

}

export default Page1