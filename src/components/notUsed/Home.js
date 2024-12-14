
import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
import Header from './Header';
import About from './AboutMe';
import { colors } from '../../assets/styles';
// import Footer from './Footer';
import Contact from './ContactMe';

const introductionText = [
    'Hi, my name is',
    'Devin Borchard',
    'software engineer',
    'I do fullstack development for web applications, and love a good API. I\'m constantly looking for the next interesting thing to learn, and add to my repertoire.',
]

const introductionStlyes = [
    {color: colors.accent, size:50, lines:1, 'font-weight': 'bold'},
    {color: colors.light, size:150, lines:1, 'font-weight': 'bold'},
    {color: colors.grey, size:70, lines:1},
    {color:  colors.grey, size:30, lines:2},
]

function Home() {

    const navigate  = useNavigate();

    const about = React.useRef(null)
    const contact = React.useRef(null)
    // const stuff = React.useRef(null)

    const scrollAbout = () => about.current.scrollIntoView()
    const scrollContact = () => contact.current.scrollIntoView()    

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
            <Header  scrollAbout={scrollAbout} scrollContact={scrollContact}></Header>
            <div className='introduction'> 
                <table className='introduction_table'>
                    <tbody>
                        {introduction}
                        <tr>
                            <td className='introduction_button_td'>
                                <a href = "https://github.com/devinborchard">
                                <button className='introduction_button'>Check out my stuff !</button>
                                </a>
                            </td>
                            <td className='introduction_button_td'>
                                <button className='introduction_button' onClick={scrollAbout}>About me !</button>
                            </td>
                            <td className='introduction_button_td'>
                                <button className='introduction_button' onClick={scrollContact}>Contact me !</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 ref={about} className = 'headers' style={{paddingTop: '0px',marginTop:'0%', color: colors.light, fontSize:'70px',height:'70px', textAlign:'center'}}>About Me!</h3>
            <div className='about'> 
                <About></About>
            </div>
            <h3 ref={contact} className = 'headers' style={{paddingTop: '100px',marginTop:'20%', color: colors.light, fontSize:'70px',height:'70px', textAlign:'center'}}>Contact Me!</h3>
            <div style = {{backgroundColor:colors.grey}} className='contact'> 
                <Contact></Contact>
            </div>
        </div>
        
    )

    
}

export default Home