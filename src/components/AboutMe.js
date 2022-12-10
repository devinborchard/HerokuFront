
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    Link
  } from "react-router-dom";
import {removeUser} from '../reducers/slices'
import { useNavigate  } from 'react-router-dom';
import { colors } from '../assets/styles';

function About() {
    const navigate  = useNavigate();


    return(

        <table><tbody><tr>
            <td style={{color:colors.light}}>ABOUT</td>
        </tr></tbody></table>
    )

    
}

export default About