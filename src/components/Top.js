
import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { colors } from '../assets/styles';
import Todo from './Todo/Todo';
import TopNav from './TopNav';
import Journal from './Journal/Journal';


export const Pages = {
    TODO: Symbol("todo"),
    CALENDAR: Symbol("calendar"),
    JOURNAL: Symbol("journal")
};

function Top() {

    const navigate  = useNavigate();

    const [currentPage, setCurrentPage] = useState(Pages.JOURNAL)

    useEffect(()=>{

    }, [])

    const getPage = () => {
        if(currentPage === Pages.TODO){
            return (<Todo></Todo>)
        }
        else if(currentPage === Pages.CALENDAR){
            return (<Todo></Todo>)
        }
        else if(currentPage === Pages.JOURNAL){
            return (<Journal></Journal>)
        }
    }

    return(
        <>
        <table>
            <tbody>
            <tr>
                <td style={{width:"100%"}}>{getPage()}</td>
                <td style={{width:"auto", textAlign:"right", padding: "10px"}}><TopNav setCurrentPage = {setCurrentPage}></TopNav></td>
            </tr>
            </tbody>
        </table>
        </>
    )
}

export default Top