
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    Link
  } from "react-router-dom";
import {removeUser} from '../reducers/slices'
import { useNavigate  } from 'react-router-dom';
import { colors } from '../assets/styles';
import { sendApiEmail } from '../utils/requests';


function Contact() {

    const [formMesage, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        let formData = {
            name:e.target.name.value.trim(),
            email:e.target.email.value.trim(),
            subject:e.target.subject.value.trim(),
            message:e.target.message.value.trim()
        };
        //check input fields
        let errorMessage = ''
        if(!formData.name){errorMessage = 'Enter Name'}
        else if(
            !formData.email.includes('@') || 
            !formData.email.includes('.') ||
            formData.email[formData.email.length]==='.' || 
            formData.email[formData.email.length]==='@' || 
            formData.email[0]==='.' ||
            formData.email[0]==='@' ||
            formData.email.length<5
        ){
            errorMessage = 'Enter valid email'
        }
        else if(!formData.subject){errorMessage = 'Enter Subject'}
        else if(!formData.message){errorMessage = 'Enter Message'}
        
        console.log('ERROR: ', errorMessage)

        if(!errorMessage){
            let email = await sendApiEmail(formData)
            if(email){
                setMessage('Message Sent!')
            }else{
                setMessage('Error Sending Message')
            }
        }else{
            setMessage('ERR'+errorMessage)
        }
        //send email
        
    }

    const handleChange = () => {
        setMessage('')
    }

    let form = (
        <form  onSubmit={handleSubmit} onChange={handleChange} className='contact-form'>
        <label  style={{color: colors.light, fontSize:'20px',height:'20px'}}>Name:</label>
        <input name="name" type="text" />
        <br/>
        <label  style={{color: colors.light, fontSize:'20px',height:'20px'}}>Email:</label>
        <input name="email" type="text" />
        <br/>
        <label  style={{color: colors.light, fontSize:'20px',height:'20px'}}>Subject:</label>
        <input name="subject" type="text" />
        <br/>
        <label  style={{color: colors.light, fontSize:'20px',height:'20px'}}>Message:</label>
        <input name="message" type="text" />
        <br/>
        <input type="submit" value="Send!" />
        </form>
    )
    
    let formMessageJSX
    if(formMesage.includes('ERR')){
        let message = formMesage.replace('ERR', '')
        formMessageJSX = (
            <p  style={{color: 'red', fontSize:'20px',height:'20px'}}>{message}</p>
        )
    }else{
        formMessageJSX = (
            <p  style={{color: colors.light, fontSize:'20px',height:'20px'}}>{formMesage}</p>
        )
    }

    return(
        <table><tbody>
            <tr><td className = 'introduction_td' style={{color: colors.light, fontSize:'70px',height:'70px'}}>Contact Me!</td></tr>
            <tr><td>
                {form}
                {formMessageJSX}
            </td></tr>
        </tbody></table>
    )
    
    
}

export default Contact