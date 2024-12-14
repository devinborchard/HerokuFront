import React, { useState, useEffect } from 'react'
import {verifyCreds} from '../../utils/requests'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../reducers/slices';
import { colors } from '../../assets/styles';
import { useNavigate  } from 'react-router-dom';

function Login(props) {
    const navigate  = useNavigate();
    const user = useSelector((state) => state.user.value)
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    console.log('user: ', user)
    let loggedIn = user.payload? true:false
    useEffect(()=>{
        if(loggedIn){
            navigate('/recipes');
        }
    }, [])

    const validateInputs = (userName, password) => {
        setError('')
        if(userName.length == 0){
            setError('Enter User Name')
            return false
        }
        if(password.length == 0){
            setError('Enter Password')
            return false
        }
        return true
    }

    const handleLogin =  async (event) => {
        event.preventDefault()
        const formResults = document.forms[0];
        const userName = formResults.userName.value
        const password = formResults.password.value

        let pass = validateInputs(userName,password)
        if(pass){
            let result = await verifyCreds(userName, password)
            let user = result.data.data[0]
            console.log('VAR SUER: ', user)
            if( user){
                dispatch(setUser(user))
                localStorage.setItem('user',JSON.stringify(user))
                navigate('/recipes');
            }else{
                setError('User Name or Password are incorrect')
            }
        }
    };
    return (
        <div className="login">
            <form onSubmit = {handleLogin}>
                <p className='error_text'>{error}</p>
                <table className='table'><tbody>
                    <tr><td>
                        <table className='table'><tbody>
                            <tr>
                                <td><label className='basic_text' style={{color:colors.light}}>User Name:  </label></td>
                                <td><input className='input' type="text" name="userName"></input></td>
                            </tr>
                            <tr>
                                <td><label className='basic_text' style={{color:colors.light}}>Password:  </label></td>
                                <td><input className='input' type="password" name="password"></input></td>
                            </tr> 
                        </tbody></table>
                    </td></tr>
                    <tr><td>
                        <button className='recipeButton' type="submit">Login</button>
                    </td></tr>
                </tbody></table>
                
            </form> 
        </div>
    );
}

export default Login