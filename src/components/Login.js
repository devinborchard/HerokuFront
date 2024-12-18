import React, { useState, useEffect } from 'react'
import {getUser} from '../utils/requests'
import {getStoredUserData} from '../utils/userUtils'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../reducers/slices';
import { colors } from '../assets/styles';
import { useNavigate  } from 'react-router-dom';

function Login(props) {
    const navigate  = useNavigate();
    
    const user = useSelector((state) => state.user.value)
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    
    useEffect(() => {
        const storedUser = getStoredUserData();
        // console.log("STORED USER IN LOGIN: ", storedUser);
        // console.log("APP USER IN LOGIN: ", user);
    
        if (storedUser?.user_id && !user?.user_id) {
            console.log("Dispatching stored user to Redux");
            dispatch(setUser(storedUser));
            navigate('/'); // Redirect to home
        }
    }, [dispatch, navigate, user]);

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

    const handleLogin = async (event) => {
        event.preventDefault();
    
        const formResults = document.forms[0];
        const userName = formResults.userName.value;
        const password = formResults.password.value;
    
        setError(''); // Reset errors
    
        if (!validateInputs(userName, password)) return;
    
        const foundUser = await getUser(userName, password);
        if (foundUser?.user_id) {
            console.log("Setting user in local storage and Redux");
            localStorage.setItem('user', JSON.stringify(foundUser));
            dispatch(setUser(foundUser));
            navigate('/');
        } else {
            setError('User Name or Password are incorrect');
        }
    };

    return (
        <div className="login">
            <form onSubmit = {handleLogin}>
                <p className='error_text'>{error}</p>
                <table style = {{margin : "auto"}}><tbody>
                    <tr><td>
                        <table><tbody>
                            <tr>
                                <td><label style={{color:colors.light}}>User Name:  </label></td>
                                <td><input type="text" name="userName"></input></td>
                            </tr>
                            <tr>
                                <td><label style={{color:colors.light}}>Password:  </label></td>
                                <td><input type="password" name="password"></input></td>
                            </tr> 
                        </tbody></table>
                    </td></tr>
                </tbody></table>
                <button className = "button-5" style = {{ display: "block", margin: "10px auto", textAlign: "center"}} type="submit">Login</button>
                <button onClick={()=>{navigate('/register')}} className = "button-5" style = {{ width:"180px", display: "block", margin: "10px auto", textAlign: "center"}} >Create Account</button>
                
            </form> 
        </div>
    );
}

export default Login