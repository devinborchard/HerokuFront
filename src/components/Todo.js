
import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
// import Header from './Header';
// import About from './AboutMe';
import { colors } from '../assets/styles';
// import Footer from './Footer';
// import Contact from './ContactMe';
import List from './List';
// import Draggable from 'react-draggable'; // The default



function Todo() {

    const navigate  = useNavigate();

    const [lists, setLists] = useState([0])

    useEffect(()=>{

            
    }, [])
    

    const createList = async () => {
        setLists((prevList) => [...prevList, 0]);
    }

    let listsJSX = lists.map((list,i) =>{
        return(
            <td key = {`list_${i}`}><List ></List></td>
            
        )
    })


    return(
        <>
        <div style={{paddingTop: '0px',marginTop:'0%', color: colors.light, textAlign:'center'}}>
            <h1>Todo List Head Text</h1>
            <button className='recipeButton' onClick={createList}>Create List +</button>
        </div>
        <div>
        <table >
            <tbody><tr>{listsJSX}</tr></tbody>
        </table>
        </div>
        </>
    )

}

export default Todo