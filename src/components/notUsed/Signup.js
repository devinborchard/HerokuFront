import React, { useState, useEffect } from 'react'
import {checkCredsAvailable, createUser} from '../../utils/requests'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../reducers/slices';
import { useNavigate  } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { colors } from '../../assets/styles';

function Signup(props) {
    const navigate  = useNavigate();
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()

    const [formDetails, setForm] = useState(
        [
            {
                label: 'User Name',
                type: 'text',
                name: 'userName',
                error: null,
            },
            {
                label: 'First Name (optional)',
                type: 'text',
                name: 'firstName',
                error: null,
            },
            {
                label: 'Last Name (optional)',
                type: 'text',
                name: 'lastName',
                error: null,
            },
            {
                label: 'Email',
                type: 'text',
                name: 'email',
                error: null,
            },
            {
                label: 'Password',
                type: 'password',
                name: 'password1',
                error: null,
            },
            {
                label: 'Re-enter Password',
                type: 'password',
                name: 'password2',
                error: null,
            },
        ]
    ) 
     
    let loggedIn = user.payload? true:false
    useEffect(()=>{
        if(loggedIn){
            navigate('/recipes');
        }
    }, [])

    const setError = (fieldName, error) => {
        let formDetailsCopy = [...formDetails]
        formDetailsCopy.forEach(entry => {
            if(entry.name === fieldName){
                entry.error = error
            } 
        })
        setForm(formDetailsCopy)
    }

    const verifySignUpInputs = async (formResults) => {

        //check that the passwords are the same
        setError('password1', null) //reset error message  incase its a retest and value was errored before
        if(formResults['password1'].value !== formResults['password2'].value){
            setError('password1', 'Passwords do not match')
            return false
        }

        //check the username is long enough
        setError('userName', null) //reset error message  incase its a retest and value was errored before
        if(formResults.userName.value.length < 3){
            setError('userName', 'User Name has to be at least 3 characters')
            return false
        }

        setError('email', null) //reset error message  incase its a retest and value was errored before
        if(!formResults.email.value.includes('@') || !formResults.email.value.includes('.')){
            setError('email', 'Must be a valid email')
            return false
        }

        //check the availability of the username and email
        const available = await checkCredsAvailable(formResults.email.value, formResults.userName.value)
        if(available.data.available)
            return true
        else{
            if(available.data.message === 'Email is already in use' ){
                setError('email', available.data.message)  
            }
            if(available.data.message === 'Username is taken' ){
                setError('userName', available.data.message)  
            }
            return false
        }
            
    }

    const handleSignup =  async (event) => {
        event.preventDefault()
        const formResults = document.forms[0];
        const pass = await verifySignUpInputs(formResults)
        
        if(pass){
            const result = await createUser(formResults)
            console.log('RESULT: ', result)
            if(result.status == 200 && result.data.data.message == 'userCreated'){
                const userId = result.data.data.userId
                //login
                const user = {
                    first_name:formResults.firstName.value,
                    last_name:formResults.lastName.value,
                    email:formResults.email.value,
                    id:userId,
                    password:formResults.password1.value,
                    permissions:null,
                    user_name:formResults.userName.value,
                }
                dispatch(setUser(user))
                localStorage.setItem('user',JSON.stringify(user))
                navigate('/recipes');
            }

        }
        
    };

    const createForm = () => {

        const renderErrors = (i) => {
            if(formDetails[i].error)
                return <td><label className='error_text'>{formDetails[i].error}</label></td>
            return 
        }

        let form =  formDetails.map((entry, i)=>{
            return (
                <tr key = {`form row ${i}`}>
                    <td><label className='basic_text' style={{color:colors.light}}>{entry.label}:</label></td>
                    <td><input className='input' type={entry.type} name={entry.name}></input></td>
                    {renderErrors(i)}
                    
                </tr>
            )
        })

        return form
    }

    return (
        <div className="login">
            <form onSubmit = {handleSignup}>
                <table className='table'><tbody>
                    <tr><td>
                        <table className='table'><tbody>
                            {createForm()}
                        </tbody></table>
                    </td></tr>
                    <tr><td>
                        <button className='recipeButton' type="submit">Signup</button>
                    </td></tr>
                </tbody></table>
            </form> 
        </div>
    );
}

export default Signup