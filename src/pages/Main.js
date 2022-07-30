import { Button } from '@mui/material'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Logout} from '../config/firebase'

const Page3 = () => {
    console.log('aaa')



    const [error, setError] = useState('')

    const navigate = useNavigate()

    

    const handleClick = async() =>{
        try{
            await Logout()
           navigate('/')
               }catch (error) {
                   console.log('error now')
                   setError('パスコードが間違っています')
               }
           }
    
    
    return(
        <div>
            <h1>Main</h1>
            <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            >
                ログアウト
            </Button>
            <p>{error}</p>
        </div>
    )

}

export default Page3