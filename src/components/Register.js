import React, { useState, useEffect } from 'react'
import {checkUserName, createUser} from '../utils/requests'
import {getStoredUserData} from '../utils/userUtils'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../reducers/slices';
import { colors } from '../assets/styles';
import { useNavigate  } from 'react-router-dom';

function Register(props) {
    const navigate  = useNavigate();
    
    // const user = useSelector((state) => state.user.value)
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    
    useEffect(() => {
        // const storedUser = getStoredUserData();
        // console.log("STORED USER IN LOGIN: ", storedUser);
        // console.log("APP USER IN LOGIN: ", user);
    
        // if (storedUser?.user_id && !user?.user_id) {
        //     console.log("Dispatching stored user to Redux");
        //     dispatch(setUser(storedUser));
        //     navigate('/'); // Redirect to home
        // }
    // }, [dispatch, navigate, user]);
    }, []);

    const validateInputs = async (userName, password, password2) => {
        setError('')
        if(userName.length == 0){
            setError('Enter User Name')
            return false
        }
        if(password.length == 0){
            setError('Enter Password')
            return false
        }
        if(password != password2){
            setError('Passwords dont match')
            return false
        }
        if(!(await checkUserName(userName))){
            setError('User Name taken')
            return false
        }

        return true
    }

    const handleRegister = async (event) => {
        event.preventDefault();
    
        const formResults = document.forms[0];
        const userName = formResults.userName.value;
        const password = formResults.password.value;
        const password2 = formResults.password2.value;
        const name = formResults.name.value;
    
        setError(''); // Reset errors
        
        if (await validateInputs(userName, password, password2)){


            
            const user = {
                user_name: userName,
                name: name,
                password: password
            }

            const {user_id} = await createUser(user);
            // console.log("USERID: ", user_id)
            user['user_id'] = user_id;

            // console.log("NEW USER: ", user)
            console.log("Setting user in local storage and Redux");
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(setUser(user));
            navigate('/');
        }
    };

    return (
        <div className="login">
            <form onSubmit = {handleRegister}>
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
                            <tr>
                                <td><label style={{color:colors.light}}> Retype Password:  </label></td>
                                <td><input type="password" name="password2"></input></td>
                            </tr>
                            <tr>
                                <td><label style={{color:colors.light}}>Name (Optional):  </label></td>
                                <td><input type="text" name="name"></input></td>
                            </tr>
                        </tbody></table>
                    </td></tr>
                </tbody></table>
                <button className = "button-5" style = {{ display: "block", margin: "10px auto", textAlign: "center"}} type="submit">Sign Up</button>
                
            </form> 
        </div>
    );
}

export default Register