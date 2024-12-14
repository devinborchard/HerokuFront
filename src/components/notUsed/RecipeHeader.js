
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    Link
  } from "react-router-dom";
import {removeUser} from '../../reducers/slices'
import { useNavigate  } from 'react-router-dom';
import logo from '../assets/logo.png'
import { colors } from '../../assets/styles';
import { setUser } from '../../reducers/slices';

function RecipeHeader({scrollAbout, scrollContact}) {
    const navigate  = useNavigate();
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user.value)

    let loggedIn = user.payload? true:false
   

    const buttonStlye = {color: colors.light}

    const logout = (e) => {
        e.preventDefault()
        dispatch(setUser(undefined))
        window.localStorage.clear();
        navigate('/recipes');
    }

    let headerButtons
    if(!loggedIn){
        headerButtons = (
            <>
            <td><a href="/"><button onClick={(e)=>{ e.preventDefault(); navigate('/login');}} style={buttonStlye} className='header_button'>Login</button></a></td>
            <td><a href="/"><button onClick={(e)=>{ e.preventDefault(); navigate('/signup');}} style={buttonStlye} className='header_button'>Sign Up</button></a></td>
            </>
        )
    }else{
        headerButtons = (
            <>
            <td><a href="/"><button onClick={logout} style={buttonStlye} className='header_button'>Logout</button></a></td>
            <td>{user.payload.email}</td>
            </>
        )
    }

    return(
        <>
        <div className='sticky'>
        <div className='header'>
            <table><tbody><tr>
                <td style={{width:'50%', color:'black'}}><h2>Devin's Recipe Index</h2></td>
                {headerButtons}
            </tr></tbody></table>
            </div>
        </div>
        <div className='headerSpacer'></div>
            <h1>SPACER, SHOULDNT SEE THIS TEXT</h1>
        </>
    )

    
}

export default RecipeHeader