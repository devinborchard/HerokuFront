
import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
import { colors } from '../assets/styles';
import List from './Todo/List';
import {Pages} from './Top';
import { setUser } from '../reducers/slices';
import { useSelector, useDispatch } from 'react-redux'


function TopNav({setCurrentPage}) {

    const navigate  = useNavigate();
    const dispatch = useDispatch()

    const [lists, setLists] = useState([0])

    useEffect(()=>{
            
    }, [])

    const handleLogout = () => {
        const user = {}
        dispatch(setUser(user))
        localStorage.setItem('user',JSON.stringify(user))
        navigate('/login');
    }
    
    return(
        <>
        <div>
            <table><tbody>
                <tr><td><button className="button-5" onClick={()=>{setCurrentPage(Pages.TODO)}}>Todo</button></td></tr>
                <tr><td><button className="button-5" onClick={()=>{setCurrentPage(Pages.JOURNAL)}}>Journal</button></td></tr>
                <tr><td><button className="button-5" onClick={()=>{setCurrentPage(Pages.CALENDAR)}}>Calendar</button></td></tr>
                <tr><td><button className="button-5" onClick={()=>{handleLogout()}}>Logout</button></td></tr>
            </tbody></table>
        </div>
        </>
    )
}

export default TopNav