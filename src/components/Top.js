
import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { colors } from '../assets/styles';
import Todo from './Todo/Todo';
import TopNav from './TopNav';
import Journal from './Journal/Journal';
import { useSelector, useDispatch } from 'react-redux'
import {getStoredUserData} from '../utils/userUtils'
import { setUser } from '../reducers/slices';


export const Pages = {
    TODO: Symbol("todo"),
    CALENDAR: Symbol("calendar"),
    JOURNAL: Symbol("journal")
};

function Top() {
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const navigate  = useNavigate();

    const [currentPage, setCurrentPage] = useState(Pages.JOURNAL)

    useEffect(() => {
        const storedUser = getStoredUserData();
        // console.log("STORED USER IN TOP: ", storedUser);
        // console.log("APP USER IN TOP: ", user);
    
        if (storedUser?.user_id) {
            // If storedUser exists but Redux state is empty
            if (!user?.user_id) {
                console.log("Setting app user from storedUser");
                dispatch(setUser(storedUser));
            }
        } else {
            // No storedUser found
            console.log("No user found -> redirecting to login");
            navigate('/login');
        }
    }, [dispatch, navigate, user]);

    const getPage = () => {
        if(currentPage === Pages.TODO){
            return (<Todo></Todo>)
        }
        else if(currentPage === Pages.CALENDAR){
            return (<Todo></Todo>)
        }
        else if(currentPage === Pages.JOURNAL){
            return (<Journal user = {user}></Journal>)
        }
    }
    // console.log("USER: ", user)
    // console.log("USER: ", user.id?true:false)

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