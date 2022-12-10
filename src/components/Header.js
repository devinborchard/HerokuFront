
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    Link
  } from "react-router-dom";
import {removeUser} from '../reducers/slices'
import { useNavigate  } from 'react-router-dom';
import logo from '../assets/logo.png'
import { colors } from '../assets/styles';

function Header() {
    const navigate  = useNavigate();

    const buttonStlye = {color: colors.light}
    return(
        <div className='sticky'>
        <div className='header'>
            

            <table><tbody><tr>
                <td style={{width:'82%'}}><a href="/">< img style = {{float:'left'}} className='header_logo' src={logo} /></a></td>
                <td><a href="/"><button style={buttonStlye} className='header_button'>My Stuff</button></a></td>
                <td><a href="/"><button style={buttonStlye} className='header_button'>About</button></a></td>
                <td><a href="/"><button style={buttonStlye} className='header_button'>Contact</button></a></td>
            </tr></tbody></table>
            </div>
        </div>
    )

    
}

export default Header