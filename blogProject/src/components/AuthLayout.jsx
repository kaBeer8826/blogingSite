
import React, {useState,useEffect} from 'react';
import { UseSelector, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({children,authentication =true}){
    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authSataus = useSelector(state =>state.auth.status)
    useEffect(()=>{
        if(authentication && authSataus !== authentication){
            navigate('/login')
        }
        else if(!authentication && authSataus !== authentication){
            navigate('/')
        }
        setLoader(false)
    },[authSataus,navigate,authentication])
    return(
        <div>
            <h1>Protected</h1>
            </div>
    )
}