
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

    const formLabelStyle = {color: colors.dark, fontSize:'30px',height:'30px', paddingTop:'30px'}
    const formInputStyle = {width:'100%', fontSize:'20px', textAlign:'center'}

    let form = (
        <form  onSubmit={handleSubmit} onChange={handleChange}>
        <label  style={formLabelStyle}>Name:</label>
        <input style={formInputStyle} name="name" type="text" />
        <br/>
        <br/>
        <label  style={formLabelStyle}>Email:</label>
        <input style={formInputStyle} name="email" type="text" />
        <br/>
        <br/>
        <label  style={formLabelStyle}>Subject:</label>
        <input style={formInputStyle} name="subject" type="text" />
        <br/>
        <br/>
        <label  style={formLabelStyle}>Message:</label>
        <textarea multiline={true} style={{ width:'100%', height:'200px',maxHeight:'500px', fontSize:'20px'}} name="message" type="text" />
        <br/>
        <br/>
        <input style={{width:'60%', fontSize:'20px', textAlign:'center', marginBottom:'3%'}} type="submit" value="Send!" />
        <br/>
        </form>
    )
    
    let formMessageJSX
    if(formMesage.length){
        if(formMesage.includes('ERR')){
            let message = formMesage.replace('ERR', '')
            formMessageJSX = (
                <p  style={{color: 'red', fontSize:'20px',height:'20px'}}>{message}</p>
            )
        }else{
            formMessageJSX = (
                <p  style={formLabelStyle}>{formMesage}</p>
            )
        }
    }
   

    return(
        <table style={{margin:'0 auto', width:'80%'}}><tbody>
            <tr><td>
                {form}
                {formMessageJSX}
            </td></tr>
        </tbody></table>
    )
    
    
}

export default Contact