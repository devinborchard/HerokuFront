
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    Link
  } from "react-router-dom";
import {removeUser} from '../reducers/slices'
import { useNavigate  } from 'react-router-dom';
import { colors } from '../assets/styles';

function About() {
    const navigate  = useNavigate();

    // `portfolio 

    // About me:
    // I grew up and went to high school in Maine where I played a lot of soccer and some tennis in my youth. I lived there until attending college at the University of New Hampshire. I graduated in 2020 with a B.S. in computer Engineering.
    
    // After graduating I worked at Form3D LLC, where I wrote manufacturing web applications. This Manufacturing Execution System was my first baby and made me fall in love with the technology, and the process of web development.
    
    //  Later I was hired by Realsynch to write real estate data integration software. They use partner APIs and webhooks to keep the same data integrating live between different platforms so that real estate agencies only need to keep track of their data on one platform but get all the benefits of using other platforms.
    
    // These days i’m mostly using Node.js, React, Typescript, Javascript
    
    // I now live in Newmarket NH with my girlfriend, Taylor and our cat, beans. 
    
    // Outside of work
    // I’m always dabbling in new hobbies that catch my interest. I play a lot of chess, both online and the occasional over the board tournament. I frequently go to the gym to stay in shape and balance out all the time I spend coding and on the computer. I’ve recently gotten into VR with the purchase of a Meta Quest 2 and am a big beat saber fan. I sometimes play online PC games with my friends like League of Legends and Minecraft in the evenings to relax.
    // `

    let textStyle = {
        color: colors.grey,
        fontSize: '30px'
    }

    return(

        <table><tbody>
            <tr><td style = {textStyle}>I grew up and went to high school in Maine where I played a lot of soccer and some tennis in my youth. I lived there until attending college at the University of New Hampshire. I graduated in 2020 with a B.S. in computer Engineering.</td></tr>
            <br/>
            <tr><td style = {textStyle}>After graduating I worked at Form3D LLC, where I wrote manufacturing web applications. This Manufacturing Execution System was my first baby and made me fall in love with the technology, and the process of web development.</td></tr>
            <br/>
            <tr><td style = {textStyle}>Later I was hired by Realsynch to write real estate data integration software. They use partner APIs and webhooks to keep the same data integrating live between different platforms so that real estate agencies only need to keep track of their data on one platform but get all the benefits of using other platforms.</td></tr>
            <br/>
            <tr><td style = {textStyle}>These days i’m mostly using Node.js, React, Typescript, Javascript</td></tr>
            <br/>
            <tr><td style = {textStyle}>I now live in Newmarket NH with my girlfriend, Taylor and our cat, Beans. </td></tr>
            <br/>
            <tr><td><h3 style={{color: colors.light, fontSize:'40px', textAlign:'center'}}>Outside of Work</h3></td></tr>
            <tr><td style = {textStyle}>I’m always dabbling in new hobbies that catch my interest. I play a lot of chess, both online and the occasional over the board tournament. I frequently go to the gym to stay in shape and balance out all the time I spend coding and on the computer. I’ve recently gotten into VR with the purchase of a Meta Quest 2 and am a big Beat Saber fan. I sometimes play online PC games with my friends like League of Legends and Minecraft in the evenings to relax.</td></tr>
        </tbody></table>
    )

    
}

export default About