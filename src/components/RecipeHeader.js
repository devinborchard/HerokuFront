
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    Link
  } from "react-router-dom";
import {removeUser} from '../reducers/slices'
import { useNavigate  } from 'react-router-dom';
import logo from '../assets/logo.png'
import { colors } from '../assets/styles';

function RecipeHeader({scrollAbout, scrollContact}) {

    const buttonStlye = {color: colors.light}
    return(
        <>
        <div className='sticky'>
        <div className='header'>
            <table><tbody><tr>
                <td style={{width:'50%', color:'white'}}>Insert Name Here</td>
                <td><a href="/"><button onClick={(e)=>{ e.preventDefault();}} style={buttonStlye} className='header_button'>Login</button></a></td>
                <td><a href="/"><button onClick={(e)=>{ e.preventDefault();}} style={buttonStlye} className='header_button'>Sign Up</button></a></td>
            </tr></tbody></table>
            </div>
        </div>
        <div className='headerSpacer'></div>
            <h1>SPACER, SHOULDNT SEE THIS TEXT</h1>
        </>
    )

    
}

export default RecipeHeader