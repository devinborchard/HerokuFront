
import React, { useState } from 'react';
import {verifyCreds} from '../utils/requests'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../reducers/slices';

function Login() {

    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()


    const handleLogin =  async (event) => {
        event.preventDefault()
        const formResults = document.forms[0];
        const userName = formResults.userName.value
        const password = formResults.password.value

        let result = await verifyCreds(userName, password)
        if( result.data.data[0]){
            console.log('results: ', result.data.data[0])
            dispatch(setUser(result.data.data[0]))
        }
        
    };
    {console.log('USER: ',user)}
    return (
        <div className="login">
            <form onSubmit = {handleLogin}>
                <table className='table'><tbody>
                    <tr>
                        <td><label className='basic_text'>User Name:  </label></td>
                        <td><input className='input' type="text" name="userName"></input></td>
                    </tr>
                    <tr>
                        <td><label className='basic_text'>Password:  </label></td>
                        <td><input className='input' type="password" name="password"></input></td>
                    </tr> 
                </tbody></table>
                <button className='button' type="submit">Login</button>
            </form> 
        </div>
    );
}

export default Login