
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
import {
    Link
  } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import TextEditor from './TextEditor';

const introductionText = [
    'Hi, my name is',
    'Devin Borchard',
    'software engineer',
    'I do fullstack development for web applications, and love a good API. I\'m constantly looking for the next interesting thing to learn, and add to my repertoire.',
]

const introductionStlyes = [
    {color: '#BA6FEC', size:50, lines:1, 'font-weight': 'bold'},
    {color: '#EAEFFC', size:150, lines:1, 'font-weight': 'bold'},
    {color: '#9DA6BF', size:70, lines:1},
    {color: '#9DA6BF', size:30, lines:2},
]

function Home() {

    const navigate  = useNavigate();

    let introduction = introductionText.map((line,i) => {
        let style = introductionStlyes[i]
        style.fontSize = `${style.size}px`
        style.height = `${style.size*style.lines+50}px`
        return (
            <tr><td className = 'introduction_td' style={style}>{line}</td></tr>
        )
    })

    return(
        <div className = 'general'>
            {/*<Header></Header>*/}
            <div className='introduction'> 
                <table className='introduction_table'>
                    <tbody>
                        {introduction}
                        <tr>
                            <td className='introduction_button_td'>
                                <button className='introduction_button' onClick={(e) => {
                                    navigate('/stuff')
                                }}>Check out my stuff !</button>
                            </td>
                            <td className='introduction_button_td'>
                                <button className='introduction_button' onClick={(e) => {
                                    navigate('/about')
                                }}>About me !</button>
                            </td>
                            <td className='introduction_button_td'>
                                <button className='introduction_button' onClick={(e) => {
                                    navigate('/contact')
                                }}>Contact me !</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </div>
        
    )

    
}

export default Home