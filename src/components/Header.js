
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    Link
  } from "react-router-dom";
import {removeUser} from '../reducers/slices'
import { useNavigate  } from 'react-router-dom';

function Header() {
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const navigate  = useNavigate();

    let loggedIn = false

    if(Object.keys(user).length){
        loggedIn = true
    }

    const headerBody = () => {
        if(loggedIn){
            return (
                <div>
                    <table><tbody>
                        <tr>
                            <td>
                                <button onClick = {(e)=>{
                                    dispatch(removeUser())
                                    navigate('/')
                                }}>Logout</button>
                            </td>
                            <td>
                            <label>{user.payload.user_name}</label>
                            </td>
                        </tr>
                    </tbody></table>
                </div>
            );
        }else{
            return (
                <div>
                    <a href="/login">
                        <button>Login</button>
                    </a>
                    <a href="/signup">
                        <button>Signup</button>
                    </a>
                </div>
            );
        }
    }

    

    return(
        <>
        <div className='header'>
            {headerBody()}
        </div>
        </>
    )

    
}

export default Header