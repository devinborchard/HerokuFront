
import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
import { colors } from '../assets/styles';
import List from './Todo/List';
import {Pages} from './Top';

function TopNav({setCurrentPage}) {

    const navigate  = useNavigate();

    const [lists, setLists] = useState([0])

    useEffect(()=>{
            
    }, [])
    
    return(
        <>
        <div>
            <table><tbody>
                <tr><td><button className="button-5" onClick={()=>{setCurrentPage(Pages.TODO)}}>Todo</button></td></tr>
                <tr><td><button className="button-5" onClick={()=>{setCurrentPage(Pages.JOURNAL)}}>Journal</button></td></tr>
                <tr><td><button className="button-5" onClick={()=>{setCurrentPage(Pages.CALENDAR)}}>Calendar</button></td></tr>
            </tbody></table>
        </div>
        </>
    )
}

export default TopNav